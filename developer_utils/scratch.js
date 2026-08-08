const fs = require('fs');
const path = require('path');
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let issues = [];

htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for src
    const srcMatches = content.match(/src=["'](.*?)["']/g);
    if (srcMatches) {
        srcMatches.forEach(match => {
            const src = match.split(/["']/)[1];
            if (src && !src.startsWith('http') && !src.startsWith('data:') && !src.startsWith('#')) {
                const srcPath = path.join(__dirname, src.split('?')[0]);
                if (!fs.existsSync(srcPath)) {
                    issues.push(`Missing src in ${file}: ${src}`);
                }
            }
        });
    }

    // Check for href
    const hrefMatches = content.match(/href=["'](.*?)["']/g);
    if (hrefMatches) {
        hrefMatches.forEach(match => {
            const href = match.split(/["']/)[1];
            if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#')) {
                const hrefPath = path.join(__dirname, href.split('?')[0].split('#')[0]);
                if (!fs.existsSync(hrefPath)) {
                    issues.push(`Broken link in ${file}: ${href}`);
                }
            }
        });
    }
});

console.log(issues.slice(0, 30).join('\n'));
if (issues.length > 30) console.log(`...and ${issues.length - 30} more.`);
if (issues.length === 0) console.log("No broken local links or missing assets found.");
