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

  // Replace any event-images/images (4).jpeg variant with event-images/about-img-1.jpg
  // This matches single/double quotes, escaped spaces/brackets, and quote mismatches
  content = content.replace(/url\(['"]?\/images\/event-images\/images[\s\S]*?\.jpeg['"]?\)?/g, "url('/images/event-images/about-img-1.jpg')");

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated hero background in: ${file}`);
  } else {
    console.log(`No matching background found in: ${file}`);
  }
});

console.log('Background image update completed.');
