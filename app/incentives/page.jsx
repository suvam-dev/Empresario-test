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
<svg xmlns="http://www.w3.org/2000/svg" widht="3000" height="400" viewBox="0 180 2500 200" fill="#F8F9FA">
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
<span className="ps-25px pe-25px pt-5px pb-5px mb-15px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-flex"><i className="bi bi-megaphone text-white icon-small me-10px"></i>Claim Your Success Perks</span>
<h1 className="mb-20px text-white fw-600 ls-minus-1px">Incentives</h1>
</div>
</div>
</div>
</section>


<section id="incentives" className="big-section bg-white p-0">

<div className="tracks-scroll-wrapper scroll-circle-wrapper" style={{height: "800vh", position: "relative"}}>
<div className="tracks-sticky-container scroll-sticky-container" style={{position: "relative", width: "100%", height: "100vh", top: "0", left: "0"}}>
<div className="container h-100 position-relative">

<div className="tracks-dynamic-graphic">
<div className="graphic-item active"><i className="feather icon-feather-users"></i></div>
<div className="graphic-item"><i className="feather icon-feather-globe"></i></div>
<div className="graphic-item"><i className="feather icon-feather-briefcase"></i></div>
<div className="graphic-item"><i className="feather icon-feather-mic"></i></div>
<div className="graphic-item"><i className="feather icon-feather-award"></i></div>
<div className="graphic-item"><i className="feather icon-feather-message-square"></i></div>
</div>

<div className="tracks-circle-container">
<div className="tracks-circle scroll-circle">

<div className="track-num-item scroll-num-item active" style={{transform: "translateY(-50%) rotate(0deg)"}}>
<span style={{transform: "rotate(0deg)"}}>01</span>
</div>

<div className="track-num-item scroll-num-item" style={{transform: "translateY(-50%) rotate(30deg)"}}>
<span style={{transform: "rotate(-30deg)"}}>02</span>
</div>

<div className="track-num-item scroll-num-item" style={{transform: "translateY(-50%) rotate(60deg)"}}>
<span style={{transform: "rotate(-60deg)"}}>03</span>
</div>

<div className="track-num-item scroll-num-item" style={{transform: "translateY(-50%) rotate(90deg)"}}>
<span style={{transform: "rotate(-90deg)"}}>04</span>
</div>

<div className="track-num-item scroll-num-item" style={{transform: "translateY(-50%) rotate(120deg)"}}>
<span style={{transform: "rotate(-120deg)"}}>05</span>
</div>

<div className="track-num-item scroll-num-item" style={{transform: "translateY(-50%) rotate(150deg)"}}>
<span style={{transform: "rotate(-150deg)"}}>06</span>
</div>
</div>

<div className="active-indicator-wrapper">
<span className="active-indicator-label">Incentives</span>
<div className="active-indicator"></div>
</div>
</div>

<div className="tracks-content-container">

<div className="track-content-card scroll-content-card active">
<h2>Expert Mentoring</h2>
<p>Semi-finalists receive guidance from seasoned entrepreneurs and industry professionals including top VC
                firms like Blume Ventures and Eximius Ventures to refine their ideas and strategies.</p>
<div className="track-pill-tags">
<span>Guidance</span>
<span>VC Firms</span>
</div>
</div>

<div className="track-content-card scroll-content-card">
<h2>Networking</h2>
<p>An excellent opportunity to connect with entrepreneurs, innovative thinkers, potential partners, and
                investors from world-class firms like Venture Catalysts and Elevation Capital.</p>
<div className="track-pill-tags">
<span>Connect</span>
<span>Investors</span>
</div>
</div>

<div className="track-content-card scroll-content-card">
<h2>Startup Services</h2>
<p>To enhance growth, startups gain premium software access and credits on leading platforms like AWS, CRM
                services, or Incubation support.</p>
<div className="track-pill-tags">
<span>AWS Credits</span>
<span>Software</span>
</div>
</div>

<div className="track-content-card scroll-content-card">
<h2>Elevator Pitch</h2>
<p>Participants pitch their ventures to top angel investors, VCs, and industry leaders from renowned firms
                like JP Morgan Chase & Co. and Rolls-Royce. This is a unique chance to showcase innovation.</p>
<div className="track-pill-tags">
<span>Pitching</span>
<span>Showcase</span>
</div>
</div>

<div className="track-content-card scroll-content-card">
<h2>Prize Money</h2>
<p>Awards will be given to winners and runners-up in Products & Services, Social Impact, and Best IIT
                Kharagpur Entry from a prize pool of over ₹1.2 crore.</p>
<div className="track-pill-tags">
<span>₹1.2 Crore</span>
<span>Awards</span>
</div>
</div>

