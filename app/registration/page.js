"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>

<div className="particles" id="particles"></div>
<div className="reg-banner">
<h1>Empresario Startup Registration 2026</h1>
</div>
<div className="split-container">

<div className="split-left">
<a href="/index" className="back-btn">← BACK TO HOME</a>
<div className="left-tagline">/ EMPRESARIO STARTUP REGISTRATION</div>
<h1 className="left-heading">Register your<br /><span style={{color: "#1a73e8"}}>perfect</span> startup<br />today.</h1>
<p className="left-desc">We craft the ultimate platform for founders to connect with investors, validate ideas, and
        raise real capital — built to launch your journey.</p>
</div>

<div className="split-right position-relative">
<div className="right-tagline" style={{marginBottom: "1.5rem"}}>/ SEND INQUIRY</div>
<p style={{fontSize: "1.25rem", fontWeight: "500", color: "#7f8c8d", lineHeight: "1.6", marginBottom: "2rem", maxWidth: "90%"}}>
        We're here to bring your concept to life, craft your investor story, or build your pitch deck from the ground
        up.</p>
<a href="#" style={{position: "absolute", right: "0", top: "8rem", background: "#25a4ff", color: "white", fontSize: "1.5rem", padding: "12px 12px 12px 20px", borderRadius: "8px 0 0 8px", boxShadow: "-2px 2px 10px rgba(0,0,0,0.1)", textDecoration: "none"}}>🚀</a>
<div className="container">
<div className="stepper" style={{display: "none"}}>
<div className="step active" id="step-1-indicator">
<div className="step-circle">1</div>
<div className="step-title">STEP 1</div>
</div>
<div className="step" id="step-2-indicator">
<div className="step-circle">2</div>
<div className="step-title">STEP 2</div>
</div>
<div className="step" id="step-3-indicator">
<div className="step-circle">3</div>
<div className="step-title">STEP 3</div>
</div>
<div className="step" id="step-4-indicator">
<div className="step-circle">4</div>
<div className="step-title">STEP 4</div>
</div>
</div>

<form id="regForm" noValidate={true}>
<div id="step-1" className="form-step">
<label>Email ID <span className="required">*</span></label>
<div className="email-row">
<input type="email" id="email" required={true} placeholder="Enter your email" />
<button type="button" className="otp-btn" id="sendOtpBtn">
                Send OTP
              </button>
</div>
<div id="email-error" className="error-message">
              Please enter a valid email address.
            </div>
<div id="otp-section" className="hidden" style={{marginTop: "20px"}}>
<label>Enter OTP <span className="required">*</span></label>
<input type="text" id="otp" maxLength="6" placeholder="Enter OTP" required={true} />
<div id="otp-error" className="error-message">
                Please enter the OTP sent to your email.
              </div>
</div>
<button type="button" className="next-btn" id="nextBtn" disabled={true}>
              Verify OTP
            </button>
</div>

<div id="step-2" className="form-step" style={{marginTop: "3rem"}}>
<div className="form-section">
<div className="section-title">Founder & Team Details</div>
<label>Full Name (Team Leader) <span className="required">*</span></label>
<input type="text" required={true} />
<label>Email Address <span className="required">*</span></label>
<input type="email" required={true} />
<label>Phone Number <span className="required">*</span></label>
<input type="tel" required={true} />
<label>College/Organization <span className="required">*</span></label>
<input type="text" required={true} />
<label>City <span className="required">*</span></label>
<input type="text" required={true} />
</div>

</div>

<div id="step-3" className="form-step">
<div className="form-section">
<div className="section-title">Startup Details</div>
<label>Startup Name <span className="required">*</span></label>
<input type="text" required={true} />
<label>Website (if any)</label>
<input type="url" placeholder="https://www.example.com" />
<label>Industry/Domain <span className="required">*</span></label>
<select required={true}>
<option value="" disabled={true}>Select One</option>
<option>E-Commerce</option>
<option>Enterprisetech</option>
<option>Fintech</option>
<option>Deeptech</option>
<option>Cleantech</option>
<option>Healthtech</option>
<option>Agritech</option>
<option>AI and ML</option>
<option>Climate and Sustainability</option>
<option>Spacetech</option>
<option>Logistics</option>
<option>Edtech</option>
<option>Media and Entertainment</option>
<option>Consumer Services</option>
<option>Web3 and Blockchain</option>
<option>Others</option>
</select>
<label>Does your startup aim to solve a social or community
                problem? <span className="required">*</span></label>
<select required={true}>
<option value="" disabled={true}>Select One</option>
<option>Yes</option>
<option>No</option>
</select>
<label>Is your team founded by IIT Kharagpur students, alumni, or
                faculty? <span className="required">*</span></label>
<select required={true}>
<option value="" disabled={true}>Select One</option>
<option>Yes</option>
<option>No</option>
</select>
<label>Is AI/ML a core part of your product or tech stack? <span className="required">*</span></label>
<select required={true}>
<option value="" disabled={true}>Select One</option>
<option>Yes</option>
<option>No</option>
</select>
<label>Where did you hear about Empresario? <span className="required">*</span></label>
<input type="text" required={true} />
</div>

</div>

<div id="step-4" className="form-step">
<div className="form-section">
<div className="section-title">Business Overview</div>
<label>What problem are you solving? <span className="required">*</span></label>
<textarea rows="3" required={true}></textarea>
<label>What is your proposed solution? <span className="required">*</span></label>
<textarea rows="3" required={true}></textarea>
<label>Target market and estimated size <span className="required">*</span></label>
<textarea rows="3" required={true}></textarea>
<label>Traction so far (if any) <span className="required">*</span></label>
<textarea rows="3" required={true}></textarea>
<label>Revenue model <span className="required">*</span></label>
<textarea rows="3" required={true}></textarea>
<label>Anything else you'd like to share? (Optional)</label>
<textarea rows="3"></textarea>
</div>
<button id="submitBtn" className="button" type="submit">Submit</button>
<div id="success-message" className="success-message" style={{display: "none", textAlign: "center", padding: "4rem 0"}}>
              🎉 Congratulations! You are successfully registered for Empresario Startup Registration 2026! 🎉
            </div>
</div>
</form>
</div>


<div className="social-sidebar">
<a href="https://www.instagram.com/iitkgp_ecell/" target="_blank" className="instagram" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
<a href="https://www.linkedin.com/company/ecellkgp/" target="_blank" className="linkedin" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
<a href="https://www.facebook.com/ecell.iitkgp/" target="_blank" className="facebook" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
<a href="https://x.com/ecelliitkgp" target="_blank" className="twitter" title="X (Twitter)"><i className="fa-brands fa-x-twitter"></i></a>
</div>
</div>
</div>

    </>
  );
}
