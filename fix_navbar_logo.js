const fs = require('fs');
const path = require('path');

const targetHtml = `<a class="navbar-brand" href="index.html">
            <img src="images/logos/Ecell-logo.png" data-at2x="images/logos/Ecell-logo.png" alt="" class="default-logo"
              style="transform: scale(1.5);" />
            <img src="images/logos/empresario-transparent-logo.png"
              data-at2x="images/logos/empresario-transparent-logo.png" alt="" class="alt-logo"
              style="transform: scale(1.5); margin-left: 20px;" />
            <img src="images/logos/empresario-transparent-logo.png"
              data-at2x="images/logos/empresario-transparent-logo.png" alt="" class="mobile-logo"
              style="transform: scale(1.5); margin-left: 20px;" />
          </a>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the navbar-brand anchor tag block
    // We use a regex that matches <a class="navbar-brand" ... </a> where it contains the logos.
    // It spans multiple lines so we use [\s\S]*?
    const regex = /<a\s+class="navbar-brand"[^>]*>[\s\S]*?<\/a>/;
    
    if (regex.test(content)) {
        content = content.replace(regex, targetHtml);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`Could not find navbar-brand in ${file}`);
    }
}