<div className="track-content-card scroll-content-card">
<h2>Feedback</h2>
<p>Valuable, actionable feedback on business models from our expert judging panel of entrepreneurs and
                investors, empowering you to sharpen your approach.</p>
<div className="track-pill-tags">
<span>Actionable</span>
<span>Expert Panel</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh", padding: "100px 0"}}>
<div className="container1">
<div className="card">
<a href="https://getswipe.in/?campaignid=18020457045&adgroupid=140454943856&keyword=swipe&device=c&creative=616145033678&_campaignname=BrandSearch&gad_source=1&gclid=Cj0KCQiAv628BhC2ARIsAIJIiK9EFE8onM3s1jZQHhtrFy1pDMVnTqN67tLVHDdqXqk--bMWdm2qf64aAoKXEALw_wcB" style={{height: "100%", width: "100%"}} target="_blank">
<div className="card__content">
<div className="card__front">
<h3 className="card__title">
<img src="https://img.stackshare.io/company/178526/0844724d3a8cf7814357c769984b95034e538ff2.png" className="img" alt="" />
</h3>
<p className="card__subtitle"> FREE SWIPE SUBSCRIPTION OF INR 49,999/- TO ALL THE STARTUPS OF EMPRESARIO 2026
                FOR 1 YEAR </p>
</div>
<div className="card__back">
<p className="card__body">1)Startup should have registered for <br /> Empresario to avail the services <br />
                2)Startup need to provide the <br />details in the airtable <br />
</p>
</div>
</div>
</a>
</div>
<div className="card">
<a href="https://app.callerdesk.io/" target="_blank">
<div className="card__content">
<div className="card__front">
<div></div>
<h3 className="card__title">
<img src="https://imagedelivery.net/cpyRmB-4Qzn5-ySmAHXmxA/ec1eb906-d0da-48bf-4e8f-66fdb755b200/public" className="img" alt="" />
</h3>
<p className="card__subtitle"> Free credits worth 16k </p>
</div>
<div className="card__back">
<p className="card__body">1)Startup should have registered for Empresario to avail the services 2) Fill the
                given below google form: </p>
</div>
</div>
</a>
</div>
<div className="card">
<a href="https://aws.amazon.com/" target="_blank">
<div className="card__content">
<div className="card__front">
<div></div>
<h3 className="card__title">
<img src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" className="img" alt="" />
</h3>
<p className="card__subtitle"> $1000 credits for all startups and $5000 credits for finalists. </p>
</div>
<div className="card__back">
<p className="card__body">Kindly fill out this Google form, and representatives from AMLEGALS or
                Entrepreneurship Cell will contact you. </p>
</div>
</div>
</a>
</div>
<div className="card">
<a href="https://www.canva.com/en_in/?msockid=2672aa8ab9b06f3a1512bff2b8b66e3c" target="_blank">
<div className="card__content">
<div className="card__front">
<div></div>
<h3 className="card__title">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIHgIQZVkU3KQEreTEqQXO9iG2Boyc3n-2A&s" className="img" alt="" />
</h3>
<p className="card__subtitle"> FREE CANVA PRO SUBSCRIPTION 1-MONTH FOR SEMIFINALISTS /3-MONTHS FOR FINALIST
                PLAN FOR ALL STARTUPS OF EMPRESARIO 2026 </p>
</div>
<div className="card__back">
<p className="card__body">Startup needs to provide the following details in the canva’s subscription provided:
                a) Startup Name b) Contact Number c) Email Address </p>
</div>
</div>
</a>
</div>
<div className="card">
<a href="https://amlegals.com/#" target="_blank">
<div className="card__content">
<div className="card__front">
<div></div>
<h3 className="card__title">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LiDY8XcInf1YKEwZQwlgoMsacaS89oas5A&s" className="img" alt="" />
</h3>
<p className="card__subtitle"> Exclusive and subsidised legal fees for Empresario finalists and semi finalists
              </p>
</div>
<div className="card__back">
<p className="card__body">Kindly fill out this Google form, and representatives from AMLEGALS or
                Entrepreneurship Cell will contact you. </p>
</div>
</div>
</a></div>
<div className="card">
<a href="https://www.msgclub.net/" target="_blank">
<div className="card__content">
<div className="card__front">
<div></div>
<h3 className="card__title">
<img src="https://miro.medium.com/v2/resize:fit:2400/2*-TRDmVVL_EVdCyp4SEIQsw.png" className="img" alt="" />
</h3>
<p className="card__subtitle"> FREE SUBSCRIPTION OF INR 49,999/- TO ALL THE STARTUPS OF EMPRESARIO 2026 FOR 1
                YEAR </p>
</div>
<div className="card__back">
<p className="card__body">1)Startup should have registered for Empresario to avail the services 2)Fill the
                given below google form </p>
</div>
</div>
</a>
</div>
</div>
</section>


