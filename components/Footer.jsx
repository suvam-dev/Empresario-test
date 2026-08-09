import React from "react";

export default function Footer() {
  return (
    <>
      <div className="scroll-progress d-none d-xxl-block">
        <a href="#" className="scroll-top" aria-label="scroll">
          <span className="scroll-text">Scroll</span>
          <span className="scroll-line">
            <span className="scroll-point"></span>
          </span>
        </a>
      </div>

      <div className="social-sidebar">
        <a href="https://www.instagram.com/iitkgp_ecell/" target="_blank" className="instagram" title="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/ecellkgp/" target="_blank" className="linkedin" title="LinkedIn">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://www.facebook.com/ecell.iitkgp/" target="_blank" className="facebook" title="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://x.com/ecelliitkgp" target="_blank" className="twitter" title="X (Twitter)">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>

      <footer style={{ backgroundColor: "#eef2f6", padding: "60px 0 30px 0", fontFamily: "sans-serif" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 text-center text-md-start">
              <a href="/" className="footer-logo d-inline-block">
                <img
                  src="/images/logos/empresario-transparent-logo.png"
                  alt="Empresario Logo"
                  style={{
                    width: "200px",
                    height: "auto",
                    maxHeight: "none",
                    marginTop: "5px",
                    imageRendering: "high-quality",
                    transform: "translateZ(0)",
                  }}
                />
              </a>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <h6 style={{ fontWeight: "700", color: "#1a202c", marginBottom: "20px" }}>Company</h6>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li style={{ marginBottom: "12px" }}>
                  <a href="/" style={{ color: "#718096", textDecoration: "none" }}>Home</a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a href="/info" style={{ color: "#718096", textDecoration: "none" }}>About</a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a href="/services" style={{ color: "#718096", textDecoration: "none" }}>Services</a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a href="/winners" style={{ color: "#718096", textDecoration: "none" }}>Winners</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <h6 style={{ fontWeight: "700", color: "#1a202c", marginBottom: "20px" }}>Explore</h6>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li style={{ marginBottom: "12px" }}>
                  <a href="/associations" style={{ color: "#718096", textDecoration: "none" }}>Associations</a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a href="/media" style={{ color: "#718096", textDecoration: "none" }}>Sponsors & Media</a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a href="/mentors" style={{ color: "#718096", textDecoration: "none" }}>Mentors</a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a href="/contact-us" style={{ color: "#718096", textDecoration: "none" }}>Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-md-6 mb-4">
              <h6 style={{ fontWeight: "700", color: "#1a202c", marginBottom: "20px" }}>Subscribe newsletter</h6>
              <p style={{ color: "#718096", marginBottom: "20px", fontSize: "14px" }}>
                Subscribe our newsletter to get the latest news and updates!
              </p>
              <div style={{ position: "relative", maxWidth: "400px", marginBottom: "25px" }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  style={{
                    width: "100%",
                    padding: "10px 0",
                    border: "none",
                    borderBottom: "1px solid #1a202c",
                    backgroundColor: "transparent",
                    outline: "none",
                    color: "#1a202c",
                  }}
                />
                <i
                  className="feather icon-feather-mail"
                  style={{ position: "absolute", right: "0", top: "12px", color: "#1a202c" }}
                ></i>
              </div>
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <a
                  href="mailto:ramteke.jateen@ecell-iitkgp.in"
                  style={{
                    display: "inline-block",
                    background: "#ffffff",
                    color: "#1a202c",
                    fontWeight: "500",
                    fontSize: "16px",
                    padding: "12px 30px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    border: "1px solid #1a202c",
                    outline: "none",
                    transition: "transform 0.3s ease, background 0.3s ease, color 0.3s ease",
                  }}
                >
                  Send Email
                </a>
                <a
                  href="/registration"
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(90deg, #1c52d8 0%, #da3345 100%)",
                    color: "#ffffff",
                    fontWeight: "500",
                    fontSize: "16px",
                    padding: "12px 30px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    border: "none",
                    outline: "none",
                    transition: "transform 0.3s ease",
                  }}
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "60px", borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "30px" }}
          >
            <div className="col-md-6 text-center text-md-start">
              <p style={{ color: "#718096", margin: "0", fontSize: "14px" }}>
                © 2026{" "}
                <a href="#" style={{ color: "#1a202c", textDecoration: "underline", fontWeight: "600" }}>
                  Entrepreneurship Cell IIT KGP
                </a>
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "20px",
                }}
              >
                <li>
                  <a href="https://www.facebook.com/ecell.iitkgp/" target="_blank" style={{ color: "#1a202c", fontSize: "18px" }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/ecellkgp/" target="_blank" style={{ color: "#1a202c", fontSize: "18px" }}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/ecelliitkgp" target="_blank" style={{ color: "#1a202c", fontSize: "18px" }}>
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/iitkgp_ecell/" target="_blank" style={{ color: "#1a202c", fontSize: "18px" }}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
