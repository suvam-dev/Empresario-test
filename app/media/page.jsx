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

<nav className="navbar navbar-expand-lg header-transparent bg-transparent header-reverse glass-effect" data-header-hover="light">
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
<a href="/info" className="nav-link">About
                  <i className="dropdown-toggle" style={{marginLeft: "10px"}}></i>
</a>
<i className="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{backgroundColor: "white", color: "#1e2033"}}>
<li>
<a href="/info" style={{color: "#1e2033", fontWeight: "600"}}>Info</a>
</li>
<li>
<a href="/tracks" style={{color: "#1e2033", fontWeight: "600"}}>Tracks</a>
</li>
<li>
<a href="/incentives" style={{color: "#1e2033", fontWeight: "600"}}>Incentives</a>
</li>
<li>
<a href="/resources" style={{color: "#1e2033", fontWeight: "600"}}>Resources</a>
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


<section className="pt-0 cover-background ipad-top-space-margin sm-pb-0" style={{backgroundImage: "url('images/event-images/images\ \(4\).jpeg')", backgroundColor: "#f8f9fa"}}>
<div className="shape-image-animation p-0 w-100 d-none d-md-block">
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
<div className="col-12 col-lg-6 col-md-10 position-relative text-center page-title-extra-large d-flex flex-wrap flex-column align-items-center justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<span className="ps-25px pe-25px pt-5px pb-5px mb-15px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-flex"><i className="bi bi-megaphone text-white icon-small me-10px"></i>Engage with us through our media partners</span>
<h1 className="mb-20px text-white fw-600 ls-minus-1px">Sponsors & Media</h1>
</div>
</div>
</div>
</section>


<section className="background-position-center-top sm-background-image-none" style={{display: "none", backgroundImage: "url('images/vertical-line-bg-medium-gray.svg')", backgroundColor: "#f0f2f8", marginTop: "-100px"}}>
<div style={{height: "500px"}}>
<div id="particles-style-01" className="position-absolute h-100 top-0 left-0 w-100" data-particle="true" data-particle-options="{&quot;particles&quot;:{&quot;number&quot;:{&quot;value&quot;:10,&quot;density&quot;:{&quot;enable&quot;:true,&quot;value_area&quot;:800}},&quot;color&quot;:{&quot;value&quot;:&quot;#b0b4e2&quot;},&quot;shape&quot;:{&quot;type&quot;:&quot;circle&quot;,&quot;stroke&quot;:{&quot;width&quot;:0,&quot;color&quot;:&quot;#000000&quot;},&quot;polygon&quot;:{&quot;nb_sides&quot;:5},&quot;image&quot;:{&quot;src&quot;:&quot;img/github.svg&quot;,&quot;width&quot;:100,&quot;height&quot;:100}},&quot;opacity&quot;:{&quot;value&quot;:1,&quot;random&quot;:false,&quot;anim&quot;:{&quot;enable&quot;:false,&quot;speed&quot;:1,&quot;opacity_min&quot;:0.1,&quot;sync&quot;:false}},&quot;size&quot;:{&quot;value&quot;:4,&quot;random&quot;:true,&quot;anim&quot;:{&quot;enable&quot;:false,&quot;speed&quot;:40,&quot;size_min&quot;:0.1,&quot;sync&quot;:false}},&quot;line_linked&quot;:{&quot;enable&quot;:false,&quot;distance&quot;:150,&quot;color&quot;:&quot;#ffffff&quot;,&quot;opacity&quot;:0.4,&quot;width&quot;:1},&quot;move&quot;:{&quot;enable&quot;:true,&quot;speed&quot;:6,&quot;direction&quot;:&quot;none&quot;,&quot;random&quot;:false,&quot;straight&quot;:false,&quot;out_mode&quot;:&quot;out&quot;,&quot;bounce&quot;:false,&quot;attract&quot;:{&quot;enable&quot;:false,&quot;rotateX&quot;:600,&quot;rotateY&quot;:1200}}},&quot;interactivity&quot;:{&quot;detect_on&quot;:&quot;canvas&quot;,&quot;events&quot;:{&quot;onhover&quot;:{&quot;enable&quot;:true,&quot;mode&quot;:&quot;repulse&quot;},&quot;onclick&quot;:{&quot;enable&quot;:true,&quot;mode&quot;:&quot;push&quot;},&quot;resize&quot;:true},&quot;modes&quot;:{&quot;grab&quot;:{&quot;distance&quot;:400,&quot;line_linked&quot;:{&quot;opacity&quot;:1}},&quot;bubble&quot;:{&quot;distance&quot;:400,&quot;size&quot;:40,&quot;duration&quot;:2,&quot;opacity&quot;:8,&quot;speed&quot;:3},&quot;repulse&quot;:{&quot;distance&quot;:200,&quot;duration&quot;:0.4},&quot;push&quot;:{&quot;particles_nb&quot;:4},&quot;remove&quot;:{&quot;particles_nb&quot;:2}}},&quot;retina_detect&quot;:true}">
</div>
<div className="container h-100">
<div className="row align-items-center justify-content-center align-items-center h-100 z-index-2 position-relative">
<div className="col-md-12 col-lg-10 col-xl-8 col-xxl-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h1 className="fw-700 fs-70 mb-10px text-dark-gray ls-minus-2px">
              Coming soon!
            </h1>
