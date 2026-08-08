import codecs
import re

with codecs.open('old_registration_temp.html', 'r', 'utf-16le') as f:
    old = f.read()

# Make all the replacements using re.sub
old = re.sub(r'body\s*\{[\s\S]*?position:\s*relative;\s*\}', r'''
  body {
    font-family: 'Inter', sans-serif;
    color: #111;
    background: #fff;
    margin: 0;
    overflow-x: hidden;
  }
  
  .split-container {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  .split-left {
    width: 50%;
    background: linear-gradient(rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.95)), url('images/event-images/images (4).jpeg');
    background-size: cover;
    background-position: center;
    padding: 5rem 6rem;
    display: flex;
    flex-direction: column;
    color: #fff;
    position: fixed;
    height: 100vh;
  }

  .left-heading { font-family: 'Playfair Display', serif; font-size: 4.8rem; font-weight: 700; line-height: 1.05; margin: 3rem 0; letter-spacing: -1px; }
  .left-heading span { color: #1a73e8; }
  .left-tagline { color: #1a73e8; font-weight: 700; letter-spacing: 2px; font-size: 0.85rem; text-transform: uppercase; margin-top: 5rem; }
  .left-desc { font-size: 1.15rem; line-height: 1.6; color: #b0b0b8; margin-bottom: 2rem; max-width: 480px; }

  .split-right {
    width: 50%;
    margin-left: 50%;
    padding: 4rem 5rem;
    background-color: #fff;
    min-height: 100vh;
  }
''', old)

old = re.sub(r'\.container\s*\{[\s\S]*?animation:\s*containerGlow.*?;\s*\}', r'''
  .container {
    max-width: 100%;
    margin: 0;
    background: #fff;
    padding: 0;
    box-shadow: none;
    border: none;
  }
''', old)

old = re.sub(r'@keyframes containerGlow {[\s\S]*?}', '', old)

old = re.sub(r'input\[type="text"\],[\s\S]*?border:\s*none;[\s\S]*?\}', r'''
  input[type="text"], input[type="email"], input[type="tel"], input[type="url"], select, textarea {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #e1e1e1;
    color: #111 !important;
    font-size: 1.1rem;
    padding: 10px 0;
    outline: none !important;
    border-radius: 0;
    transition: border-bottom 0.3s;
    font-family: inherit;
    box-shadow: none !important;
  }
  input::placeholder, textarea::placeholder { color: #ccc; }
  input:focus, select:focus, textarea:focus { border-bottom: 2px solid #1a73e8; background: transparent !important; }
''', old)

old = re.sub(r'\.step-title\s*\{[\s\S]*?color:\s*#b7b7be;[\s\S]*?\}', r'''
  .step-title {
    font-size: 11px;
    color: #aaa;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
    transition: color 0.25s;
  }
''', old)

old = re.sub(r'\.step-circle\s*\{[\s\S]*?\}', r'''
  .step-circle {
    width: 40px; height: 40px; border-radius: 50%;
    background: #f4f4f4; color: #888; font-weight: 600; font-size: 18px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 7px; border: none; box-shadow: none;
    transition: all 0.3s;
  }
''', old)

old = re.sub(r'\.step\.active \.step-circle\s*\{[\s\S]*?\}', r'''
  .step.active .step-circle { background: #1a73e8; color: #fff; box-shadow: none; font-weight: bold; border: none; }
  .step.active .step-title { color: #111; }
  .step:not(:last-child)::after { background: #eee !important; height: 2px !important; }
  .step.active:not(:last-child)::after { background: #1a73e8 !important; }
''', old)

old = re.sub(r'\.form-group label\s*\{[\s\S]*?\}', r'''
  .form-group label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: #888;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
''', old)

old = re.sub(r'\.form-group\s*\{[\s\S]*?\}', r'''
  .form-group { margin-bottom: 2.5rem; position: relative; }
''', old)

old = re.sub(r'\.next-btn,\s*\.submit-btn\s*\{[\s\S]*?\}', r'''
  .next-btn, .submit-btn, .btn, .verify-btn {
    background-color: #1a73e8 !important;
    color: #fff !important;
    border: none !important;
    border-radius: 30px !important;
    padding: 16px 36px !important;
    font-size: 1rem !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 10px !important;
    transition: background-color 0.3s !important;
    box-shadow: none !important;
    margin-right: 15px !important;
  }
  .next-btn:hover, .submit-btn:hover { background-color: #1557b0 !important; }
  .next-btn:disabled, .submit-btn:disabled { opacity: 0.5; cursor: not-allowed !important; }
''', old)

old = re.sub(r'\.prev-btn\s*\{[\s\S]*?\}', r'''
  .prev-btn {
    background-color: transparent !important;
    color: #888 !important;
    border: 1px solid #ccc !important;
    border-radius: 30px !important;
    padding: 16px 36px !important;
    font-size: 1rem !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    margin-right: 15px !important;
  }
  .prev-btn:hover { border-color: #111 !important; color: #111 !important; }
''', old)

old = re.sub(r'<div class="particles" id="particles"><\/div>', '', old)
old = re.sub(r'<div class="reg-banner">[\s\S]*?<\/div>', r'''
  <div class="right-tagline" style="color: #1a73e8; font-weight: 700; letter-spacing: 2px; font-size: 0.85rem; padding-bottom: 1.5rem; text-transform: uppercase;">/ REGISTRATION ENTRY</div>
''', old)

splitLeftHtml = '''
<div class="split-container">
  <div class="split-left">
    <a href="index.html" style="color: #999; text-decoration: none; font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: auto;">&larr; BACK TO EMPRESARIO</a>
    <div class="left-tagline">/ REGISTRATION ENTRY</div>
    <h1 class="left-heading">Let's build<br>your <span>perfect</span><br>pitch together.</h1>
    <p class="left-desc">We craft investor-ready foundations that combine compelling narrative, clean structure, and strategic business modeling — built to raise real capital.</p>
  </div>
  <div class="split-right">
'''

old = re.sub(r'<div class="container">', splitLeftHtml + '\n<div class="container">', old)
old = re.sub(r'<\/body>', '</div></div></body>', old)
old = re.sub(r'<div class="social-sidebar">[\s\S]*?<\/div>', '', old)

with codecs.open('registration.html', 'w', 'utf-8') as f:
    f.write(old)

print('Done writing python!')
