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


<section className="pt-0 cover-background ipad-top-space-margin sm-pb-0" style={{backgroundImage: "url('images/event-images/images\ \(4\).jpeg')", backgroundColor: "#1E2033"}}>
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
<span className="ps-25px pe-25px pt-5px pb-5px mb-15px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-flex"><i className="bi bi-megaphone text-white icon-small me-10px"></i>Meet our past winners</span>
<h1 className="mb-20px text-white fw-600 ls-minus-1px">Winners</h1>
</div>
</div>
</div>
</section>


<section className="position-relative" style={{backgroundColor: "#F0F2F8"}}>
<div className="container" style={{marginTop: "-30px"}}>
<div className="row">
<div className="col tab-style-01">
<ul className="nav nav-tabs justify-content-center border-0 text-center fs-18 alt-font fw-600 mb-3">
<li className="nav-item">
<a className="nav-link active" data-bs-toggle="tab" href="#tab_sec_2025">2025-26</a>
</li>
<li className="nav-item">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec3">2024-25</a>
</li>
<li className="nav-item">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec1">2023-24</a>
</li>
<li className="nav-item">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec2">2022-23</a>
</li>
</ul>
<div className="tab-content">

<div className="tab-pane fade in active show" id="tab_sec_2025">
<div className="row justify-content-center align-items-center">
<div className="container" style={{marginTop: "50px"}}>

<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Deeptech & AI
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center mb-5">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://advaitic.ai/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="images/Final_2025-26/Advaitic.png" alt="Advaitic" style={{maxHeight: "120px", maxWidth: "80%"}} />
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Advaitic</span>
<p className="text-white text-center">Innovating the future with advanced AI models and deep tech solutions tailored for modern business challenges.</p>
</div>
</div>
</div>
</a>
</div>

<div className="col rotate-box-style-02 mb-30px">
<a href="https://trydexops.com/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#f7a922"}} className="text-white fw-700">Runner Up</div>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="images/Final_2025-26/Dexops.png" alt="Dexops" style={{maxHeight: "120px", maxWidth: "80%"}} />
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Dexops</span>
<p className="text-white text-center">Leveraging deep tech and automation to optimize operational workflows and enhance digital experiences.</p>
</div>
</div>
</div>
</a>
</div>
</div>

<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Product & Services
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center mb-5">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://catalystlabssl.com/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="images/Final_2025-26/catilyst labs.png" alt="Catalyst Labs" style={{maxHeight: "120px", maxWidth: "80%"}} />
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Catalyst Labs</span>
<p className="text-white text-center">Empowering businesses with cutting-edge product design and scalable technological services.</p>
</div>
</div>
</div>
</a>
</div>

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-300px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#f7a922"}} className="text-white fw-700">Runner Up</div>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="images/Final_2025-26/G.O.A.T.E.D.png" alt="G.O.A.T.E.D." style={{maxHeight: "120px", maxWidth: "80%"}} />
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-18 mb-5px">G.O.A.T.E.D.</span>
<p className="text-white text-center">A premium Trayaksh Apex Pvt. Ltd. brand redefining
                              consumer experiences with exceptional products.</p>
</div>
</div>
</div>
</div>
</div>

<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Social
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center mb-5">

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-300px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="images/Final_2025-26/Jestally.png" alt="Jestally" style={{maxHeight: "120px", maxWidth: "80%"}} />
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Jestally</span>
<p className="text-white text-center">A social initiative aimed at creating a positive community
                              impact through accessible and sustainable solutions.</p>
</div>
</div>
</div>
</div>

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-300px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#f7a922"}} className="text-white fw-700">Runner Up</div>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="images/Final_2025-26/KheetiBazar.png" alt="KHEETII BAZAAR" style={{maxHeight: "120px", maxWidth: "80%"}} />
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-18 mb-5px">KHEETII
                              BAZAAR</span>
<p className="text-white text-center">Empowering the agricultural sector by connecting local
                              farmers directly with markets for fair trade and growth.</p>
</div>
</div>
</div>
</div>
</div>

