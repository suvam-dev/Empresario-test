const fs = require('fs');

// We don't want to fail if cheerio is not installed, so let's check
try {
    require.resolve('cheerio');
} catch(e) {
    console.log("cheerio not installed, installing it locally...");
    const { execSync } = require('child_process');
    execSync('npm install cheerio --no-save', {stdio: 'inherit'});
}

const cheerio = require('cheerio');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(content, { decodeEntities: false });
    
    let changed = false;
    $('a').each((i, el) => {
        const href = $(el).attr('href');
        if (href && (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//'))) {
            // Only add target="_blank" if it's not already there
            if ($(el).attr('target') !== '_blank') {
                $(el).attr('target', '_blank');
                changed = true;
            }
        }
    });

    if (changed) {
        fs.writeFileSync(file, $.html(), 'utf8');
        console.log(`Updated external links in ${file}`);
    }
}
