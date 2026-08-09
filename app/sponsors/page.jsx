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



<header>

<nav className="navbar navbar-expand-xl header-transparent bg-transparent header-reverse glass-effect" data-header-hover="light">
<div className="container-fluid">
<div className="col-auto col-xxl-3 col-lg-2 me-lg-0 me-auto">
<a className="navbar-brand" href="/index">
<img src="images/logos/Ecell-logo.png" data-at2x="images/logos/Ecell-logo.png" alt="" className="default-logo" style={{transform: "scale(1.5)"}} />
<img src="images/logos/empresario-transparent-logo.png" data-at2x="images/logos/empresario-transparent-logo.png" alt="" className="alt-logo" style={{transform: "scale(1.5)", marginLeft: "20px"}} />
<img src="images/logos/empresario-transparent-logo.png" data-at2x="images/logos/empresario-transparent-logo.png" alt="" className="mobile-logo" style={{transform: "scale(1.5)", marginLeft: "20px"}} />
</a>
</div>
<div className="col-auto col-xxl-9 col-lg-10 menu-order position-static">
<button className="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
<span className="navbar-toggler-line"></span>
<span className="navbar-toggler-line"></span>
<span className="navbar-toggler-line"></span>
<span className="navbar-toggler-line"></span>
</button>
<div className="mx-sm-0 collapse navbar-collapse justify-content-center" id="navbarNav">
<ul className="navbar-nav justify-content-evenly w-100">
<li className="nav-item">
<a href="/index" className="nav-link">Home</a>
</li>
<li className="nav-item dropdown dropdown-with-icon-style02">
<a href="/info" className="nav-link">About <i className="dropdown-toggle" style={{marginLeft: "10px"}}></i>
</a>
<i className="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{backgroundColor: "white", color: "#1E2033"}}>
<li>
<a href="/info" style={{color: "#1E2033", fontWeight: "600"}}>Info</a>
</li>
<li>
<a href="/tracks" style={{color: "#1E2033", fontWeight: "600"}}>Tracks</a>
</li>
<li>
<a href="/incentives" style={{color: "#1E2033", fontWeight: "600"}}>Incentives</a>
</li>
<li>
<a href="/resources" style={{color: "#1E2033", fontWeight: "600"}}>Resources</a>
</li>
</ul>
</li>
<li className="nav-item">
<a href="/winners" className="nav-link">Winners</a>
</li>
<li className="nav-item">
<a href="/services" className="nav-link">Services</a>
</li>
<li className="nav-item">
<a href="/associations" className="nav-link">Associations</a>
</li>
<li className="nav-item">
<a href="/media" className="nav-link" style={{whiteSpace: "nowrap"}}>Sponsors & Media</a>
</li>
<li className="nav-item">
<a href="/mentors" className="nav-link">Mentors</a>
</li>
<li className="nav-item">
<a href="/contact-us" className="nav-link">Contact</a>
</li>
</ul>
</div>
</div>
</div>
</nav>

</header>


<section className="pt-0 cover-background ipad-top-space-margin sm-pb-0" style={{backgroundImage: "url('images/event-images/images\ \(4\).jpeg')"}}>
<div className="shape-image-animation bottom-0 p-0 w-100 d-none d-md-block">
<svg xmlns="http://www.w3.org/2000/svg" widht="3000" height="400" viewBox="0 180 2500 200" fill="#F0F2F8">
<path className="st1" d="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250">
<animate attributeName="d" dur="5s" values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250" repeatCount="indefinite"></animate>
</path>
</svg>
</div>
<div className="container">
<div className="row align-items-center justify-content-center h-500px sm-h-300px">
<div className="col-12 col-md-6 position-relative text-center page-title-extra-large d-flex flex-wrap flex-column align-items-center justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<h1 className="mb-20px text-white fw-600 ls-minus-1px">Sponsors and Media</h1>
</div>
</div>
</div>
</section>


<section className="pt-5 sm-pt-50px" style={{backgroundColor: "#F0F2F8"}}>
<div className="container">

<h3 style={{textAlign: "center", fontFamily: "'Arial', sans-serif", fontSize: "40px", fontWeight: "bold", color: "#333", marginBottom: "30px"}}>
        2025
      </h3>
