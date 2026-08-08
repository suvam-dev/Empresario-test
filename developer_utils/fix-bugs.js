const fs = require('fs');
const path = require('path');

function decodeCloudflareEmail(encoded) {
    let email = "";
    let r = parseInt(encoded.substr(0, 2), 16);
    for (let n = 2; encoded.length - n; n += 2) {
        let i = parseInt(encoded.substr(n, 2), 16) ^ r;
        email += String.fromCharCode(i);
    }
    return email;
}

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Remove apple-touch-icons
    content = content.replace(/<link rel="apple-touch-icon".*?>\n?/g, '');

    // Replace demo-it-business links with #
    content = content.replace(/href=["']demo-it-business[-a-z0-9]*.html["']/g, 'href="#"');

    // Decode Cloudflare emails
    content = content.replace(/href=["']\/cdn-cgi\/l\/email-protection#(.*?)["']/g, (match, p1) => {
        let decoded = decodeCloudflareEmail(p1);
        return `href="mailto:${decoded}"`;
    });
    
    // Sometimes they are inside spans or anchors without href
    content = content.replace(/<span class="__cf_email__" data-cfemail="(.*?)">.*?<\/span>/g, (match, p1) => {
        let decoded = decodeCloudflareEmail(p1);
        return decoded;
    });

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Fixed bugs in ${file}`);
    }
});
console.log("Bug fixes applied successfully.");