<h6 className="text-dark-gray mb-0">
              Media partners will be revealed soon!
            </h6>
<div className="countdown-style-03 mb-9 mt-9" style={{display: "none"}}>
<div data-enddate="2024/08/08 12:00:00" className="countdown"></div>
</div>
</div>
</div>
</div>
</div>
<div></div>
</section>


<section className="pt-5 sm-pt-50px" style={{backgroundColor: "#F0F2F8"}}>
<div className="container">
<h1 style={{textAlign: "center", fontFamily: "'Arial', sans-serif", fontSize: "60px", fontWeight: "bold", color: "#333", marginBottom: "50px"}}>
        Our Sponsors
      </h1>

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
<h1 style={{textAlign: "center", fontFamily: "'Arial', sans-serif", fontSize: "60px", fontWeight: "bold", color: "#333", marginBottom: "50px"}}>
        Previous Year Sponsors
      </h1>

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

<section className="" style={{backgroundColor: "#f0f2f8", marginTop: "-50px"}}>
<div className="container">
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }" style={{display: "none"}}>
<span className="text-base-color fw-600 mb-5px text-uppercase d-block">You're our priority</span>
<h2 className="text-dark-gray fw-700 ls-minus-1px">
            Hosting experience
          </h2>
</div>
</div>
<h1 style={{textAlign: "center", /* centers the heading */
            fontFamily: "'Arial', sans-serif", /* changes font */
            fontSize: "60px", /* changes size */
            fontWeight: "bold", /* makes it bold */
            color: "#333"}}>
        Previous Year Media
      </h1>
<div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;,  &quot;translateY&quot;: [0, 0], &quot;perspective&quot;: [1200, 1200], &quot;scale&quot;: [1.05, 1], &quot;rotateX&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;:600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-1.png" className="h-100px" alt="" style={{objectFit: "contain"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-2.jpeg" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", marginLeft: "30px"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-3.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", marginLeft: "30px", transform: "scale(1.2)"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-4.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", transform: "scale(1.2)"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-5.webp" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", transform: "scale(1.3)"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-6.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", marginLeft: "50px", transform: "scale(1.3)"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-7.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", transform: "scale(1.3)"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-8.svg" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", transform: "scale(1.3)"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-9.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", transform: "scale(1.3)"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-10.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", transform: "scale(1)"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-11.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", transform: "scale(1.2)"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-12.jpeg" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", transform: "scale(1.2)"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-13.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-14.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-15.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", transform: "scale(1.2)", marginLeft: "45px"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-16.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-17.webp" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-18.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-19.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex", marginLeft: "30px", transform: "scale(1.3)"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-20.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-21.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-22.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-23.webp" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-24.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-25.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
</div>
</div>
</div>


<div className="col icon-with-text-style-07 transition-inner-all mb-30px">
<div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
<div className="feature-box-icon">
<img src="images/Media/media-26.png" className="h-100px" alt="" style={{objectFit: "contain", display: "flex"}} />
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
