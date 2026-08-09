import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Empresario 2026 - E-Cell IIT Kharagpur",
  description:
    "Register for Empresario, the annual startup competition by E-Cell IIT Kharagpur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Template stylesheets — served statically from /public/css/ */}
        <link rel="stylesheet" href="/css/vendors.min.css" />
        <link rel="stylesheet" href="/css/icon.min.css" />
        <link rel="stylesheet" href="/css/style.min.css" />
        <link rel="stylesheet" href="/css/responsive.min.css" />
      </head>
      <body>
        {children}

        {/*
          Script load order matters:
          1. jQuery must exist before anything else
          2. vendors.min.js includes the jquery.appear plugin + all other vendor libs
          3. main.js initialises all UI behaviour — it MUST run after jquery + vendors
          
          We use afterInteractive so they fire after the page hydrates but before
          any user interaction, which is the equivalent of a DOMContentLoaded script.
          A global flag `window.__mainJsInitialised` prevents double-init on hot reloads.
        */}
        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/vendors.min.js" strategy="afterInteractive" />
        <Script
          id="main-js-init"
          strategy="afterInteractive"
          src="/js/main.js"
        />
      </body>
    </html>
  );
}
