import codecs
import re

with codecs.open('registration.html', 'r', 'utf-8') as f:
    html = f.read()

# 1. Replace the entire <style> block
clean_css = '''  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { padding: 0; margin: 0; }
    body { font-family: 'Inter', sans-serif; background-color: #fff; color: #111; overflow-x: hidden; margin: 0;}
    .split-container { display: flex; min-height: 100vh; width: 100%; margin: 0; padding: 0; }

    /* LEFT SIDE - DARK SPLASH */
    .split-left {
      width: 50%;
      background: linear-gradient(rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.95)), url('images/event-images/images (4).jpeg') center/cover;
      padding: 4rem 5rem;
      display: flex; flex-direction: column; color: #fff; position: fixed; height: 100vh; top: 0; left: 0;
    }
    .back-btn { color: #999; text-decoration: none; font-size: 0.85rem; letter-spacing: 2px; margin-bottom: auto; text-transform: uppercase; transition: color 0.3s; }
    .back-btn:hover { color: #fff; }
    .left-tagline { color: #1a73e8; font-weight: 700; letter-spacing: 2px; font-size: 0.75rem; text-transform: uppercase; margin-top: 4rem; }
    .left-heading { font-family: 'Playfair Display', serif; font-size: 4.2rem; font-weight: 700; line-height: 1.1; margin: 2rem 0; letter-spacing: -1px; }
    .left-heading span { color: #1a73e8; }
    .left-desc { font-size: 1rem; line-height: 1.6; color: #b0b0b8; margin-bottom: 2rem; max-width: 480px; }

    /* RIGHT SIDE - FORM */
    .split-right {
      width: 50%; margin-left: 50%; padding: 4rem 5rem; background-color: #fff; min-height: 100vh;
    }
    .container { max-width: 100%; box-shadow: none; border: none; background: #fff; padding: 0; }
    .right-tagline { color: #1a73e8; font-weight: 700; letter-spacing: 2px; font-size: 0.75rem; margin-bottom: 2.5rem; text-transform: uppercase; display: block; }
    .section-title { font-size: 1.4rem; font-weight: 700; margin-bottom: 0.5rem; color: #111; letter-spacing: -0.5px; margin-top: 0; border: none; text-shadow: none; padding-bottom: 0; }

    .stepper { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; position: relative; border-bottom: 1px solid #f0f0f0; margin-bottom: 2.5rem; padding-bottom: 1rem; }
    .step { display: flex; flex-direction: column; align-items: center; flex: 1; position: relative; }
    
    .step-circle { display: none !important; }
    .step:not(:last-child)::after { display: none !important; }
    
    .step-title { font-size: 0.8rem; font-weight: 700; color: #b0b0b8; margin-top: 0; padding: 10px 0; text-align: center; text-transform: uppercase; letter-spacing: 1px; transition: color 0.25s;}
    .step.active .step-title { color: #1a73e8; }

    .form-step label { display: block; font-size: 0.75rem; font-weight: 600; color: #888; letter-spacing: 1px; margin-bottom: 0.4rem; text-transform: uppercase; margin-top: 1.8rem; }
    .required { color: #d93025; font-weight: 700; animation: none; margin-left: 2px;}
    
    input[type="text"], input[type="email"], input[type="tel"], input[type="url"], select, textarea {
      width: 100%; background: transparent; border: none; border-bottom: 1px solid #e1e1e1; color: #111 !important; font-size: 1rem; padding: 10px 0; outline: none !important; border-radius: 0; transition: border 0.3s; font-family: inherit; margin-bottom: 0.5rem; box-shadow: none; text-shadow: none;
    }
    input::placeholder, textarea::placeholder { color: #ccc !important; font-style: normal !important; text-shadow: none; }
    input:focus, select:focus, textarea:focus { border-bottom: 2px solid #1a73e8; box-shadow: none !important; background: transparent; border-color: #1a73e8 !important; }
    select { cursor: pointer; color: #111; }
    textarea { resize: vertical; margin-top: 5px; font-family: inherit; }

    .email-row { display: flex; gap: 15px; align-items: flex-end; margin-bottom: 16px;}
    .email-row input { flex: 1; margin-bottom: 0; background: transparent; }
    .email-row .otp-btn { margin-top: 0 !important; width: 140px; padding: 0 !important; height: 46px; margin-bottom: 0;}

    /* Button Geometry (Flat and Square) */
    .next-btn, .submit-btn, .button, .otp-btn {
      background: #1a73e8 !important; color: #fff !important; border: none; text-transform: uppercase; font-size: 0.85rem !important; padding: 14px 28px !important; letter-spacing: 1px; flex-shrink: 0; margin-top: 2rem !important; cursor: pointer; display: inline-block; transition: background-color 0.3s; border-radius: 4px !important; box-shadow: none !important; outline: none; outline-offset: 0; transform: none;
    }
    .next-btn:hover, .submit-btn:hover, .otp-btn:hover, .button:hover { background: #1557b0 !important; transform: none; box-shadow: none; border-color: transparent;}
    
    .next-btn:disabled, .otp-btn:disabled, .button:disabled {
      background-color: #d0d0d0 !important; color: #fff !important; cursor: not-allowed !important; opacity: 1 !important; box-shadow: none; border-color: transparent; border: none; transform: none;}
    
    .hidden { display: none !important; }
    .error-message { font-size: 0.8rem; color: #d93025; margin-top: 8px; display: none; }
    .tokens.success, .success-message { color: #28a745; font-size: 1rem; font-weight: 600; margin-top: 20px; background: transparent; border: none; box-shadow: none; animation: none;}

    .particles, .reg-banner, .social-sidebar { display: none !important; }

    @media (max-width: 992px) {
      .split-container { flex-direction: column; }
      .split-left, .split-right { width: 100%; position: relative; height: auto; min-height: 50vh; margin: 0; padding: 3rem 2rem; }
      .left-heading { font-size: 2.8rem; }
      .email-row { flex-direction: column; align-items: flex-start; }
      .email-row .otp-btn { margin-top: 1rem !important; width: 100%; }
      .next-btn { min-width: 100%; }
    }
  </style>'''
