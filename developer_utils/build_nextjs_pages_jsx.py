import os
import re
from bs4 import BeautifulSoup, Comment, Declaration, NavigableString

html_files = [
    ("index.html", "app/page.js"),
    ("registration.html", "app/registration/page.js"),
    ("associations.html", "app/associations/page.js"),
    ("coming-soon.html", "app/coming-soon/page.js"),
    ("contact-us.html", "app/contact-us/page.js"),
    ("game.html", "app/game/page.js"),
    ("incentives.html", "app/incentives/page.js"),
    ("info.html", "app/info/page.js"),
    ("media.html", "app/media/page.js"),
    ("mentors.html", "app/mentors/page.js"),
    ("resources.html", "app/resources/page.js"),
    ("services.html", "app/services/page.js"),
    ("sponsors.html", "app/sponsors/page.js"),
    ("tracks.html", "app/tracks/page.js"),
    ("winners.html", "app/winners/page.js"),
]

# These event attributes cannot be inline strings in React — drop them entirely
# (jQuery in vendors.min.js and main.js handles these instead)
DROP_EVENT_ATTRS = {
    "onmouseover", "onmouseout", "onclick", "onload",
    "onchange", "onsubmit", "onfocus", "onblur",
    "onkeydown", "onkeyup", "onkeypress",
}

# Attributes that must be silently dropped for all elements
# 'selected' on <option> is invalid in React — use defaultValue on <select> instead
ALWAYS_DROP_ATTRS = {"selected"}

# HTML attribute → React JSX prop name mapping
ATTR_MAP = {
    "class": "className",
    "for": "htmlFor",
    "tabindex": "tabIndex",
    "autocomplete": "autoComplete",
    "maxlength": "maxLength",
    "readonly": "readOnly",
    "autofocus": "autoFocus",
    "novalidate": "noValidate",
    "autoplay": "autoPlay",
    "playsinline": "playsInline",
    "crossorigin": "crossOrigin",
    "srcset": "srcSet",
    "enctype": "encType",
    "frameborder": "frameBorder",
    "marginheight": "marginHeight",
    "marginwidth": "marginWidth",
    # SVG attributes
    "attributename": "attributeName",
    "repeatcount": "repeatCount",
    "viewbox": "viewBox",
    "referrerpolicy": "referrerPolicy",
    "allowfullscreen": "allowFullScreen",
    "calcmode": "calcMode",
    "keytimes": "keyTimes",
    "keysplines": "keySplines",
    "pathlength": "pathLength",
    "clippath": "clipPath",
    "clippathunits": "clipPathUnits",
    "filterunits": "filterUnits",
    "gradienttransform": "gradientTransform",
    "gradientunits": "gradientUnits",
    "lengthadjust": "lengthAdjust",
    "markerheight": "markerHeight",
    "markerwidth": "markerWidth",
    "markerunits": "markerUnits",
    "patterncontentunits": "patternContentUnits",
    "patterntransform": "patternTransform",
    "patternunits": "patternUnits",
    "preserveaspectratio": "preserveAspectRatio",
    "primitiveunits": "primitiveUnits",
    "refx": "refX",
    "refy": "refY",
    "specularconstant": "specularConstant",
    "specularexponent": "specularExponent",
    "spreadmethod": "spreadMethod",
    "startoffset": "startOffset",
    "stddeviation": "stdDeviation",
    "tablevalues": "tableValues",
    "textlength": "textLength",
    "viewtarget": "viewTarget",
    "xchannelselector": "xChannelSelector",
    "ychannelselector": "yChannelSelector",
    "zoomandpan": "zoomAndPan",
    "numoctaves": "numOctaves",
    "basefrequency": "baseFrequency",
    "repeatdur": "repeatDur",
}

BOOLEAN_ATTRS = {
    "disabled", "checked", "required", "readOnly",
    "autoPlay", "noValidate", "allowFullScreen", "muted", "controls", "loop",
}

SELF_CLOSING = {
    "img", "input", "br", "hr", "source", "link", "meta",
    "embed", "col", "area", "wbr", "track", "param",
}

def css_prop_to_camel(prop):
    """Convert CSS kebab-case property to React camelCase."""
    return re.sub(r'-([a-z])', lambda m: m.group(1).upper(), prop.strip())

def clean_style_value(val):
    """Remove !important and extra whitespace from CSS value strings."""
    return re.sub(r'\s*!important', '', val).strip()

def style_str_to_jsx(style_str):
    """Convert a CSS style string to a React inline style object string."""
    props = []
    for part in style_str.split(";"):
        part = part.strip()
        if ":" not in part:
            continue
        key, val = part.split(":", 1)
        key = key.strip()
        val = clean_style_value(val)
        if not key or not val:
            continue
        camel = css_prop_to_camel(key)
        val_escaped = val.replace('"', '\\"')
        props.append(f'{camel}: "{val_escaped}"')
    if not props:
        return None
    return "{{" + ", ".join(props) + "}}"

def fix_href(val):
    """Convert .html links to clean Next.js paths."""
    # Handle hrefs that end in .html (with optional query string)
    if ".html" in val:
        val = re.sub(r'([^"\']+)\.html([^"\']*)', lambda m: "/" + m.group(1).split("/")[-1] + m.group(2), val)
        val = val.replace("//", "/")
    return val