<div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center mb-5" data-anime="{ &quot;el&quot;: &quot;childs&quot;,  &quot;translateY&quot;: [0, 0], &quot;perspective&quot;: [1200, 1200], &quot;scale&quot;: [1.05, 1], &quot;rotateX&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;:600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-17 sm-p-14 border-radius-6px d-flex flex-column align-items-center justify-content-center" style={{cursor: "pointer"}}>
<div className="feature-box-icon">
<img src="images/sundaram finance.png" className="h-100px" alt="Sundaram Finance" style={{objectFit: "contain"}} loading="lazy" />
</div>
<div className="mt-20px">
<span className="d-block fw-700 text-dark-gray fs-16">Title Sponsor</span>
<span className="d-block text-medium-gray fs-14">Sundaram Finance</span>
</div>
</div>
</div>

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-17 sm-p-14 border-radius-6px d-flex flex-column align-items-center justify-content-center" style={{cursor: "pointer"}}>
<div className="feature-box-icon">
<img src="images/Unicorn India Ventures.png" className="h-100px" alt="Unicorn India Ventures" style={{objectFit: "contain"}} loading="lazy" />
</div>
<div className="mt-20px">
<span className="d-block fw-700 text-dark-gray fs-16">In Association With</span>
<span className="d-block text-medium-gray fs-14">Unicorn India Ventures</span>
</div>
</div>
</div>

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-17 sm-p-14 border-radius-6px d-flex flex-column align-items-center justify-content-center" style={{cursor: "pointer"}}>
<div className="feature-box-icon">
<img src="images/MONAD.png" className="h-100px" alt="MONAD" style={{objectFit: "contain"}} loading="lazy" />
</div>
<div className="mt-20px">
<span className="d-block fw-700 text-dark-gray fs-16">In Association With</span>
<span className="d-block text-medium-gray fs-14">MONAD</span>
</div>
</div>
</div>

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-17 sm-p-14 border-radius-6px d-flex flex-column align-items-center justify-content-center" style={{cursor: "pointer"}}>
<div className="feature-box-icon">
<img src="images/unstop.png" className="h-100px" alt="Unstop" style={{objectFit: "contain"}} loading="lazy" />
</div>
<div className="mt-20px">
<span className="d-block fw-700 text-dark-gray fs-16">Powered By</span>
<span className="d-block text-medium-gray fs-14">Unstop</span>
</div>
</div>
</div>
</div>

<h3 style={{textAlign: "center", fontFamily: "'Arial', sans-serif", fontSize: "40px", fontWeight: "bold", color: "#333", marginBottom: "30px"}}>
        2024
      </h3>
<div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center mb-5" data-anime="{ &quot;el&quot;: &quot;childs&quot;,  &quot;translateY&quot;: [0, 0], &quot;perspective&quot;: [1200, 1200], &quot;scale&quot;: [1.05, 1], &quot;rotateX&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;:600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-17 sm-p-14 border-radius-6px d-flex flex-column align-items-center justify-content-center" style={{cursor: "pointer"}}>
<div className="feature-box-icon">
<img src="images/IDFC FIRST Bank.png" className="h-100px" alt="IDFC FIRST Bank" style={{objectFit: "contain"}} loading="lazy" />
</div>
<div className="mt-20px">
<span className="d-block fw-700 text-dark-gray fs-16">Title Sponsor</span>
<span className="d-block text-medium-gray fs-14">IDFC FIRST Bank</span>
</div>
</div>
</div>

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-17 sm-p-14 border-radius-6px d-flex flex-column align-items-center justify-content-center" style={{cursor: "pointer"}}>
<div className="feature-box-icon">
<img src="images/Odoo.png" className="h-100px" alt="Odoo" style={{objectFit: "contain"}} loading="lazy" />
</div>
<div className="mt-20px">
<span className="d-block fw-700 text-dark-gray fs-16">Services Partner</span>
<span className="d-block text-medium-gray fs-14">Odoo</span>
</div>
</div>
</div>

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-17 sm-p-14 border-radius-6px d-flex flex-column align-items-center justify-content-center" style={{cursor: "pointer"}}>
<div className="feature-box-icon">
<img src="images/jci.png" className="h-100px" alt="JCI" style={{objectFit: "contain"}} loading="lazy" />
</div>
<div className="mt-20px">
<span className="d-block fw-700 text-dark-gray fs-16">Social Sponsor</span>
<span className="d-block text-medium-gray fs-14">JCI</span>
</div>
</div>
</div>

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-17 sm-p-14 border-radius-6px d-flex flex-column align-items-center justify-content-center" style={{cursor: "pointer"}}>
<div className="feature-box-icon">
<img src="images/AIPPS.png" className="h-100px" alt="AI4ICPS" style={{objectFit: "contain"}} loading="lazy" />
</div>
<div className="mt-20px">
<span className="d-block fw-700 text-dark-gray fs-16">AI Sponsor</span>
<span className="d-block text-medium-gray fs-14">AI4ICPS</span>
</div>
</div>
</div>
</div>

<h3 style={{textAlign: "center", fontFamily: "'Arial', sans-serif", fontSize: "40px", fontWeight: "bold", color: "#333", marginBottom: "30px"}}>
        2023
      </h3>
<div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center mb-5" data-anime="{ &quot;el&quot;: &quot;childs&quot;,  &quot;translateY&quot;: [0, 0], &quot;perspective&quot;: [1200, 1200], &quot;scale&quot;: [1.05, 1], &quot;rotateX&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;:600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-17 sm-p-14 border-radius-6px d-flex flex-column align-items-center justify-content-center" style={{cursor: "pointer"}}>
<div className="feature-box-icon">
<img src="images/YES BANK.png" className="h-100px" alt="YES BANK" style={{objectFit: "contain"}} loading="lazy" />
</div>
<div className="mt-20px">
<span className="d-block fw-700 text-dark-gray fs-16">Title Sponsor / Presenting Partner</span>
<span className="d-block text-medium-gray fs-14">YES BANK</span>
</div>
</div>
</div>

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-17 sm-p-14 border-radius-6px d-flex flex-column align-items-center justify-content-center" style={{cursor: "pointer"}}>
<div className="feature-box-icon">
<img src="images/bharatx.png" className="h-100px" alt="BharatX" style={{objectFit: "contain"}} loading="lazy" />
</div>
<div className="mt-20px">
<span className="d-block fw-700 text-dark-gray fs-16">Track Sponsor (IIT KGP Track)</span>
<span className="d-block text-medium-gray fs-14">BharatX</span>
</div>
</div>
</div>

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-17 sm-p-14 border-radius-6px d-flex flex-column align-items-center justify-content-center" style={{cursor: "pointer"}}>
<div className="feature-box-icon" style={{backgroundColor: "#1e2033", padding: "10px", borderRadius: "8px"}}>
<img src="images/TDeFi.jpeg" className="h-100px" alt="TDeFi" style={{objectFit: "contain"}} loading="lazy" />
</div>
<div className="mt-20px">
<span className="d-block fw-700 text-dark-gray fs-16">Track Sponsor (Web 3.0 Track)</span>
<span className="d-block text-medium-gray fs-14">TDeFi</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer style={{backgroundColor: "#eef2f6", padding: "60px 0 30px 0", fontFamily: "sans-serif"}}>
<div className="container">
<div className="row">

<div className="col-lg-3 col-md-6 mb-4 text-center text-md-start">
<a href="/index" className="footer-logo d-inline-block">
<img src="images/logos/empresario-transparent-logo.png" alt="Empresario Logo" style={{width: "200px", height: "auto", maxHeight: "none", marginTop: "5px", imageRendering: "high-quality", transform: "translateZ(0)"}} />
</a>
</div>

<div className="col-lg-2 col-md-6 mb-4">
<h6 style={{fontWeight: "700", color: "#1a202c", marginBottom: "20px"}}>Company</h6>
<ul style={{listStyle: "none", padding: "0", margin: "0"}}>
<li style={{marginBottom: "12px"}}><a href="/index" style={{color: "#718096", textDecoration: "none"}}>Home</a></li>
<li style={{marginBottom: "12px"}}><a href="#" style={{color: "#718096", textDecoration: "none"}}>About</a></li>
<li style={{marginBottom: "12px"}}><a href="/services" style={{color: "#718096", textDecoration: "none"}}>Services</a></li>
<li style={{marginBottom: "12px"}}><a href="/winners" style={{color: "#718096", textDecoration: "none"}}>Winners</a></li>
</ul>
</div>

<div className="col-lg-2 col-md-6 mb-4">
<h6 style={{fontWeight: "700", color: "#1a202c", marginBottom: "20px"}}>Explore</h6>
<ul style={{listStyle: "none", padding: "0", margin: "0"}}>
<li style={{marginBottom: "12px"}}><a href="/associations" style={{color: "#718096", textDecoration: "none"}}>Associations</a></li>
<li style={{marginBottom: "12px"}}><a href="/sponsors" style={{color: "#718096", textDecoration: "none"}}>Sponsors & Media</a></li>
<li style={{marginBottom: "12px"}}><a href="/mentors" style={{color: "#718096", textDecoration: "none"}}>Mentors</a></li>
<li style={{marginBottom: "12px"}}><a href="/contact-us" style={{color: "#718096", textDecoration: "none"}}>Contact Us</a></li>
</ul>
</div>

<div className="col-lg-5 col-md-6 mb-4">
<h6 style={{fontWeight: "700", color: "#1a202c", marginBottom: "20px"}}>Subscribe newsletter</h6>
<p style={{color: "#718096", marginBottom: "20px", fontSize: "14px"}}>
            Subscribe our newsletter to get the latest news and updates!
          </p>
<div style={{position: "relative", maxWidth: "400px", marginBottom: "25px"}}>
<input type="email" placeholder="Enter your email address" style={{width: "100%", padding: "10px 0", border: "none", borderBottom: "1px solid #1a202c", backgroundColor: "transparent", outline: "none", color: "#1a202c"}} />
<i className="feather icon-feather-mail" style={{position: "absolute", right: "0", top: "12px", color: "#1a202c"}}></i>
</div>
<div style={{display: "flex", gap: "15px", flexWrap: "wrap"}}>
<a href="mailto:ramteke.jateen@ecell-iitkgp.in" style={{display: "inline-block", background: "#ffffff", color: "#1a202c", fontWeight: "500", fontSize: "16px", padding: "12px 30px", borderRadius: "50px", textDecoration: "none", border: "1px solid #1a202c", outline: "none", transition: "transform 0.3s ease, background 0.3s ease, color 0.3s ease"}}>
              Send Email
            </a>
<a href="/registration" style={{display: "inline-block", background: "linear-gradient(90deg, #1c52d8 0%, #da3345 100%)", color: "#ffffff", fontWeight: "500", fontSize: "16px", padding: "12px 30px", borderRadius: "50px", textDecoration: "none", border: "none", outline: "none", transition: "transform 0.3s ease"}}>
              Register Now
            </a>
</div>
</div>
</div>

<div className="row align-items-center" style={{marginTop: "60px", borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "30px"}}>
<div className="col-md-6 text-center text-md-start">
<p style={{color: "#718096", margin: "0", fontSize: "14px"}}>© 2026 <a href="#" style={{color: "#1a202c", textDecoration: "underline", fontWeight: "600"}}>Entrepreneurship Cell IIT KGP</a>
</p>
</div>
<div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
<ul style={{listStyle: "none", padding: "0", margin: "0", display: "flex", justifyContent: "flex-end", gap: "20px"}}>
<li><a href="#" style={{color: "#1a202c", fontSize: "18px"}}><i className="fa-brands fa-facebook-f"></i></a></li>
<li><a href="#" style={{color: "#1a202c", fontSize: "18px"}}><i className="fa-brands fa-linkedin-in"></i></a></li>
<li><a href="#" style={{color: "#1a202c", fontSize: "18px"}}><i className="fa-brands fa-x-twitter"></i></a></li>
<li><a href="#" style={{color: "#1a202c", fontSize: "18px"}}><i className="fa-brands fa-instagram"></i></a></li>
</ul>
</div>
</div>
</div>
</footer>


<div className="scroll-progress d-none d-xxl-block">
<a href="#" className="scroll-top" aria-label="scroll">
<span className="scroll-text">Scroll</span><span className="scroll-line"><span className="scroll-point"></span></span>
</a>
</div>







<div className="social-sidebar">
<a href="https://www.instagram.com/iitkgp_ecell/" target="_blank" className="instagram" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
<a href="https://www.linkedin.com/company/ecellkgp/" target="_blank" className="linkedin" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
<a href="https://www.facebook.com/ecell.iitkgp/" target="_blank" className="facebook" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
<a href="https://x.com/ecelliitkgp" target="_blank" className="twitter" title="X (Twitter)"><i className="fa-brands fa-x-twitter"></i></a>
</div>

    </>
  );
}
