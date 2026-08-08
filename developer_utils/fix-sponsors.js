const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Safe replacement right after Associations
  const searchStr = '<a href="associations.html" class="nav-link">Associations</a>\n              </li>';
  const replaceStr = '<a href="associations.html" class="nav-link">Associations</a>\n              </li>\n              <li class="nav-item">\n                <a href="sponsors.html" class="nav-link">Sponsors</a>\n              </li>';
  
  if (content.includes(searchStr) && !content.includes('<a href="sponsors.html" class="nav-link">Sponsors</a>')) {
    content = content.replace(searchStr, replaceStr);
    fs.writeFileSync(file, content);
    console.log(`Added Sponsors to ${file}`);
  }
});
