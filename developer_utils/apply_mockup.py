import codecs
import re

with codecs.open('registration.html', 'r', 'utf-8') as f:
    html = f.read()

# 1. Left Side Text Replacements
html = html.replace('&larr; BACK TO EMPRESARIO', '&larr; BACK TO HOME')
html = html.replace('/ REGISTRATION ENTRY', '/ EMPRESARIO STARTUP REGISTRATION')
html = html.replace('''Let's build<br>your <span style="color: #1a73e8;">perfect</span><br>pitch together.''', 
                    '''Register your<br><span style="color: #1a73e8;">perfect</span> startup<br>today.''')

old_desc = '''We craft investor-ready foundations that combine compelling narrative, clean structure, and strategic business modeling — built to raise real capital.'''
new_desc = '''We craft the ultimate platform for founders to connect with investors, validate ideas, and raise real capital — built to launch your journey.'''
html = html.replace(old_desc, new_desc)

html = html.replace('✓ Connect with global top-tier Venture Capitalists', '✓ 500+ startups accelerated globally')
html = html.replace('✓ Gain exclusive access to 1-on-1 industry mentorship', '✓ Direct access to top VCs and Angel Investors')
html = html.replace('✓ Showcase your model on our international stage', '✓ Unmatched mentorship and ecosystem support')

# 2. Right Side Text Replacements
html = html.replace('/ SUBMIT APPLICATION ENTRY', '/ REGISTRATION')
old_right_desc = '''We're here to bring your concept to life, validate your investor story, and build your presentation from the ground up.'''
new_right_desc = '''We're here to bring your concept to life, validate your business model, or build your startup from the ground up.'''
html = html.replace(old_right_desc, new_right_desc)

# 3. Stepper HTML Texts
html = html.replace('<div class="step-title">EMAIL VERIFICATION</div>', '<div class="step-title">STEP 1</div>')
html = html.replace('<div class="step-title">PERSONAL INFORMATION</div>', '<div class="step-title">STEP 2</div>')
html = html.replace('<div class="step-title">STARTUP INFORMATION</div>', '<div class="step-title">STEP 3</div>')
html = html.replace('<div class="step-title">BUSINESS OVERVIEW</div>', '<div class="step-title">STEP 4</div>')

# Disable Stepper circles
css_patch = '''
    .step-circle { display: none !important; }
    .stepper { border-bottom: 1px solid #f0f0f0; margin-bottom: 2.5rem; padding-bottom: 1rem; position: relative; }
    .step:not(:last-child)::after { display: none !important; }
    .step-title { font-size: 0.8rem; font-weight: 700; color: #b0b0b8; margin-top: 0; padding: 10px 0; }
    .step.active .step-title { color: #1a73e8; }
    
    /* Button Geometry (Flat and Square) */
    .next-btn, .submit-btn, .button, .otp-btn {
      border-radius: 4px !important; text-transform: uppercase; font-size: 0.85rem !important; padding: 14px 28px !important; letter-spacing: 1px; flex-shrink: 0; margin-top: 2rem !important;
    }
    .email-row .otp-btn {
      margin-top: 0 !important; width: 140px; padding: 0 !important; height: 46px; 
    }
    .next-btn:disabled, .otp-btn:disabled, .button:disabled {
      background-color: #d0d0d0 !important; color: #fff !important; cursor: not-allowed !important; opacity: 1 !important;
    }
'''

# We inject this css_patch just before </style>
html = re.sub(r'<\/style>', css_patch + '\n</style>', html)

# Tweak Left heading sizing slightly as shown in image (smaller gap)
html = html.replace('.left-heading { font-family: \'Playfair Display\', serif; font-size: 3.5rem;', 
                   '.left-heading { font-family: \'Playfair Display\', serif; font-size: 4.2rem;')

with codecs.open('registration.html', 'w', 'utf-8') as f:
    f.write(html)
