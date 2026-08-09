"use client";

import { useEffect, useState } from "react";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://yieubokzioakellfuepn.supabase.co";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_F2_qSJzl0v6XVGAyRdOLIg_ocQOkhPN";
const PROGRESS_KEY = "empresarioRegProgress";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    fullName: "",
    personalEmail: "",
    phone: "",
    organization: "",
    city: "",
    startupName: "",
    website: "",
    industry: "",
    socialImpact: "",
    iitkgpAffiliation: "",
    aiMlCore: "",
    tis: "",
    problem: "",
    solution: "",
    market: "",
    traction: "",
    revenue: "",
    extra: ""
  });

  // Flow State
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Errors State
  const [errors, setErrors] = useState({
    email: false,
    otp: false
  });

  useEffect(() => {
    setMounted(true);
    // Load progress from localStorage on mount
    try {
      const saved = localStorage.getItem(PROGRESS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.data) {
          setFormData(prev => ({ ...prev, ...parsed.data }));
          if (parsed.otpVerified) {
            setOtpVerified(true);
            setOtpSent(true);
          }
        }
      }
    } catch (e) {
      console.warn("Failed to load progress:", e);
    }
  }, []);

  // Autosave progress to localStorage
  const saveProgress = (updatedData, isVerified = otpVerified) => {
    try {
      localStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify({
          step: isVerified ? 2 : 1,
          otpVerified: isVerified,
          data: updatedData
        })
      );
    } catch (e) {
      console.warn("Failed to save progress:", e);
    }
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    saveProgress(updated);

    // Reset inline error indicators on change
    if (field === "email") {
      setErrors(prev => ({ ...prev, email: false }));
    } else if (field === "otp") {
      setErrors(prev => ({ ...prev, otp: false }));
    }
  };

  const validateEmail = (email) => {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  };

  // 1. Send OTP using native Supabase Auth REST endpoint
  const handleSendOtp = async () => {
    const email = formData.email.trim();
    if (!validateEmail(email)) {
      setErrors(prev => ({ ...prev, email: true }));
      return;
    }

    setOtpSending(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_KEY,
        },
        body: JSON.stringify({
          email: email,
          create_user: true, // Sign up the user if they don't exist
        }),
      });

      if (!res.ok) {
        const result = await res.json().catch(() => ({}));
        throw new Error(result.msg || result.message || `Supabase error: ${res.status}`);
      }

      setOtpSent(true);
      alert("A verification code has been sent to your email directly from Supabase. Please check your inbox.");
    } catch (e) {
      console.error("OTP Send Error:", e);
      alert("Error sending OTP: " + e.message + ". Please verify your Supabase email config and try again.");
    } finally {
      setOtpSending(false);
    }
  };

  // 2. Verify OTP using native Supabase Auth REST endpoint
  const handleVerifyOtp = async () => {
    const email = formData.email.trim();
    const otp = formData.otp.trim();

    if (!email || !/^[a-zA-Z0-9]{6,8}$/.test(otp)) {
      setErrors(prev => ({ ...prev, otp: true }));
      return;
    }

    setOtpVerifying(true);
    try {
      // First try signup verification
      let res = await fetch(`${SUPABASE_URL}/auth/v1/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_KEY,
        },
        body: JSON.stringify({
          email: email,
          token: otp,
          type: "signup",
        }),
      });

      // If signup fails, try magiclink verification (handles returning users)
      if (!res.ok) {
        res = await fetch(`${SUPABASE_URL}/auth/v1/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": SUPABASE_KEY,
          },
          body: JSON.stringify({
            email: email,
            token: otp,
            type: "magiclink",
          }),
        });
      }

      if (!res.ok) {
        const result = await res.json().catch(() => ({}));
        throw new Error(result.msg || result.message || "Invalid or expired OTP code.");
      }

      setOtpVerified(true);
      saveProgress(formData, true);
      alert("Email verified successfully! You can now complete the remaining registration fields.");
    } catch (e) {
      console.error("OTP Verification Error:", e);
      setErrors(prev => ({ ...prev, otp: true }));
      alert("Verification failed: " + e.message + ". Please verify the code and try again.");
    } finally {
      setOtpVerifying(false);
    }
  };

  // 3. Save payload to Supabase
  const saveToSupabase = async (payload) => {
    const data = {
      email: payload.email,
      full_name: payload.fullName || "",
      personal_email: payload.personalEmail || "",
      phone: payload.phone || "",
      organization: payload.organization || "",
      city: payload.city || "",
      startup_name: payload.startupName || "",
      website: payload.website || "",
      industry: payload.industry || "",
      social_impact: payload.socialImpact || "",
      iitkgp_affiliation: payload.iitkgpAffiliation || "",
      ai_ml_core: payload.aiMlCore || "",
      tis: payload.tis || "",
      problem: payload.problem || "",
      solution: payload.solution || "",
      market: payload.market || "",
      traction: payload.traction || "",
      revenue: payload.revenue || "",
      extra: payload.extra || "",
      submitted_at: new Date().toISOString()
    };

    const res = await fetch(`${SUPABASE_URL}/rest/v1/empresario_registrations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Prefer": "resolution=merge-duplicates"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      throw new Error(errBody.message || `Supabase database error: ${res.status}`);
    }
  };

  // 4. Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpVerified) {
      alert("Please verify your email via OTP before submitting the form.");
      return;
    }

    // Client-side required fields validation check
    const requiredFields = [
      "fullName", "personalEmail", "phone", "organization", "city",
      "startupName", "industry", "socialImpact", "iitkgpAffiliation", "aiMlCore",
      "tis", "problem", "solution", "market", "traction", "revenue"
    ];

    const missing = requiredFields.filter(field => !formData[field].trim());
    if (missing.length > 0) {
      alert("Please fill out all required fields marked with * before submitting.");
      return;
    }

    setSubmitting(true);

    try {
      // Save directly to Supabase DB table
      await saveToSupabase(formData);
      
      // Success
      setSuccess(true);
      try {
        localStorage.removeItem(PROGRESS_KEY);
      } catch (_) {}
    } catch (err) {
      console.error("Supabase submission error:", err);
      alert("Registration submission failed: " + err.message + ". Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleBlurWebsite = () => {
    const val = formData.website.trim();
    if (val && !/^https?:\/\//i.test(val)) {
      const updated = { ...formData, website: "https://" + val };
      setFormData(updated);
      saveProgress(updated);
    }
  };

  if (!mounted) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          padding: 0;
          margin: 0;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: #fff;
          color: #111;
          overflow-x: hidden;
          margin: 0;
        }

        .split-container {
          display: flex;
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        /* LEFT SIDE - DARK SPLASH */
        .split-left {
          width: 50%;
          padding: 4rem 5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #fff;
          position: fixed;
          height: 100vh;
          top: 0;
          left: 0;
          z-index: 1;
          overflow: hidden;
        }

        .split-left::before {
          content: "";
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: url('/images/event-images/team-group-image.jpg') center/cover;
          filter: blur(10px);
          z-index: -2;
        }

        .split-left::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(28, 82, 216, 0.4), rgba(10, 10, 15, 0.6));
          z-index: -1;
        }

        .back-btn {
          color: #999;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          transition: color 0.3s ease;
          position: absolute;
          top: 3rem;
          left: 3rem;
        }

        .back-btn:hover {
          color: #fff;
        }

        .left-tagline {
          color: #4da3ff;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.85rem;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .left-heading {
          font-family: 'Playfair Display', serif;
          font-size: 4.2rem;
          font-weight: 700;
          line-height: 1.1;
          margin: 2rem 0;
          letter-spacing: -1px;
        }

        .left-heading span {
          color: #1a73e8;
        }

        .left-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #d1d5db;
          margin-bottom: 2rem;
          max-width: 480px;
        }

        /* RIGHT SIDE - FORM */
        .split-right {
          width: 50%;
          margin-left: 50%;
          padding: 4rem 5rem;
          background-color: #fff;
          min-height: 100vh;
        }

        .container {
          max-width: 100%;
          box-shadow: none;
          border: none;
          background: #fff;
          padding: 0;
        }

        .right-tagline {
          color: #1a73e8;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.75rem;
          margin-bottom: 2.5rem;
          text-transform: uppercase;
          display: block;
        }

        .section-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #111;
          letter-spacing: -0.5px;
          margin-top: 0;
          border: none;
          text-shadow: none;
          padding-bottom: 0;
        }

        .stepper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 10px;
          position: relative;
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: 2.5rem;
          padding-bottom: 1rem;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          position: relative;
        }

        .step-circle {
          display: none !important;
        }

        .step:not(:last-child)::after {
          display: none !important;
        }

        .step-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #b0b0b8;
          margin-top: 0;
          padding: 10px 0;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.25s;
        }

        .step.active .step-title {
          color: #1a73e8;
        }

        .form-step label {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: #888;
          letter-spacing: 1.5px;
          margin-bottom: 1rem;
          text-transform: uppercase;
          margin-top: 2.5rem;
        }

        .required {
          color: #888;
          font-weight: 700;
          margin-left: 2px;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="url"],
        select,
        textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #e1e1e1;
          color: #111 !important;
          font-size: 1.1rem;
          padding: 5px 0 15px 0;
          outline: none !important;
          border-radius: 0;
          transition: border 0.3s;
          font-family: inherit;
          margin-bottom: 0.5rem;
          box-shadow: none;
          text-shadow: none;
        }

        input::placeholder,
        textarea::placeholder {
          color: #ccc !important;
          font-style: normal !important;
          text-shadow: none;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-bottom: 2px solid #1a73e8;
          box-shadow: none !important;
          background: transparent;
          border-color: #1a73e8 !important;
        }

        select {
          cursor: pointer;
          color: #111;
        }

        textarea {
          resize: vertical;
          margin-top: 5px;
          font-family: inherit;
        }

        .email-row {
          display: flex;
          gap: 15px;
          align-items: flex-end;
          margin-bottom: 16px;
        }

        .email-row input {
          flex: 1;
          margin-bottom: 0;
          background: transparent;
          padding-bottom: 15px;
        }

        .email-row .otp-btn {
          margin-top: 0 !important;
          width: 140px;
          padding: 0 !important;
          height: 46px;
          margin-bottom: 0;
          flex-shrink: 0;
        }

        /* Button Geometry (Flat and Square) */
        .next-btn,
        .submit-btn,
        .button,
        .otp-btn {
          background: #1a73e8 !important;
          color: #fff !important;
          border: none;
          text-transform: uppercase;
          font-size: 0.85rem !important;
          padding: 14px 28px !important;
          letter-spacing: 1px;
          flex-shrink: 0;
          margin-top: 2rem !important;
          cursor: pointer;
          display: inline-block;
          transition: background-color 0.3s;
          border-radius: 4px !important;
          box-shadow: none !important;
          outline: none;
          outline-offset: 0;
          transform: none;
          text-align: center;
        }

        .next-btn:hover,
        .submit-btn:hover,
        .otp-btn:hover,
        .button:hover {
          background: #1557b0 !important;
          transform: none;
          box-shadow: none;
          border-color: transparent;
        }

        .next-btn:disabled,
        .otp-btn:disabled,
        .button:disabled {
          background-color: #d0d0d0 !important;
          color: #fff !important;
          cursor: not-allowed !important;
          opacity: 1 !important;
          box-shadow: none;
          border-color: transparent;
          border: none;
          transform: none;
        }

        .hidden {
          display: none !important;
        }

        .error-message {
          font-size: 0.8rem;
          color: #d93025;
          margin-top: 8px;
          display: block;
        }

        .success-message {
          color: #0f9d58;
          font-size: 1.05rem;
          font-weight: 500;
          margin-top: 20px;
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
          display: block;
        }

        .particles,
        .reg-banner,
        .social-sidebar {
          display: none !important;
        }

        @media (max-width: 992px) {
          .split-container {
            flex-direction: column;
          }

          .split-left,
          .split-right {
            width: 100%;
            position: relative;
            height: auto;
            min-height: 50vh;
            margin: 0;
            padding: 3rem 2rem;
          }

          .left-heading {
            font-size: 2.8rem;
          }

          .email-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .email-row .otp-btn {
            margin-top: 1rem !important;
            width: 100%;
          }

          .next-btn {
            min-width: 100%;
          }
        }
      `}} />

      <div className="split-container">
        {/* Left Side Info Pane */}
        <div className="split-left">
          <a href="/" className="back-btn">← BACK TO HOME</a>
          <div className="left-tagline">/ EMPRESARIO STARTUP REGISTRATION</div>
          <h1 className="left-heading">
            Register your<br />
            <span style={{ color: "#1a73e8" }}>perfect</span> startup<br />
            today.
          </h1>
          <p className="left-desc">
            We craft the ultimate platform for founders to connect with investors, validate ideas, and raise real capital — built to launch your journey.
          </p>
        </div>

        {/* Right Side Registration Form Pane */}
        <div className="split-right position-relative">
          <div className="right-tagline" style={{ marginBottom: "1.5rem" }}>/ SEND INQUIRY</div>
          <p style={{ fontSize: "1.25rem", fontWeight: "500", color: "#7f8c8d", lineHeight: "1.6", marginBottom: "2rem", maxWidth: "90%" }}>
            We're here to bring your concept to life, craft your investor story, or build your pitch deck from the ground up.
          </p>
          <a
            href="#"
            style={{
              position: "absolute",
              right: "0",
              top: "8rem",
              background: "#25a4ff",
              color: "white",
              fontSize: "1.5rem",
              padding: "12px 12px 12px 20px",
              borderRadius: "8px 0 0 8px",
              boxShadow: "-2px 2px 10px rgba(0,0,0,0.1)",
              textDecoration: "none"
            }}
          >
            🚀
          </a>

          <div className="container">
            {success ? (
              <div className="success-message" style={{ textAlign: "center", padding: "4rem 0" }}>
                🎉 Congratulations! You are successfully registered for Empresario Startup Registration 2026! 🎉
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={true}>
                {/* STEP 1: Email and Verification */}
                <div id="step-1" className="form-step">
                  <label>Email ID <span className="required">*</span></label>
                  <div className="email-row">
                    <input
                      type="email"
                      required={true}
                      placeholder="Enter your email address"
                      value={formData.email}
                      disabled={otpVerified}
                      onChange={(e) => handleInputChange(e, "email")}
                    />
                    <button
                      type="button"
                      className="otp-btn"
                      disabled={otpVerified || otpSending || !formData.email}
                      onClick={handleSendOtp}
                    >
                      {otpSending ? "Sending..." : otpSent ? "Resend OTP" : "Send OTP"}
                    </button>
                  </div>
                  {errors.email && (
                    <div className="error-message">
                      Please enter a valid email address.
                    </div>
                  )}

                  {otpSent && (
                    <div id="otp-section" style={{ marginTop: "20px" }}>
                      <label>Enter Verification Code <span className="required">*</span></label>
                      <input
                        type="text"
                        maxLength="8"
                        placeholder="Enter OTP code"
                        required={true}
                        value={formData.otp}
                        disabled={otpVerified}
                        onChange={(e) => handleInputChange(e, "otp")}
                      />
                      {errors.otp && (
                        <div className="error-message">
                          Please enter the valid verification code sent to your email.
                        </div>
                      )}
                    </div>
                  )}

                  {!otpVerified ? (
                    <button
                      type="button"
                      className="next-btn"
                      disabled={!otpSent || otpVerified || otpVerifying || formData.otp.length < 6 || formData.otp.length > 8}
                      onClick={handleVerifyOtp}
                    >
                      {otpVerifying ? "Verifying..." : "Verify OTP"}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="next-btn"
                      disabled={true}
                      style={{ backgroundColor: "#34a853", color: "#fff" }}
                    >
                      Verified ✓
                    </button>
                  )}
                </div>

                {/* Remaining sections are visible but require verification to submit */}
                <div style={{ opacity: otpVerified ? 1 : 0.45, pointerEvents: otpVerified ? "auto" : "none", transition: "opacity 0.4s ease" }}>
                  {/* STEP 2: Founder and Team Details */}
                  <div id="step-2" className="form-step" style={{ marginTop: "3rem" }}>
                    <div className="form-section">
                      <div className="section-title">Founder & Team Details</div>

                      <label>Full Name (Team Leader) <span className="required">*</span></label>
                      <input
                        type="text"
                        required={true}
                        placeholder="Enter full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange(e, "fullName")}
                      />

                      <label>Email Address <span className="required">*</span></label>
                      <input
                        type="email"
                        required={true}
                        placeholder="Enter personal email address"
                        value={formData.personalEmail}
                        onChange={(e) => handleInputChange(e, "personalEmail")}
                      />

                      <label>Phone Number <span className="required">*</span></label>
                      <input
                        type="tel"
                        required={true}
                        placeholder="Enter active phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange(e, "phone")}
                      />

                      <label>College/Organization <span className="required">*</span></label>
                      <input
                        type="text"
                        required={true}
                        placeholder="Enter college or company name"
                        value={formData.organization}
                        onChange={(e) => handleInputChange(e, "organization")}
                      />

                      <label>City <span className="required">*</span></label>
                      <input
                        type="text"
                        required={true}
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={(e) => handleInputChange(e, "city")}
                      />
                    </div>
                  </div>

                  {/* STEP 3: Startup Details */}
                  <div id="step-3" className="form-step">
                    <div className="form-section">
                      <div className="section-title">Startup Details</div>

                      <label>Startup Name <span className="required">*</span></label>
                      <input
                        type="text"
                        required={true}
                        placeholder="Enter startup name"
                        value={formData.startupName}
                        onChange={(e) => handleInputChange(e, "startupName")}
                      />

                      <label>Website (if any)</label>
                      <input
                        type="url"
                        placeholder="e.g. https://www.yourstartup.com"
                        value={formData.website}
                        onChange={(e) => handleInputChange(e, "website")}
                        onBlur={handleBlurWebsite}
                      />

                      <label>Industry/Domain <span className="required">*</span></label>
                      <select
                        required={true}
                        value={formData.industry}
                        onChange={(e) => handleInputChange(e, "industry")}
                      >
                        <option value="" disabled={true}>Select One</option>
                        <option value="E-Commerce">E-Commerce</option>
                        <option value="Enterprisetech">Enterprisetech</option>
                        <option value="Fintech">Fintech</option>
                        <option value="Deeptech">Deeptech</option>
                        <option value="Cleantech">Cleantech</option>
                        <option value="Healthtech">Healthtech</option>
                        <option value="Agritech">Agritech</option>
                        <option value="AI and ML">AI and ML</option>
                        <option value="Climate and Sustainability">Climate and Sustainability</option>
                        <option value="Spacetech">Spacetech</option>
                        <option value="Logistics">Logistics</option>
                        <option value="Edtech">Edtech</option>
                        <option value="Media and Entertainment">Media and Entertainment</option>
                        <option value="Consumer Services">Consumer Services</option>
                        <option value="Web3 and Blockchain">Web3 and Blockchain</option>
                        <option value="Others">Others</option>
                      </select>

                      <label>Does your startup aim to solve a social or community problem? <span className="required">*</span></label>
                      <select
                        required={true}
                        value={formData.socialImpact}
                        onChange={(e) => handleInputChange(e, "socialImpact")}
                      >
                        <option value="" disabled={true}>Select One</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>

                      <label>Is your team founded by IIT Kharagpur students, alumni, or faculty? <span className="required">*</span></label>
                      <select
                        required={true}
                        value={formData.iitkgpAffiliation}
                        onChange={(e) => handleInputChange(e, "iitkgpAffiliation")}
                      >
                        <option value="" disabled={true}>Select One</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>

                      <label>Is AI/ML a core part of your product or tech stack? <span className="required">*</span></label>
                      <select
                        required={true}
                        value={formData.aiMlCore}
                        onChange={(e) => handleInputChange(e, "aiMlCore")}
                      >
                        <option value="" disabled={true}>Select One</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>

                      <label>Where did you hear about Empresario? <span className="required">*</span></label>
                      <input
                        type="text"
                        required={true}
                        placeholder="Social media, friends, college, email etc."
                        value={formData.tis}
                        onChange={(e) => handleInputChange(e, "tis")}
                      />
                    </div>
                  </div>

                  {/* STEP 4: Business Overview */}
                  <div id="step-4" className="form-step">
                    <div className="form-section">
                      <div className="section-title">Business Overview</div>

                      <label>What problem are you solving? <span className="required">*</span></label>
                      <textarea
                        rows="3"
                        required={true}
                        placeholder="Briefly state the target audience's pain point"
                        value={formData.problem}
                        onChange={(e) => handleInputChange(e, "problem")}
                      />

                      <label>What is your proposed solution? <span className="required">*</span></label>
                      <textarea
                        rows="3"
                        required={true}
                        placeholder="Describe how your product/service solves this pain point"
                        value={formData.solution}
                        onChange={(e) => handleInputChange(e, "solution")}
                      />

                      <label>Target market and estimated size <span className="required">*</span></label>
                      <textarea
                        rows="3"
                        required={true}
                        placeholder="Explain your target demographics and addressable market size (TAM)"
                        value={formData.market}
                        onChange={(e) => handleInputChange(e, "market")}
                      />

                      <label>Traction so far (if any) <span className="required">*</span></label>
                      <textarea
                        rows="3"
                        required={true}
                        placeholder="E.g. users count, active pilot testing, partnerships, waitlist size etc."
                        value={formData.traction}
                        onChange={(e) => handleInputChange(e, "traction")}
                      />

                      <label>Revenue model <span className="required">*</span></label>
                      <textarea
                        rows="3"
                        required={true}
                        placeholder="How does your startup plan to generate revenue?"
                        value={formData.revenue}
                        onChange={(e) => handleInputChange(e, "revenue")}
                      />

                      <label>Anything else you'd like to share? (Optional)</label>
                      <textarea
                        rows="3"
                        placeholder="Additional details, pitch deck links, accomplishments etc."
                        value={formData.extra}
                        onChange={(e) => handleInputChange(e, "extra")}
                      />
                    </div>

                    <button
                      id="submitBtn"
                      className="button"
                      type="submit"
                      disabled={!otpVerified || submitting}
                      style={{ width: "100%", height: "50px", marginTop: "3rem" }}
                    >
                      {submitting ? "Submitting..." : "Submit Registration"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
