const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let totalChanged = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    let fileChanged = false;
    content = content.replace(/<a\b[^>]*>/gi, match => {
        // Find href="http..." or href='http...'
        const hrefMatch = match.match(/href=(["'])(https?:\/\/[^\1]+)\1/i);
        if (!hrefMatch) return match;
        
        // Exclude our own domain if needed, but standard is all http links.
        // If it already has target="_blank", ignore.
        if (/target=(["'])_blank\1/i.test(match)) {
            return match;
        }
        
        // Remove existing target attributes
        let newMatch = match.replace(/\starget=(["'])[^"']*\1/i, '');
        
        // Insert target="_blank"
        // Also handle the rare case of <a ... /> though valid HTML5 is <a></a>
        if (newMatch.endsWith('/>')) {
            newMatch = newMatch.slice(0, -2) + ' target="_blank"/>';
        } else {
            newMatch = newMatch.slice(0, -1) + ' target="_blank">';
        }
        
        fileChanged = true;
        return newMatch;
    });

    if (fileChanged) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated external links in ${file}`);
        totalChanged++;
    }
}
console.log(`Processed ${totalChanged} files.`);