<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        IIT Kharagpur
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center mb-5">

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-300px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="images/Final_2025-26/reeyam.png" alt="Reeyam Engineering and Technology Pvt. Ltd." style={{maxHeight: "120px", maxWidth: "80%"}} />
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-18 mb-5px">Reeyam
                              Engg & Tech</span>
<p className="text-white text-center">Delivering robust engineering and technology solutions,
                              born right out of the IIT Kharagpur ecosystem.</p>
</div>
</div>
</div>
</div>
</div>

<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Special
                        <span className="fw-700 text-decoration-line-bottom-medium">Categories</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center mb-5">

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-300px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Most Innovative Startup</div>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="images/Final_2025-26/Tridactor.png" alt="Tridantor Ideaus Private Limited" style={{maxHeight: "120px", maxWidth: "80%"}} />
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-18 mb-5px">Tridantor Ideaus</span>
<p className="text-white text-center">Driving groundbreaking innovation with unique,
                              out-of-the-box approaches to complex industry problems.</p>
</div>
</div>
</div>
</div>

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-300px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Best Women led Startup</div>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<a href="https://curious-douhua-7ac270.netlify.app/" target="_blank">
<img src="images/Final_2025-26/Neurosence.png" alt="NeuroSense" style={{maxHeight: "120px", maxWidth: "80%"}} />
</a>
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<a href="https://curious-douhua-7ac270.netlify.app/" target="_blank">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">NeuroSense</span>
</a>
<p className="text-white text-center">A pioneering women-led enterprise creating impactful
                              solutions and inspiring diversity in tech and business.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="tab-pane fade in" id="tab_sec1">
<div className="row justify-content-center align-items-center">

<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Product and Service
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://www.newrup.org/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2024/winner-1.jpeg" alt="" style={{transform: "scale(3)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Newrup Tech</span>
<p className="text-white">They manufacture affordable clean energy equipment to save 2 billion
                                women still using traditional mud stoves/chulhas worldwide.</p>
</div>

</div>
</div>
</a>
</div>


<div className="col rotate-box-style-02 mb-30px">
<a href="https://xco.one/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#CC7C3E"}} className="text-white fw-700">Runner-up</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2024/winner-7.svg" alt="" style={{transform: "scale(1)", backgroundColor: "black", padding: "10px"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large">
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Xco
                                One</span>
<p className="text-white">A lightweight, high-performance mobility platform featuring a unique
                                plug-and-play liquid cooling system for enhanced efficiency.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>
<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Social Impact
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://www.tgpbio.com/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2024/winner-4.png" alt="" style={{transform: "scale(0.8)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">TGP
                                Bioplastics</span>
<p className="text-white">They manufacture biodegradable polymers for films and carry-bags,
                                offering cost-competitive granules with excellent strength.</p>
</div>

</div>
</div>
</a>
</div>


<div className="col rotate-box-style-02 mb-30px">
<a href="https://www.bluelotus.solutions/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#CC7C3E"}} className="text-white fw-700">Runner-up</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2024/winner-5.jpg" alt="" style={{transform: "scale(2)", padding: "10px"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large">
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Bluelotus.solutions</span>
<p className="text-white">Blue Lotus Solutions develops sustainable solutions to fight the
                                climate crisis, from emission reductions to CO2 removal, aiming to remove 1Gt by 2036.
                              </p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        AI
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://www.linkedin.com/company/retrosafeinnovations/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2024/winner-8.jpeg" alt="" style={{transform: "scale(2)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">RetroSafe Innovations</span>
<p className="text-white">It revolutionizes safety with IoT, AI, and data-driven solutions for
                                transport and other sectors, enhancing security and reliability.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        IIT KGP
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://www.heltar.com/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2024/winner-9.svg" alt="" style={{transform: "scale(1)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Heltar</span>
<p className="text-white">Heltar automates sales pipelines with AI-powered solutions for
                                pre-sales, ongoing sales, and 24/7 post-sales support, enhancing business efficiency and
                                effectiveness.</p>
</div>

</div>
</div>
</a>
</div>


