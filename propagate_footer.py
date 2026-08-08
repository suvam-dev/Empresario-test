import codecs
import re
import os

# Read the new footer from index.html
with codecs.open('index.html', 'r', 'utf-8') as f:
    index_html = f.read()

# Extract the footer block from index.html
match = re.search(r'(<footer[^>]*>[\s\S]*?<\/footer>)', index_html)
if not match:
    print("Error: Could not find footer in index.html")
    exit(1)

new_footer = match.group(1)

# List of target files
targets = [
    'about.html',
    'associations.html',
    'coming-soon.html',
    'contact-us.html',
    'game.html',
    'incentives.html',
    'info.html',
    'media.html',
    'mentors.html',
    'resources.html',
    'services.html',
    'sponsors.html',
    'tracks.html',
    'winners.html'
]

success_count = 0

for filename in targets:
    if os.path.exists(filename):
        with codecs.open(filename, 'r', 'utf-8') as f:
            content = f.read()
        
        # Check if footer exists
        if re.search(r'<footer[^>]*>[\s\S]*?<\/footer>', content):
            # Replace existing footer
            updated_content = re.sub(r'<footer[^>]*>[\s\S]*?<\/footer>', new_footer, content)
            print(f"Replaced footer in {filename}")
        else:
            # If no footer exists, inject it before </body> or script block at end
            if '</body>' in content:
                updated_content = content.replace('</body>', new_footer + '\n</body>')
                print(f"Injected footer before </body> in {filename}")
            else:
                updated_content = content + '\n' + new_footer
                print(f"Appended footer to end of {filename}")
        
        with codecs.open(filename, 'w', 'utf-8') as f:
            f.write(updated_content)
        success_count += 1
    else:
        print(f"Skipping {filename}, does not exist.")

print(f"Successfully applied footer to {success_count} files!")
