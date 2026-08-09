const fs = require('fs');
const path = require('path');

const PAGES = [
  'app/page.js',
  'app/info/page.js',
  'app/mentors/page.js',
  'app/tracks/page.js',
  'app/services/page.js',
  'app/winners/page.js',
  'app/associations/page.js',
  'app/media/page.js',
  'app/sponsors/page.js',
  'app/incentives/page.js',
  'app/resources/page.js',
  'app/contact-us/page.js'
];

PAGES.forEach(file => {
  const filePath = path.resolve(file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Match any <section> that contains the about-img-1.jpg background
  content = content.replace(/(<section[^>]*?style=\{\{[\s\S]*?about-img-1\.jpg[\s\S]*?\}\}[^>]*?>)/g, (match) => {
    // 1. Replace 'cover-background' with 'hero-section-container'
    let updated = match;
    if (updated.includes('cover-background')) {
      updated = updated.replace('cover-background', 'hero-section-container');
    } else if (!updated.includes('hero-section-container')) {
      updated = updated.replace('className="', 'className="hero-section-container ');
    }

    // 2. Remove the backgroundImage style attribute
    updated = updated.replace(/backgroundImage:\s*['"]url\(['"]\/images\/event-images\/about-img-1\.jpg['"]\)\s*['"]?,?\s*/g, '');

    // Cleanup double commas or empty styles: style={{, backgroundColor: "#..."}} or style={{}}
    updated = updated.replace(/\{\{\s*,\s*/g, '{{');
    updated = updated.replace(/,\s*\}\}/g, '}}');
    updated = updated.replace(/style=\{\{\s*\}\}/g, '');

    return `${updated}\n<div className="hero-bg-blur"></div>`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Applied background blur markup in: ${file}`);
  } else {
    console.log(`No changes needed in: ${file}`);
  }
});

console.log('Background blur markup applied successfully.');
