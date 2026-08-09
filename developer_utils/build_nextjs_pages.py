import os
import re

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

def clean_html_to_template_string(html_content):
    # Extract body content if <body> tag exists
    body_match = re.search(r"<body[^>]*>(.*?)</body>", html_content, re.DOTALL | re.IGNORECASE)
    if body_match:
        content = body_match.group(1)
    else:
        content = html_content

    # Remove Cloudflare cdn-cgi email decode scripts if any
    content = re.sub(r'<script[^>]*email-decode\.min\.js[^>]*></script>', '', content, flags=re.IGNORECASE)

    # Replace relative links pointing to .html to local Next.js route paths
    content = content.replace('.html', '')
    content = content.replace('index', '/')

    # Escape backticks and ${} to avoid breaking Javascript template strings
    content = content.replace("`", "\\`").replace("${", "\\${")

    return content

def main():
    for src, dest in html_files:
        if not os.path.exists(src):
            print(f"Skipping {src} (not found)")
            continue

        print(f"Converting {src} to {dest}...")
        with open(src, "r", encoding="utf-8") as f:
            html = f.read()

        body_html = clean_html_to_template_string(html)

        # Create destination directory if it doesn't exist
        dest_dir = os.path.dirname(dest)
        if dest_dir:
            os.makedirs(dest_dir, exist_ok=True)

        component_name = "Page"
        
        # Output a client component that loads the HTML via innerHTML and executes script tags in useEffect
        jsx_page = f""""use client";

import {{ useEffect }} from "react";

export default function {component_name}() {{
  useEffect(() => {{
    const container = document.getElementById("page-html-content");
    if (!container) return;

    // Find and execute all scripts in the injected HTML content
    const scripts = Array.from(container.getElementsByTagName("script"));
    
    // We execute scripts sequentially to preserve dependencies if any
    const executeScripts = async () => {{
      for (const oldScript of scripts) {{
        const newScript = document.createElement("script");
        
        // Copy attributes
        Array.from(oldScript.attributes).forEach(attr => {{
          newScript.setAttribute(attr.name, attr.value);
        }});
        
        if (oldScript.src) {{
          // It is an external script: wait for it to load
          await new Promise((resolve) => {{
            newScript.onload = () => resolve();
            newScript.onerror = () => resolve();
            document.body.appendChild(newScript);
          }});
        }} else {{
          // It is an inline script: execute it
          newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          document.body.appendChild(newScript);
        }}
        
        // Remove the script tag from DOM to avoid duplicate runs
        if (oldScript.parentNode) {{
          oldScript.parentNode.removeChild(oldScript);
        }}
      }}
    }};

    executeScripts();
  }}, []);

  return (
    <div 
      id="page-html-content"
      dangerouslySetInnerHTML={{{{
        __html: `{body_html}`
      }}}} 
    />
  );
}}
"""

        with open(dest, "w", encoding="utf-8") as f:
            f.write(jsx_page)

    print("All pages successfully converted!")

if __name__ == "__main__":
    main()
