const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Remove any remaining apple-touch-icon links (multiline or single)
    content = content.replace(/<link[^>]*rel=["']apple-touch-icon["'][^>]*>/g, '');

    // Replace missing public/static/images with a placeholder or remove the image element if it's purely decorative
    // To be safe, I'll point them to a valid image like images/ecell-logo(white).png
    content = content.replace(/src=["'](?:public\/static\/)?images\/demo-it-business[-a-zA-Z0-9]*\.(jpg|png|gif|svg)["']/g, 'src="images/ecell-logo(white).png"');
    
    // Some other demo images
    content = content.replace(/src=["'](?:public\/static\/)?images\/logo-[-a-zA-Z0-9]*\.(jpg|png|gif|svg)["']/g, 'src="images/ecell-logo(white).png"');

    // Fix Last Year video space issue (it's actually "Last Year's video.mp4")
    content = content.replace(/src=["']images\/Last Year["']/g, 'src="images/Last Year\'s video.mp4"');

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Fixed more bugs in ${file}`);
    }
});
console.log("Bug fixes part 2 applied successfully.");
