const fs = require('fs');

const links = {
    "Sundaram Finance": "https://www.sundaramfinance.in/",
    "Unstop": "https://unstop.com/",
    "MONAD": "https://monad.xyz/",
    "Unicorn India Ventures": "https://www.unicornivc.com/",
    "IDFC FIRST Bank": "https://www.idfcfirstbank.com/",
    "Odoo": "https://www.odoo.com/",
    "JCI": "https://www.jciindia.in/",
    "AI4ICPS": "https://aipps.ca/",
    "YES BANK": "https://www.yesbank.in/",
    "BharatX": "https://bharatx.tech/",
    "TDeFi": "https://tdefi.com/"
};

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');

    // First remove the <a> tags around jci.png and AIPPS.png
    content = content.replace(/<a href="[^"]*" target="_blank">\s*(<img src="images\/(jci|AIPPS)\.png"[^>]*>)\s*<\/a>/g, '$1');

    // For each sponsor, find its comment block and append the onclick to the bg-white div
    for (const [sponsor, url] of Object.entries(links)) {
        const escapedSponsor = sponsor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // The pattern we are looking for:
        // <!-- Sponsor Name -->
        // <div class="...">
        //   <div class="bg-white feature-box ...">
        
        const regex = new RegExp(`(<!-- ${escapedSponsor} -->\\s*<div class="col[^>]*>\\s*<div class="bg-white feature-box[^"]*)(">)`, 'g');
        
        content = content.replace(regex, `$1" onclick="window.open('${url}', '_blank')" style="cursor: pointer;">`);
        
        // Also there are some cases where class="bg-white feature-box..." is followed by other attributes before closing bracket.
        // Wait, the regex matches until '">'. Let's check if the div has other attributes.
        // In the files, it is: class="..." (no other attributes).
        // Let's make it more robust:
        
        const robustRegex = new RegExp(`(<!-- ${escapedSponsor} -->\\s*<div class="col[^>]*>\\s*<div class="bg-white feature-box[^>]*?)>`, 'g');
        content = content.replace(robustRegex, `$1 onclick="window.open('${url}', '_blank')" style="cursor: pointer;">`);
    }

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Processed ${filepath}`);
}

processFile('sponsors.html');
processFile('media.html');