html = re.sub(r'<style>[\s\S]*?<\/style>', clean_css, html, 1)

# 2. Add Google Fonts
fonts_html = '''<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">'''
html = html.replace('</head>', fonts_html + '\\n</head>')

# 3. Inject split pane wrapper (Without bullets)
split_html = '''
<div class="split-container">
  <!-- LEFT SIDE -->
  <div class="split-left">
    <a href="index.html" class="back-btn">&larr; BACK TO HOME</a>
    <div class="left-tagline">/ EMPRESARIO STARTUP REGISTRATION</div>
    <h1 class="left-heading">Register your<br><span style="color: #1a73e8;">perfect</span> startup<br>today.</h1>
    <p class="left-desc">We craft the ultimate platform for founders to connect with investors, validate ideas, and raise real capital — built to launch your journey.</p>
  </div>
  <!-- RIGHT SIDE -->
  <div class="split-right">
    <div class="right-tagline">/ REGISTRATION</div>
'''
html = html.replace('<div class="container">', split_html + '<div class="container">')

# 4. Close wrappers at end
html = html.replace('</body>', '</div></div></body>')

# 5. Right Side Desc
html = html.replace("We're here to bring your concept to life, validate your investor story, and build your presentation from the ground up.", 
                   "We're here to bring your concept to life, validate your business model, or build your startup from the ground up.")

# 6. Stepper HTML Texts
html = html.replace('<div class="step-title">EMAIL VERIFICATION</div>', '<div class="step-title">STEP 1</div>')
html = html.replace('<div class="step-title">PERSONAL INFORMATION</div>', '<div class="step-title">STEP 2</div>')
html = html.replace('<div class="step-title">STARTUP INFORMATION</div>', '<div class="step-title">STEP 3</div>')
html = html.replace('<div class="step-title">BUSINESS OVERVIEW</div>', '<div class="step-title">STEP 4</div>')

with codecs.open('registration.html', 'w', 'utf-8') as f:
    f.write(html)
