const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace all <a> tags that have an href starting with http://, https://, or //
    content = content.replace(/<a\s+([^>]*?)href=(["'])((?:https?:)?\/\/[^\2]+)\2([^>]*)>/gi, (match, before, quote, url, after) => {
        // Remove any existing target attribute
        let newBefore = before.replace(/\s*target=(["'])[^"']*\1/i, '');
        let newAfter = after.replace(/\s*target=(["'])[^"']*\1/i, '');
        
        return `<a ${newBefore}href="${url}" target="_blank"${newAfter}>`;
    });

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Processed ${file}`);
}