<div className="col rotate-box-style-02 mb-30px">
<a href="https://evermorrowlabs.com/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2024/winner-6.png" alt="" style={{transform: "scale(2)", backgroundColor: "black"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Evermorrow Labs</span>
<p className="text-white">Evermorrow Labs is a pioneering VR game studio from India,
                                redefining how VR games are made, monetized, and played globally.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Best Women Led
                        <span className="fw-700 text-decoration-line-bottom-medium">Startup</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://www.p2pcarz.com/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2024/winner-3.png" alt="" style={{transform: "scale(2)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">P2PCarz</span>
<p className="text-white">P2Pcarz.Com is a marketplace connecting buyers and sellers with
                                curated services like vehicle valuation, background checks, loans, insurance, and RTO
                                support. </p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Most Innovative
                        <span className="fw-700 text-decoration-line-bottom-medium">Startup</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://www.linkedin.com/company/sitemasterhq/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2024/winner-2.png" alt="" style={{transform: "scale(0.7)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Sitemaster</span>
<p className="text-white">Replace pen and paper with real-time site monitoring, activity
                                tracking, and precise material usage for more efficient construction projects.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


</div>
</div>


<div className="tab-pane fade in" id="tab_sec3">
<div className="row justify-content-center align-items-center">

<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Product and Service
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href=" ">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2026/winner1.png" alt="" style={{transform: "scale(1)", backgroundColor: "black", padding: "10px"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Innovease India Private Limited</span>
<p className="text-white">Sputnik Brain is a stealth startup using noninvasive neural
                                interfaces to alleviate stress and create a suffering-free civilization.</p>
</div>

</div>
</div>
</a>
</div>


<div className="col rotate-box-style-02 mb-30px">
<a href=" ">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#CC7C3E"}} className="text-white fw-700">Runner-up</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2026/winner2.jpeg" alt="" style={{transform: "scale(1)", backgroundColor: "black"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large">
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Unikisan</span>
<p className="text-white">Animeta Agritech is India's leading digital platform for dairy
                                farming, offering veterinary services and tech solutions for improved animal health.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>
<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Social Impact
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://0waste.co.in/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2026/winner3.png" alt="" style={{transform: "scale(2)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Aural
                                Essence</span>
<p className="text-white">They reduce India's waste, supporting the Circular Economy, cutting
                                CO2, and advancing SDG 2030.</p>
</div>

</div>
</div>
</a>
</div>


<div className="col rotate-box-style-02 mb-30px">
<a href="https://bliscare.com/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#CC7C3E"}} className="text-white fw-700">Runner-up</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2026/winner4.png" alt="" style={{transform: "scale(1)", padding: "10px"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large">
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Mutanex Genomics</span>
<p className="text-white">BLISCare boosts surgical practices by covering unexpected costs,
                                improving patient trust and satisfaction.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        IIT KGP
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://www.heltar.com/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2024/winner-" alt="" style={{transform: "scale(1)", display: "none"}} />
<h1 style={{transform: "scale(0.7)"}}>Lendrr</h1>
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Lendrr</span>
<p className="text-white"></p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Best Women Led
                        <span className="fw-700 text-decoration-line-bottom-medium">Startup</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://therapheal.in/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2026/winner6.png" alt="" style={{transform: "scale(2)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Trufly Aerospace Private Limited</span>
<p className="text-white">TherapHeal provides ethical mental health care and professional
                                development online, focusing on LGBTQIA+ affirmation, inclusivity, and empathetic
                                support.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Most Innovative
                        <span className="fw-700 text-decoration-line-bottom-medium">Startup</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://axial.aero/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2026/winner7.png" alt="" style={{transform: "scale(2)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">BHARATTECH</span>
<p className="text-white">AxialAero leads in aeronautical tech, offering propulsion systems,
                                simulation, hybrid aircraft solutions, and advanced controls for commercial and military
                                use.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>
</div>
</div>


<div className="tab-pane fade in" id="tab_sec2">
<div className="row justify-content-center align-items-center">

<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Product and Service
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://www.sputnikbrain.com/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2023/winner-2.png" alt="" style={{transform: "scale(1)", backgroundColor: "black", padding: "10px"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Sputnik Brain</span>
<p className="text-white">Sputnik Brain is a stealth startup using noninvasive neural
                                interfaces to alleviate stress and create a suffering-free civilization.</p>
