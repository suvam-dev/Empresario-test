import codecs
import re

with codecs.open('registration.html', 'r', 'utf-8') as f:
    html = f.read()

# Delete the left-bullets unordered list completely out of the DOM
html = re.sub(r'<ul class="left-bullets">[\s\S]*?<\/ul>', '', html)

with codecs.open('registration.html', 'w', 'utf-8') as f:
    f.write(html)