def convert_attrs(node):
    """Convert a BeautifulSoup tag's attributes to a JSX attribute string."""
    attrs_parts = []
    for raw_k, v in node.attrs.items():
        k = raw_k.lower().strip()

        # Drop event handlers — jQuery manages these
        if k in DROP_EVENT_ATTRS:
            continue

        # Drop attributes that are always invalid in React JSX
        if k in ALWAYS_DROP_ATTRS:
            continue

        # Skip attributes with colons unless they are known SVG ones
        if ":" in k and k not in ["xlink:href", "xml:lang"]:
            continue

        # Validate that attribute name is a legal identifier (catches "min-height: 1200px;" as attr)
        if not re.match(r'^[a-zA-Z_][a-zA-Z0-9_-]*(:[a-zA-Z0-9_-]+)?$', k):
            continue

        jsx_key = ATTR_MAP.get(k, raw_k)

        # Handle style attribute specially
        if k == "style":
            style_str = v if isinstance(v, str) else " ".join(v)
            jsx_style = style_str_to_jsx(style_str)
            if jsx_style:
                attrs_parts.append(f"style={jsx_style}")
            continue

        # Handle boolean attributes
        if jsx_key in BOOLEAN_ATTRS:
            attrs_parts.append(f"{jsx_key}={{true}}")
            continue

        # Handle list values
        if isinstance(v, list):
            v = " ".join(v)
        v_str = str(v)

        # Fix href/src .html → clean paths
        if k in ("href", "src", "action"):
            v_str = fix_href(v_str)

        v_escaped = v_str.replace('"', "&quot;")
        attrs_parts.append(f'{jsx_key}="{v_escaped}"')

    return (" " + " ".join(attrs_parts)) if attrs_parts else ""


def convert_node_to_jsx(node):
    """Recursively convert a BeautifulSoup node to JSX string."""
    # Skip HTML comments and doctype declarations
    if isinstance(node, (Comment, Declaration)):
        return ""

    # Text nodes
    if isinstance(node, NavigableString):
        text = str(node)
        # Escape curly braces to prevent JSX expression injection
        text = text.replace("{", "&#123;").replace("}", "&#125;")
        return text

    tag_name = node.name
    if tag_name is None:
        return ""

    # Remove <script> tags entirely from JSX body — they don't execute in React.
    # jQuery + main.js (loaded via layout.js Script tags) handle all behaviour.
    if tag_name == "script":
        return ""

    # Keep <style> tags but use dangerouslySetInnerHTML to avoid JSX parsing of CSS
    if tag_name == "style":
        inner = node.decode_contents()
        inner_escaped = inner.replace("`", "\\`").replace("${", "\\${")
        attrs_str = convert_attrs(node)
        return f'<style{attrs_str} dangerouslySetInnerHTML={{{{ __html: `{inner_escaped}` }}}} />'

    attrs_str = convert_attrs(node)

    # Self-closing tags
    if tag_name in SELF_CLOSING:
        return f"<{tag_name}{attrs_str} />"

    # Recurse into children
    children_jsx = "".join(convert_node_to_jsx(c) for c in node.children)

    return f"<{tag_name}{attrs_str}>{children_jsx}</{tag_name}>"


def pre_process_html(html):
    """Fix known malformed patterns in HTML before BeautifulSoup parses it."""
    # Fix malformed tag attributes like: <section min-height: 1200px; className=...>
    # These are CSS properties accidentally written outside of a style="" attribute.
    # We simply remove the malformed token so BeautifulSoup can parse the rest cleanly.
    html = re.sub(
        r'(<(?:section|div|span|article|aside|header|footer|main|nav))\s+[a-z-]+:\s*[^"\'<>\s]+;?\s*',
        r'\1 ',
        html
    )
    return html


def html_file_to_jsx(html_content):
    """Convert a full HTML file to JSX body string."""
    # Extract body content
    body_match = re.search(r"<body[^>]*>(.*?)</body>", html_content, re.DOTALL | re.IGNORECASE)
    body_html = body_match.group(1) if body_match else html_content

    # Remove cdn-cgi Cloudflare scripts
    body_html = re.sub(
        r'<script[^>]*cdn-cgi[^>]*></script>', '', body_html, flags=re.IGNORECASE
    )

    # Pre-process to fix malformed attributes
    body_html = pre_process_html(body_html)

    soup = BeautifulSoup(body_html, "html.parser")

    return "".join(convert_node_to_jsx(c) for c in soup.contents)


def main():
    for src, dest in html_files:
        if not os.path.exists(src):
            print(f"  Skipping {src} (not found)")
            continue

        print(f"  Converting {src} → {dest}")
        with open(src, "r", encoding="utf-8") as f:
            html = f.read()

        jsx_body = html_file_to_jsx(html)

        dest_dir = os.path.dirname(dest)
        if dest_dir:
            os.makedirs(dest_dir, exist_ok=True)

        # All pages are Client Components with a mounted guard.
        # This prevents SSR from generating HTML that later differs from
        # what jQuery/main.js modifies on the client, eliminating all
        # hydration mismatch errors.
        jsx_page = f'''"use client";

import {{ useEffect, useState }} from "react";

export default function Page() {{
  const [mounted, setMounted] = useState(false);

  useEffect(() => {{
    setMounted(true);
  }}, []);

  if (!mounted) return null;

  return (
    <>
{jsx_body}
    </>
  );
}}
'''
        with open(dest, "w", encoding="utf-8") as f:
            f.write(jsx_page)

    print("\nAll pages converted to JSX successfully!")


if __name__ == "__main__":
    main()
