const fs = require('fs');

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    
    // Remove the duplicated onclick and style
    content = content.replace(/(onclick="window\.open\('[^']*', '_blank'\)" style="cursor: pointer;")\s*\1/g, '$1');

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Fixed ${filepath}`);
}

processFile('sponsors.html');
processFile('media.html');