<section className="bg-very-light-gray position-relative" style={{display: "none"}}>
<div className="container">
<div className="row mb-8">
<div className="col-xl-5 col-lg-6 md-mb-50px" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateX&quot;: [-50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 1200, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 150, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<div className="bg-white border-radius-6px box-shadow-quadruple-large p-10 ps-12 pe-12 lg-ps-8 lg-pe-8 h-100 d-flex flex-wrap flex-column justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [0, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 1200, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 150, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-flex align-self-start"><i className="bi bi-chat-square-dots fs-16 me-5px"></i>Lets's work
              together</span>
<h4 className="text-dark-gray ls-minus-1px fw-700 mb-15px">
              Ready to help you!
            </h4>
<p className="w-85 sm-w-100">
              We're here to help and answer any question you might have.
            </p>
<div className="row row-cols-1 row-cols-sm-2">
<div className="col last-paragraph-no-margin mb-25px">
<p>Call us directly?</p>
<a href="tel:12345678910" className="text-dark-gray fw-600">+1 234 567 8910</a>
</div>
<div className="col last-paragraph-no-margin mb-25px">
<p>Need live support?</p>
<a href="mailto:info@domain.com" className="text-dark-gray fw-600"><span className="__cf_email__" data-cfemail="8ae3e4ece5caeee5e7ebe3e4a4e9e5e7">[email protected]</span></a>
</div>
<div className="col last-paragraph-no-margin sm-mb-25px">
<p>Join growing team?</p>
<a href="mailto:join@domain.com" className="text-dark-gray fw-600"><span className="__cf_email__" data-cfemail="ed87828483ad8982808c8483c38e8280">[email protected]</span></a>
</div>
<div className="col last-paragraph-no-margin">
<p>Visit headquarters?</p>
<a href="https://maps.google.com/maps?ll=-37.805688,144.962312&z=17&t=m&hl=en-US&gl=IN&mapclient=embed&cid=13153204942596594449" target="_blank" className="text-dark-gray fw-600">View on google map</a>
</div>
</div>
</div>
</div>
<div className="col-lg-6 offset-xl-1 md-mb-50px sm-mb-0" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateX&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 1200, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 150, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="text-dark-gray ls-minus-2px fw-700">
            Looking for any help?
          </h3>
<form action="email-templates/contact-form.php" method="post" className="contact-form-style-03">
<label htmlFor="exampleInputEmail1" className="form-label fs-13 text-uppercase text-dark-gray fw-700 mb-0">Enter
              your name*</label>
<div className="position-relative form-group mb-20px">
<span className="form-icon"><i className="bi bi-emoji-smile text-dark-gray"></i></span>
<input className="fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required" id="exampleInputEmail1" type="text" name="name" placeholder="What's your good name" />
</div>
<label htmlFor="exampleInputEmail1" className="form-label fs-13 text-uppercase text-dark-gray fw-700 mb-0">Email
              address*</label>
<div className="position-relative form-group mb-20px">
<span className="form-icon"><i className="bi bi-envelope text-dark-gray"></i></span>
<input className="fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required" id="exampleInputEmail2" type="email" name="email" placeholder="Enter your email address" />
</div>
<label htmlFor="exampleInputEmail1" className="form-label fs-13 text-uppercase text-dark-gray fw-700 mb-0">Your
              message</label>
<div className="position-relative form-group form-textarea mb-0">
<textarea className="fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control" name="comment" placeholder="Describe about your project" rows="3"></textarea>
<span className="form-icon"><i className="bi bi-chat-square-dots text-dark-gray"></i></span>
</div>
<div className="row mt-25px align-items-center">
<div className="col-xl-7 col-lg-12 col-sm-7 lg-mb-30px md-mb-0">
<p className="mb-0 fs-14 lh-22 text-center text-sm-start">
                  We will never collect information about you without your
                  explicit consent.
                </p>
</div>
<div className="col-xl-5 col-lg-12 col-sm-5 text-center text-sm-end text-lg-start text-xl-end xs-mt-25px">
<input id="exampleInputEmail3" type="hidden" name="redirect" value="" />
<button className="btn btn-dark-gray btn-medium btn-round-edge btn-box-shadow submit" type="submit">
                  Send message
                </button>
</div>
<div className="col-12 mt-20px mb-0 text-center text-md-start">
<div className="form-results d-none"></div>
</div>
</div>
</form>
</div>
</div>
</div>
<div className="shape-image-animation p-0 w-100 bottom-minus-40px xl-bottom-0px d-none d-md-block">
<svg xmlns="http://www.w3.org/2000/svg" widht="3000" height="400" viewBox="0 180 2500 200" fill="#F0F2F8">
<path className="st1" d="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250">
<animate attributeName="d" dur="5s" values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250" repeatCount="indefinite"></animate>
</path>
</svg>
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
