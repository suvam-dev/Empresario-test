const fs = require('fs');
const path = require('path');

const PAGES = [
  { file: 'app/page.js', needNavbar: true, needFooter: true },
  { file: 'app/info/page.js', needNavbar: true, needFooter: true },
  { file: 'app/mentors/page.js', needNavbar: true, needFooter: true },
  { file: 'app/tracks/page.js', needNavbar: true, needFooter: true },
  { file: 'app/services/page.js', needNavbar: true, needFooter: true },
  { file: 'app/winners/page.js', needNavbar: true, needFooter: true },
  { file: 'app/associations/page.js', needNavbar: true, needFooter: true },
  { file: 'app/media/page.js', needNavbar: true, needFooter: true },
  { file: 'app/sponsors/page.js', needNavbar: true, needFooter: true },
  { file: 'app/incentives/page.js', needNavbar: true, needFooter: true },
  { file: 'app/resources/page.js', needNavbar: true, needFooter: true },
  { file: 'app/contact-us/page.js', needNavbar: true, needFooter: true },
  { file: 'app/coming-soon/page.js', needNavbar: false, needFooter: true },
  { file: 'app/game/page.js', needNavbar: false, needFooter: true }
];

PAGES.forEach(({ file, needNavbar, needFooter }) => {
  const filePath = path.resolve(file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Remove scroll-progress and social-sidebar if we need footer
  if (needFooter) {
    // Regex matches scroll-progress div and everything inside it
    content = content.replace(/<div className="scroll-progress d-none d-xxl-block">[\s\S]*?<\/div>\n?/g, '');
    // Regex matches social-sidebar div and everything inside it
    content = content.replace(/<div className="social-sidebar">[\s\S]*?<\/div>\n?/g, '');
  }

  // 2. Replace Header and Footer with components
  if (needNavbar) {
    content = content.replace(/<header>[\s\S]*?<\/header>/g, '<Navbar />');
  }
  if (needFooter) {
    content = content.replace(/<footer[\s\S]*?<\/footer>/g, '<Footer />');
  }

  // 3. Add imports if they are not present
  if (needNavbar || needFooter) {
    let imports = '';
    if (needNavbar && !content.includes('import Navbar')) {
      imports += 'import Navbar from "@/components/Navbar";\n';
    }
    if (needFooter && !content.includes('import Footer')) {
      imports += 'import Footer from "@/components/Footer";\n';
    }

    if (imports) {
      if (content.startsWith('"use client";')) {
        content = content.replace('"use client";', `"use client";\n\n${imports}`);
      } else {
        content = imports + content;
      }
    }
  }

  // 4. Fix relative image and link paths
  content = content.replace(/src="images\//g, 'src="/images/');
  content = content.replace(/src='images\//g, "src='/images/");
  content = content.replace(/data-at2x="images\//g, 'data-at2x="/images/');
  content = content.replace(/data-at2x='images\//g, "data-at2x='/images/");
  content = content.replace(/href="images\//g, 'href="/images/');
  content = content.replace(/href='images\//g, "href='/images/");
  
  // Style properties like background: url(...)
  content = content.replace(/url\(['"]?images\//g, "url('/images/");
  // CSS backslash-space event images images\ \(4\).jpeg -> /images/event-images/images\ \(4\).jpeg
  content = content.replaceAll("url(images/event-images/images\\ \\(4\\).jpeg)", "url(/images/event-images/images\\ \\(4\\).jpeg)");
  content = content.replaceAll("url('images/event-images/images\\ \\(4\\).jpeg')", "url('/images/event-images/images\\ \\(4\\).jpeg')");

  // Fix index html links
  content = content.replace(/href="\/index"/g, 'href="/"');
  content = content.replace(/href="\/index\?/g, 'href="/?');
  content = content.replace(/href='\/index'/g, "href='/'");
  content = content.replace(/href='\/index\?/g, "href='/?");

  // 5. Replace missing assets with standard project fallback or none
  content = content.replace(/url\(['"]public\/static\/images\/vertical-line-bg\.svg['"]\)/g, 'none');
  content = content.replace(/url\(['"]images\/vertical-line-bg-medium-gray\.svg['"]\)/g, 'none');
  content = content.replace(/url\(['"]images\/demo-lawyer-practice-areas-02\.jpg['"]\)/g, "url('/images/bg.jpg')");
  content = content.replace(/url\(['"]images\/blockquote-02\.jpg['"]\)/g, "url('/images/bg.jpg')");

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Refactored and fixed paths in: ${file}`);
  } else {
    console.log(`No changes needed in: ${file}`);
  }
});

console.log('All pages refactored successfully.');