</div>

</div>
</div>
</a>
</div>


<div className="col rotate-box-style-02 mb-30px">
<a href="https://xco.one/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#CC7C3E"}} className="text-white fw-700">Runner-up</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2023/winner-7.png" alt="" style={{transform: "scale(1)", backgroundColor: "black"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large">
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">AniMeta AgriTech (YourFarm)</span>
<p className="text-white">Animeta Agritech is India's leading digital platform for dairy
                                farming, offering veterinary services and tech solutions for improved animal health.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>
<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Social Impact
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://0waste.co.in/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2023/winner-1.png" alt="" style={{transform: "scale(2)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">3R
                                ZeroWaste Private Limited</span>
<p className="text-white">They reduce India's waste, supporting the Circular Economy, cutting
                                CO2, and advancing SDG 2030.</p>
</div>

</div>
</div>
</a>
</div>


<div className="col rotate-box-style-02 mb-30px">
<a href="https://bliscare.com/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#CC7C3E"}} className="text-white fw-700">Runner-up</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2023/winner-3.webp" alt="" style={{transform: "scale(1)", padding: "10px"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large">
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">BLISCare</span>
<p className="text-white">BLISCare boosts surgical practices by covering unexpected costs,
                                improving patient trust and satisfaction.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Web 3.0
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://guardian.crsquare.finance/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2023/winner-8.jpeg" alt="" style={{transform: "scale(2)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">CR
                                Square Finance</span>
<p className="text-white">Fundraising and Product Validation Platform for web3 Startups.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        IIT KGP
                        <span className="fw-700 text-decoration-line-bottom-medium">Track</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://www.heltar.com/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2024/winner-" alt="" style={{transform: "scale(1)", display: "none"}} />
<h1 style={{transform: "scale(0.7)"}}>Lendrr</h1>
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Lendrr</span>
<p className="text-white"></p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Best Women Led
                        <span className="fw-700 text-decoration-line-bottom-medium">Startup</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://therapheal.in/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2023/winner-5.jpeg" alt="" style={{transform: "scale(2)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">TherapHeal</span>
<p className="text-white">TherapHeal provides ethical mental health care and professional
                                development online, focusing on LGBTQIA+ affirmation, inclusivity, and empathetic
                                support.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>


<div className="container" style={{marginTop: "50px"}}>
<div className="row justify-content-center mb-3">
<div className="col-lg-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">
                        Most Innovative
                        <span className="fw-700 text-decoration-line-bottom-medium">Startup</span>
</h3>
</div>
</div>
<div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateZ&quot;: [5, 0], &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col rotate-box-style-02 mb-30px">
<a href="https://axial.aero/" target="_blank">
<div className="w-100 min-h-300px text-center rotate-box to-left">

<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px box-shadow-quadruple-large">
<div style={{position: "absolute", bottom: "0px", left: "50%", transform: "translateX(-50%)", padding: "10px", zIndex: "10", width: "100%", backgroundColor: "#B5DF58"}} className="text-white fw-700">Winner</div>
<div className="rotate-content-front z-index-2 p-30px">
<img className="mb-25px h-70px" src="images/winners/2023/winner-6.jpeg" alt="" style={{transform: "scale(2)"}} />
</div>
</div>


<div className="w-100 h-100 overflow-hidden back-side cover-background border-radius-6px box-shadow-quadruple-large" style={{backgroundImage: "url('images/demo-lawyer-practice-areas-02.jpg')"}}>
<div className="opacity-light bg-charcoal-blue"></div>
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span style={{transform: "scale(1.2)"}} className="text-white alt-font fw-600 fs-20 mb-5px">Axial
                                Aero</span>
<p className="text-white">AxialAero leads in aeronautical tech, offering propulsion systems,
                                simulation, hybrid aircraft solutions, and advanced controls for commercial and military
                                use.</p>
</div>

</div>
</div>
</a>
</div>

</div>
</div>
</div>
</div>


<div className="tab-pane fade in" id="tab_sec4">
<div className="row justify-content-center align-items-center">
                This is instruction
              </div>
</div>


<div className="tab-pane fade in" id="tab_sec4">
<div className="row justify-content-center align-items-center">
                This is FAQ
              </div>
