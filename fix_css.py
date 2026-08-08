import re
import codecs

with codecs.open('registration.html', 'r', 'utf-8') as f:
    content = f.read()

new_css = """
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; background-color: #fff; color: #111; overflow-x: hidden; }

    .split-container { display: flex; min-height: 100vh; width: 100%; }

    /* LEFT SIDE - DARK SPLASH */
    .split-left {
      width: 50%;
      background: linear-gradient(rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.95)), url('images/event-images/images (4).jpeg') center/cover;
      padding: 4rem 5rem;
      display: flex; flex-direction: column; color: #fff; position: fixed; height: 100vh;
    }
    .back-btn { color: #999; text-decoration: none; font-size: 0.85rem; letter-spacing: 2px; margin-bottom: auto; text-transform: uppercase; transition: color 0.3s; }
    .back-btn:hover { color: #fff; }
    .left-tagline { color: #1a73e8; font-weight: 700; letter-spacing: 2px; font-size: 0.75rem; text-transform: uppercase; margin-top: 4rem; }
    .left-heading { font-family: 'Playfair Display', serif; font-size: 3.5rem; font-weight: 700; line-height: 1.1; margin: 2rem 0; letter-spacing: -1px; }
    .left-heading span { color: #1a73e8; }
    .left-desc { font-size: 1rem; line-height: 1.6; color: #b0b0b8; margin-bottom: 2rem; max-width: 480px; }
    .left-bullets { list-style-type: none; margin-bottom: 2rem; }
    .left-bullets li { font-size: 0.9rem; color: #8c8c9a; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px; }

    /* RIGHT SIDE - FORM */
    .split-right {
      width: 50%; margin-left: 50%; padding: 4rem 5rem; background-color: #fff; min-height: 100vh;
    }
    
    .container { max-width: 100%; box-shadow: none; border: none; background: #fff; padding: 0; }
    .right-tagline { color: #1a73e8; font-weight: 700; letter-spacing: 2px; font-size: 0.75rem; margin-bottom: 2rem; text-transform: uppercase; display: block; }

    /* UI FIXES for the Old Fields */
    .section-title { font-size: 1.4rem; font-weight: 700; margin-bottom: 0.5rem; color: #111; letter-spacing: -0.5px; }

    .stepper { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3rem; gap: 10px; position: relative; }
    .step { display: flex; flex-direction: column; align-items: center; flex: 1; position: relative; }
    .step-circle { width: 35px; height: 35px; border-radius: 50%; background: #f0f0f0; color: #999; font-weight: 600; font-size: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; z-index: 2; transition: all 0.3s; }
    
    .step.active .step-circle { background: #1a73e8; color: #fff; box-shadow: 0 4px 10px rgba(26,115,232,0.3); }
    .step-title { font-size: 9.5px; color: #aaa; text-align: center; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; line-height: 1.3; margin-top: 5px; }
    .step.active .step-title { color: #111; font-weight: 700; }
    
    /* Progress timeline line */
    .step:not(:last-child)::after {
      content: ""; position: absolute; top: 17px; left: 52%; width: 95%; height: 2px; background: #eee; z-index: 1;
    }
    .step.active:not(:last-child)::after { background: #1a73e8; }

    .form-step label { display: block; font-size: 0.75rem; font-weight: 600; color: #888; letter-spacing: 1px; margin-bottom: 0.4rem; text-transform: uppercase; margin-top: 1.5rem; }
    .required { color: #d93025; font-weight: 700; }
    
    input[type="text"], input[type="email"], input[type="tel"], input[type="url"], select, textarea {
      width: 100%; background: transparent; border: none; border-bottom: 1px solid #e1e1e1; color: #111 !important; font-size: 1rem; padding: 10px 0; outline: none !important; border-radius: 0; transition: border 0.3s; font-family: inherit; margin-bottom: 0.5rem;
    }
    input::placeholder, textarea::placeholder { color: #ccc; }
    input:focus, select:focus, textarea:focus { border-bottom: 2px solid #1a73e8; }
    select { cursor: pointer; }
    textarea { resize: vertical; margin-top: 5px; }

    /* Fix weird email row */
    .email-row { display: flex; gap: 15px; align-items: flex-end; }
    .email-row input { flex: 1; margin-bottom: 0; }
    
    /* Buttons */
    .next-btn, .submit-btn, .button, .otp-btn {
      background-color: #1a73e8; color: #fff; border: none; border-radius: 30px; padding: 12px 28px; font-size: 0.95rem; font-weight: 600; cursor: pointer; display: inline-block; transition: background-color 0.3s; margin-top: 2.5rem; margin-right: 10px;
    }
    .next-btn:hover, .submit-btn:hover, .otp-btn:hover { background-color: #1557b0; }
    .next-btn:disabled, .otp-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .otp-btn { margin-top: 0; padding: 10px 20px; white-space: nowrap; margin-bottom: 5px; }
    
    .hidden { display: none !important; }
    .error-message { font-size: 0.8rem; color: #d93025; margin-top: 8px; display: none; }
    
    /* Specifically hide the old star background container glow */
    .particles { display: none; }
    .reg-banner { display: none; }
    
    @media (max-width: 992px) {
      .split-container { flex-direction: column; }
      .split-left, .split-right { width: 100%; position: relative; height: auto; min-height: 50vh; margin: 0; padding: 3rem 2rem; }
      .left-heading { font-size: 2.8rem; }
      .step:not(:last-child)::after { left: 55%; width: 90%; }
      .email-row { flex-direction: column; align-items: flex-start; }
      .otp-btn { margin-top: 1rem; width: 100%; }
    }
  </style>
"""

# Replace anything between <style> and </style> inclusive with new_css
updated_content = re.sub(r'<style>[\s\S]*?<\/style>', new_css, content, 1)

with codecs.open('registration.html', 'w', 'utf-8') as f:
    f.write(updated_content)

print("CSS updated successfully!")