</div>

</div>
</div>
</div>
</div>
</section>


<section className="background-position-center-top sm-background-image-none" style={{backgroundImage: "url('images/vertical-line-bg-medium-gray.svg')", backgroundColor: "#F0F2F8", marginTop: "-100px", display: "none"}}>
<div style={{height: "500px"}}>
<div id="particles-style-01" className="position-absolute h-100 top-0 left-0 w-100" data-particle="true" data-particle-options="{&quot;particles&quot;:{&quot;number&quot;:{&quot;value&quot;:10,&quot;density&quot;:{&quot;enable&quot;:true,&quot;value_area&quot;:800}},&quot;color&quot;:{&quot;value&quot;:&quot;#b0b4e2&quot;},&quot;shape&quot;:{&quot;type&quot;:&quot;circle&quot;,&quot;stroke&quot;:{&quot;width&quot;:0,&quot;color&quot;:&quot;#000000&quot;},&quot;polygon&quot;:{&quot;nb_sides&quot;:5},&quot;image&quot;:{&quot;src&quot;:&quot;img/github.svg&quot;,&quot;width&quot;:100,&quot;height&quot;:100}},&quot;opacity&quot;:{&quot;value&quot;:1,&quot;random&quot;:false,&quot;anim&quot;:{&quot;enable&quot;:false,&quot;speed&quot;:1,&quot;opacity_min&quot;:0.1,&quot;sync&quot;:false}},&quot;size&quot;:{&quot;value&quot;:4,&quot;random&quot;:true,&quot;anim&quot;:{&quot;enable&quot;:false,&quot;speed&quot;:40,&quot;size_min&quot;:0.1,&quot;sync&quot;:false}},&quot;line_linked&quot;:{&quot;enable&quot;:false,&quot;distance&quot;:150,&quot;color&quot;:&quot;#ffffff&quot;,&quot;opacity&quot;:0.4,&quot;width&quot;:1},&quot;move&quot;:{&quot;enable&quot;:true,&quot;speed&quot;:6,&quot;direction&quot;:&quot;none&quot;,&quot;random&quot;:false,&quot;straight&quot;:false,&quot;out_mode&quot;:&quot;out&quot;,&quot;bounce&quot;:false,&quot;attract&quot;:{&quot;enable&quot;:false,&quot;rotateX&quot;:600,&quot;rotateY&quot;:1200}}},&quot;interactivity&quot;:{&quot;detect_on&quot;:&quot;canvas&quot;,&quot;events&quot;:{&quot;onhover&quot;:{&quot;enable&quot;:true,&quot;mode&quot;:&quot;repulse&quot;},&quot;onclick&quot;:{&quot;enable&quot;:true,&quot;mode&quot;:&quot;push&quot;},&quot;resize&quot;:true},&quot;modes&quot;:{&quot;grab&quot;:{&quot;distance&quot;:400,&quot;line_linked&quot;:{&quot;opacity&quot;:1}},&quot;bubble&quot;:{&quot;distance&quot;:400,&quot;size&quot;:40,&quot;duration&quot;:2,&quot;opacity&quot;:8,&quot;speed&quot;:3},&quot;repulse&quot;:{&quot;distance&quot;:200,&quot;duration&quot;:0.4},&quot;push&quot;:{&quot;particles_nb&quot;:4},&quot;remove&quot;:{&quot;particles_nb&quot;:2}}},&quot;retina_detect&quot;:true}">
</div>
<div className="container h-100">
<div className="row align-items-center justify-content-center align-items-center h-100 z-index-2 position-relative">
<div className="col-md-12 col-lg-10 col-xl-8 col-xxl-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h1 className="fw-700 fs-70 mb-10px text-dark-gray ls-minus-2px">
              Coming soon!
            </h1>
<h6 className="text-dark-gray mb-0">We're bringing the top mentors your way. Stay tuned!</h6>
<div className="countdown-style-03 mb-9 mt-9" style={{display: "none"}}>
<div data-enddate="2024/08/08 12:00:00" className="countdown"></div>
</div>
</div>
</div>
</div>
</div>
<div>
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
