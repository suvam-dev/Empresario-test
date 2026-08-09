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
<a href="#tracks" style={{color: "#1E2033", fontWeight: "600"}}>Tracks</a>
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
<a href="/services" className="nav-link">Services</a>
</li>
<li className="nav-item">
<a href="/winners" className="nav-link">Winners</a>
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
<a href="/contact-us" className="nav-link contact-link-margin">Contact</a>
</li>
</ul>
</div>
</div>
</div>
</nav>

</header>


<section className="cover-background full-screen ipad-top-space-margin py-0 md-h-1200px sm-h-1000px xl-h-1000px fix-height" style={{backgroundImage: "url(images/event-images/images\ \(4\).jpeg)", backgroundColor: "#252840", minHeight: "800px"}}>
<div className="opacity-very-light bg-black"></div>
<div className="shape-image-animation bottom-0 p-0 w-100 d-none d-md-block">
<svg xmlns="http://www.w3.org/2000/svg" widht="3000" height="400" viewBox="0 180 2500 200" fill="#ffffff">
<path className="st1" d="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250">
<animate attributeName="d" dur="5s" values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250" repeatCount="indefinite"></animate>
</path>
</svg>
</div>
<div className="container h-100 md-mt">
<div className="row align-items-center h-100">
<div className="col-xl-6 col-lg-8 col-md-10 position-relative z-index-1" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [0, 0], &quot;perspective&quot;: [1200,1200], &quot;scale&quot;: [1.05, 1], &quot;rotateX&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 800, &quot;delay&quot;: 200, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<span className="ps-25px pe-25px pt-5px pb-5px mb-25px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-flex w-70 sm-w-100"><i className="bi bi-megaphone text-white icon-small me-10px"></i>
            E-Cell IIT Kharagpur presents</span>
<h1 className="text-white fw-600 ls-minus-2px mb-25px">
            Empresario: Business Model Competition
          </h1>
<div>
<p className="fw-300 fs-18 w-85 sm-w-95 text-white opacity-6">
              Empresario, organized by Entrepreneurship Cell, IIT Kharagpur, is an annual business model competition
              aimed at discovering innovative and enterprising ideas
            </p>
</div>
<a href="/registration?v=5" target="blank" className="btn btn-extra-large btn-switch-text btn-gradient-purple-pink btn-rounded me-10px ls-0px mt-15px">
<span>
<span className="btn-double-text" data-text="Register Now">Register Now</span>
</span>
</a>
<a href="/info" className="btn btn-extra-large btn-switch-text btn-transparent-white-light btn-rounded border-1 ls-0px mt-15px">
<span>
<span className="btn-double-text" data-text="Learn More">Learn More</span>
</span>
</a>
</div>
<div className="col-xl-6 col-lg-8 col-md-10 position-relative z-index-1" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [0, 0], &quot;perspective&quot;: [1200,1200], &quot;scale&quot;: [1.05, 1], &quot;rotateX&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 800, &quot;delay&quot;: 200, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<div style={{position: "relative", width: "100%", paddingBottom: "56.25%", height: "0", overflow: "hidden", borderRadius: "10px", marginBottom: "80px"}}>
<iframe style={{display: "none", position: "absolute", top: "0", left: "0", width: "100%", height: "100%", borderRadius: "10px"}} src="https://www.youtube.com/embed/DeBZpUL-Ne0?si=x3gG0JjOh3gQ2z2-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
<video width="450" height="auto" controls={true}>
<source src="images/Last Year's video.mp4" s="" type="video/mp4" />
<source src="images/Last Year's video.mp4" s="" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
</div>
</div>
</div>
</div>
</section>

<section className="background-position-center-top p-0 sm-background-image-none" style={{backgroundImage: "url('public/static/images/vertical-line-bg.svg')", marginTop: "50px", marginBottom: "40px"}}>
<div id="particles-style-01" className="position-absolute h-100 top-0 left-0 w-100" data-particle="true" data-particle-options="{&quot;particles&quot;:{&quot;number&quot;:{&quot;value&quot;:10,&quot;density&quot;:{&quot;enable&quot;:true,&quot;value_area&quot;:800}},&quot;color&quot;:{&quot;value&quot;:&quot;#b0b4e2&quot;},&quot;shape&quot;:{&quot;type&quot;:&quot;circle&quot;,&quot;stroke&quot;:{&quot;width&quot;:0,&quot;color&quot;:&quot;#000000&quot;},&quot;polygon&quot;:{&quot;nb_sides&quot;:5},&quot;image&quot;:{&quot;src&quot;:&quot;img/github.svg&quot;,&quot;width&quot;:100,&quot;height&quot;:100}},&quot;opacity&quot;:{&quot;value&quot;:1,&quot;random&quot;:false,&quot;anim&quot;:{&quot;enable&quot;:false,&quot;speed&quot;:1,&quot;opacity_min&quot;:0.1,&quot;sync&quot;:false}},&quot;size&quot;:{&quot;value&quot;:4,&quot;random&quot;:true,&quot;anim&quot;:{&quot;enable&quot;:false,&quot;speed&quot;:40,&quot;size_min&quot;:0.1,&quot;sync&quot;:false}},&quot;line_linked&quot;:{&quot;enable&quot;:false,&quot;distance&quot;:150,&quot;color&quot;:&quot;#ffffff&quot;,&quot;opacity&quot;:0.4,&quot;width&quot;:1},&quot;move&quot;:{&quot;enable&quot;:true,&quot;speed&quot;:6,&quot;direction&quot;:&quot;none&quot;,&quot;random&quot;:false,&quot;straight&quot;:false,&quot;out_mode&quot;:&quot;out&quot;,&quot;bounce&quot;:false,&quot;attract&quot;:{&quot;enable&quot;:false,&quot;rotateX&quot;:600,&quot;rotateY&quot;:1200}}},&quot;interactivity&quot;:{&quot;detect_on&quot;:&quot;canvas&quot;,&quot;events&quot;:{&quot;onhover&quot;:{&quot;enable&quot;:true,&quot;mode&quot;:&quot;repulse&quot;},&quot;onclick&quot;:{&quot;enable&quot;:true,&quot;mode&quot;:&quot;push&quot;},&quot;resize&quot;:true},&quot;modes&quot;:{&quot;grab&quot;:{&quot;distance&quot;:400,&quot;line_linked&quot;:{&quot;opacity&quot;:1}},&quot;bubble&quot;:{&quot;distance&quot;:400,&quot;size&quot;:40,&quot;duration&quot;:2,&quot;opacity&quot;:8,&quot;speed&quot;:3},&quot;repulse&quot;:{&quot;distance&quot;:200,&quot;duration&quot;:0.4},&quot;push&quot;:{&quot;particles_nb&quot;:4},&quot;remove&quot;:{&quot;particles_nb&quot;:2}}},&quot;retina_detect&quot;:true}">
</div>
<div className="container">
<div className="row position-relative clients-style-08">
<div className="col swiper text-center feather-shadow" data-slider-options="{ &quot;slidesPerView&quot;: 2, &quot;spaceBetween&quot;:0, &quot;speed&quot;: 4000, &quot;loop&quot;: true, &quot;pagination&quot;: { &quot;el&quot;: &quot;.slider-four-slide-pagination-2&quot;, &quot;clickable&quot;: false }, &quot;allowTouchMove&quot;: false, &quot;autoplay&quot;: { &quot;delay&quot;:0, &quot;disableOnInteraction&quot;: false, &quot;pauseOnMouseEnter&quot;: true }, &quot;navigation&quot;: { &quot;nextEl&quot;: &quot;.slider-four-slide-next-2&quot;, &quot;prevEl&quot;: &quot;.slider-four-slide-prev-2&quot; }, &quot;keyboard&quot;: { &quot;enabled&quot;: true, &quot;onlyInViewport&quot;: true }, &quot;breakpoints&quot;: { &quot;992&quot;: { &quot;slidesPerView&quot;: 4 }, &quot;768&quot;: { &quot;slidesPerView&quot;: 3 } }, &quot;effect&quot;: &quot;slide&quot; }">
<div className="swiper-wrapper marquee-slide">

<div className="swiper-slide" style={{transform: "scale(1.5)", display: "flex", justifyContent: "center", alignItems: "center"}}>
<a href="https://www.alphavalue.co.in/" target="_blank"><img src="images/logos/partners/partner-1.png" className="h-40px xs-h-30px" alt="" /></a>
</div>


<div className="swiper-slide" style={{transform: "scale(1)", display: "flex", justifyContent: "center", alignItems: "center"}}>
<a href="https://elevationcapital.com/" target="_blank"><img src="images/logos/partners/partner-2.png" className="h-40px xs-h-30px" alt="" /></a>
</div>


<div className="swiper-slide" style={{transform: "scale(1)", display: "flex", justifyContent: "center", alignItems: "center"}}>
<a href="https://bharat.fund/" target="_blank"><img src="images/logos/partners/partner-3.png" className="h-60px xs-h-30px" alt="" /></a>
</div>


<div className="swiper-slide" style={{transform: "scale(0.8)", display: "flex", justifyContent: "center", alignItems: "center"}}>
<a href="https://fluidvc.in/" target="_blank"><img src="images/logos/partners/partner-5.png" className="h-40px xs-h-30px" alt="" /></a>
</div>


<div className="swiper-slide" style={{transform: "scale(1.5)", display: "flex", justifyContent: "center", alignItems: "center"}}>
<a href="https://iangroup.vc/" target="_blank"><img src="images/logos/partners/partner-6.jpg" className="h-40px xs-h-30px" alt="" /></a>
</div>


<div className="swiper-slide" style={{transform: "scale(1.5)", display: "flex", justifyContent: "center", alignItems: "center"}}>
<a href="https://ivycamp.in/" target="_blank"><img src="images/logos/partners/partner-8.jpeg" className="h-40px xs-h-30px" alt="" style={{transform: "scale(0.7)"}} /></a>
</div>


<div className="swiper-slide" style={{transform: "scale(1)", display: "flex", justifyContent: "center", alignItems: "center"}}>
<a href="https://www.realtimeaf.com/" target="_blank"><img src="images/logos/partners/partner-9.png" className="h-40px xs-h-30px" alt="" /></a>
</div>


<div className="swiper-slide" style={{transform: "scale(1.5)", display: "flex", justifyContent: "center", alignItems: "center"}}>
<a href="https://www.unicornivc.com/" target="_blank"><img src="images/logos/partners/partner-10.png" className="h-40px xs-h-30px" alt="" /></a>
</div>


<div className="swiper-slide" style={{transform: "scale(1.5)", display: "flex", justifyContent: "center", alignItems: "center"}}>
<a href="https://venturecatalysts.in/" target="_blank"><img src="images/logos/partners/partner-11.png" className="h-40px xs-h-30px" alt="" /></a>
</div>


<div className="swiper-slide" style={{transform: "scale(1.5)", display: "flex", justifyContent: "center", alignItems: "center"}}>
<a href="https://www.blueashvacapital.com/" target="_blank"><img src="images/logos/partners/partner-12.png" className="h-40px xs-h-30px" alt="" /></a>
</div>


<div className="swiper-slide" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<a href="https://www.omnivore.vc/" target="_blank"><img src="images/logos/partners/partner-13.png" className="h-40px xs-h-30px" alt="" /></a>
</div>

</div>
</div>
</div>
</div>
</section>

<section className="pt-3 sm-pt-50px">
<div className="container">
<div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center mb-7" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;:0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }" style={{display: "none"}}>

<div className="col icon-with-text-style-01 md-mb-30px">
<div className="feature-box feature-box-left-icon last-paragraph-no-margin">
<div className="feature-box-icon me-20px">
<img src="images/ecell-logo(white).png" alt="" />
</div>
<div className="feature-box-content">
<span className="d-inline-block fs-18 text-dark-gray fw-700 mb-5px">E-Cell IIT Kharagpur</span>
<p className="w-80 xl-w-90 lg-w-100">
                We believe in challenges and so we have made challenges.
              </p>
</div>
</div>
</div>


<div className="col icon-with-text-style-01 md-mb-30px">
<div className="feature-box feature-box-left-icon last-paragraph-no-margin">
<div className="feature-box-icon me-20px">
<img src="images/ecell-logo(white).png" alt="" />
</div>
<div className="feature-box-content">
<span className="d-inline-block fs-18 text-dark-gray fw-700 mb-5px">Cost savings ideas</span>
<p className="w-80 xl-w-90 lg-w-100">
                We also help our clients with social media strategy.
              </p>
</div>
</div>
</div>


<div className="col icon-with-text-style-01 md-mb-30px">
<div className="feature-box feature-box-left-icon last-paragraph-no-margin">
<div className="feature-box-icon me-20px">
<img src="images/ecell-logo(white).png" alt="" />
</div>
<div className="feature-box-content">
<span className="d-inline-block fs-18 text-dark-gray fw-700 mb-5px">Boost performance</span>
<p className="w-80 xl-w-90 lg-w-100">
                We deliver email marketing campaigns to your audience.
              </p>
</div>
</div>
</div>

</div>


<div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 clients-style-06 justify-content-center ps-3 pe-3 xs-mt-40px" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;scale&quot;: [0.8,1], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;:0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }" style={{marginBottom: "100px", marginTop: "30px", display: "none"}}>

<div className="col client-box text-center md-mb-40px">
<a href="#"><img src="images/Blume Ventures.svg" alt="" /></a>
</div>


<div className="col client-box text-center md-mb-40px">
<a href="#"><img src="images/ecell-logo(white).png" alt="" /></a>
</div>


<div className="col client-box text-center md-mb-40px">
<a href="#"><img src="images/ecell-logo(white).png" alt="" /></a>
</div>


<div className="col client-box text-center sm-mb-40px">
<a href="#"><img src="images/ecell-logo(white).png" alt="" /></a>
</div>


<div className="col client-box text-center">
<a href="#"><img src="images/ecell-logo(white).png" alt="" /></a>
</div>

</div>
<div className="row mb-10 align-items-center">
<div className="col-lg-5 position-relative md-mb-20">
<div className="w-70 xs-w-80" data-animation-delay="50" data-shadow-animation="true">
<img src="images/new-event-images/image1.jpg" alt="" className="border-radius-8px w-100" />
</div>
<div className="w-60 overflow-hidden position-absolute right-minus-15px xs-right-15px xs-w-60 bottom-minus-50px" data-shadow-animation="true" data-animation-delay="250" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
<img src="images/new-event-images/image2.jpg" alt="" className="border-radius-8px w-100 box-shadow-quadruple-large" style={{maxHeight: "400px", objectFit: "cover"}} />
</div>
</div>
<div className="col-xl-5 col-lg-6 offset-lg-1" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-flex"><i className="bi bi-award fs-16 me-5px"></i>Global business model competition</span>
<h3 className="text-dark-gray fs-50 fw-700 ls-minus-2px">
            About Empresario
          </h3>
<p className="mb-40px sm-mb-25px">
            Empresario is the annual business model competition organized by Entrepreneurship Cell, IIT Kharagpur.
            Entrepreneurship Cell is searching for innovative and enterprising ideas through Empresario. Empresario'25
            provides a platform for budding entrepreneurs to get excellent professional mentorship from our experienced,
            varied, and distinguished mentor pool, and to showcase their ideas in front of Venture Capitalists, Angel
            Investors, and Industry Leaders.
          </p>

<div style={{display: "none"}} className="progress-bar-style-02">

<div className="progress mb-15px border-radius-50px fw-700 fs-11 lh-11 text-white bg-white">
<div className="progress-bar bg-gradient-flamingo-red-transparent m-0" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" aria-label="business">
<span className="progress-bar-percent text-flamingo">98%</span>
</div>
<div className="progress-bar-title text-uppercase">
                business growth
              </div>
</div>


<div className="progress border-radius-50px fw-700 fs-11 lh-11 text-white bg-white" style={{display: "none"}}>
<div className="progress-bar bg-gradient-base-color-transparent m-0" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" aria-label="technology">
<span className="progress-bar-percent text-base-color">85%</span>
</div>
<div className="progress-bar-title text-uppercase">
                new technology
              </div>
</div>

</div>
</div>
</div>
</div>
</section>



<style dangerouslySetInnerHTML={{ __html: `
    /* CRITICAL OVERRIDE: Global overflow masks destroy position: sticky */
    body {
      overflow-x: visible !important;
    }

    .sticky-tracks-wrapper {
      display: flex;
      max-width: 1200px;
      margin: 0px auto;
      padding: 0 40px;
      gap: 60px;
      /* Pre-requisite for sticky logic to operate on the child */
      align-items: flex-start;
      overflow: visible !important;
    }

    .sticky-tracks-left {
      flex: 0.8;
      position: -webkit-sticky;
      position: sticky;
      top: 250px;
      z-index: 10;
    }

    .sticky-tracks-title {
      font-size: 3.5rem;
      color: #1a1a2e;
      margin-bottom: 25px;
      font-weight: 700;
      letter-spacing: -2px;
    }

    .sticky-tracks-desc {
      color: #666;
      font-size: 1.15rem;
      line-height: 1.8;
    }

    .sticky-tracks-right {
      flex: 1.4;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .sticky-tracks-card {
      background: #fff;
      border: 1px solid #f2f3f5;
      border-radius: 12px;
      padding: 45px;
      box-shadow: 0 5px 30px rgba(0, 0, 0, 0.03);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .sticky-tracks-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    }

    .sticky-tracks-card h2 {
      color: #1a1a2e;
      font-size: 1.6rem;
      margin-bottom: 15px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    .sticky-tracks-card p {
      color: #6a6a8e;
      line-height: 1.8;
      margin-bottom: 0px;
    }

    .sticky-tracks-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 25px;
    }

    .sticky-tracks-pills span {
      background: #f8f9fc;
      color: #434c5e;
      padding: 8px 18px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid #edf1f7;
    }

    @media (max-width: 991px) {
      .sticky-tracks-wrapper {
        flex-direction: column;
        gap: 40px;
        padding: 0 15px;
      }

      .sticky-tracks-left {
        position: relative !important;
        top: 0 !important;
      }

      .sticky-tracks-card {
        padding: 30px;
      }
    }
  ` }} />
<section id="tracks" className="pt-5 pb-5 bg-white" style={{overflow: "visible", marginTop: "250px", marginBottom: "600px", position: "relative", zIndex: "50"}}>
<div className="sticky-tracks-wrapper">

<div className="sticky-tracks-left">
<h2 className="sticky-tracks-title">Tracks</h2>
<p className="sticky-tracks-desc">
          The tracks are designed to focus on specific industries or themes,
          allowing participants to tailor their ideas to particular areas of interest.
        </p>
</div>

<div className="sticky-tracks-right">

<div className="sticky-tracks-card">
<h2>Product and Services Track</h2>
<p>A Business Model that is function oriented and is aimed at providing sustainability of both consumption
            and production. Ideas/Prototypes based on meeting diverse consumer requirements or providing an
            innovative service.</p>
<div className="sticky-tracks-pills">
<span>Sustainability</span>
<span>Innovation</span>
<span>Services</span>
</div>
</div>

<div className="sticky-tracks-card">
<h2>Social Track</h2>
<p>A Business Model that focuses on adding value to the people at the bottom of the pyramid and/or help
            building a greener tomorrow. Empresario's very own track for enterprises that have a positive social or
            environmental impact.</p>
<div className="sticky-tracks-pills">
<span>Green Tomorrow</span>
<span>Social Impact</span>
<span>Value</span>
</div>
</div>

<div className="sticky-tracks-card">
<h2>IIT KGP Track</h2>
<p>Are you a student of IIT KGP? Got some high-potential ideas? This track is exclusively for innovative
            Business Models of IIT Kharagpur students. The majority of the team members (50% or more) should be from
            IIT Kharagpur.</p>
<div className="sticky-tracks-pills">
<span>Students</span>
<span>High-potential</span>
<span>Exclusive</span>
</div>
</div>

<div className="sticky-tracks-card">
<h2>AIML Track</h2>
<p>A business model that is intelligence-oriented and is aimed at enabling innovation, efficiency, and
            scalability through Artificial Intelligence and Machine Learning. Ideas/Prototypes based on solving
            evolving user needs.</p>
<div className="sticky-tracks-pills">
<span>AI</span>
<span>Machine Learning</span>
<span>Innovation</span>
</div>
</div>
</div>
</div>
</section>




<section style={{display: "none"}} className="pt-10 bg-very-light-gray">
<div className="container">
<div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 counter-style-04" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateX&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;:0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col last-paragraph-no-margin md-mb-50px text-center text-md-start">
<span className="fs-18 fw-600 d-block mb-5px text-dark-gray">Days of experience.</span>
<p className="w-90 lg-w-100 sm-ps-15 sm-pe-15">
            We have crafted beautiful and engaging web solutions.
          </p>
<div className="separator-line-1px bg-dark-gray w-90 mt-25px mb-25px opacity-2 sm-w-100"></div>
<h3 className="vertical-counter d-inline-flex alt-font text-dark-gray fw-800 ls-minus-2px mb-0" data-text="+" data-to="3053"></h3>
</div>


<div className="col last-paragraph-no-margin md-mb-50px text-center text-md-start">
<span className="fs-18 fw-600 d-block mb-5px text-dark-gray">Valuable happy clients.</span>
<p className="w-90 lg-w-100 sm-ps-15 sm-pe-15">
            We have crafted beautiful and engaging web solutions.
          </p>
<div className="separator-line-1px bg-dark-gray w-90 mt-25px mb-25px opacity-2 sm-w-100"></div>
<h3 className="vertical-counter d-inline-flex alt-font text-dark-gray fw-800 ls-minus-2px mb-0" data-text="+" data-to="1750"></h3>
</div>


<div className="col last-paragraph-no-margin sm-mb-50px text-center text-md-start">
<span className="fs-18 fw-600 d-block mb-5px text-dark-gray">Presence in countries.</span>
<p className="w-90 lg-w-100 sm-ps-15 sm-pe-15">
            We have crafted beautiful and engaging web solutions.
          </p>
<div className="separator-line-1px bg-dark-gray w-90 mt-25px mb-25px opacity-2 sm-w-100"></div>
<h3 className="vertical-counter d-inline-flex alt-font text-dark-gray fw-800 ls-minus-2px mb-0" data-text="+" data-to="50"></h3>
</div>


<div className="col last-paragraph-no-margin text-center text-md-start">
<span className="fs-18 fw-600 d-block mb-5px text-dark-gray">Worldwide projects.</span>
<p className="w-90 lg-w-100 sm-ps-15 sm-pe-15">
            We have crafted beautiful and engaging web solutions.
          </p>
<div className="separator-line-1px bg-dark-gray w-90 mt-25px mb-25px opacity-2 sm-w-100"></div>
<h3 className="vertical-counter d-inline-flex alt-font text-dark-gray fw-800 ls-minus-2px mb-0" data-text="+" data-to="856"></h3>
</div>

</div>
</div>
</section>

<style dangerouslySetInnerHTML={{ __html: `
    .spotlight-card {
      transition: all 0.3s ease-in-out !important;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
      position: relative;
      overflow: hidden;
    }

    .spotlight-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* Dynamic radial gradient using mouse coordinates */
      background: radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
          rgba(0, 115, 255, 0.25),
          transparent 60%);
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
      z-index: 0;
    }

    .spotlight-card:hover::before {
      opacity: 1;
    }

    .spotlight-card:hover {
      transform: translateY(-5px) !important;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
    }

    .spotlight-card>* {
      position: relative;
      z-index: 1;
    }
  ` }} />
<section id="incentives" className="big-section bg-white p-0" style={{marginTop: "600px", paddingTop: "100px", position: "relative", zIndex: "1"}}>

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


<section style={{display: "none"}} className="position-relative">
<div className="container">
<div className="row align-items-center mb-4" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<div className="col-xl-5 lg-mb-30px text-center text-xl-start">
<h3 className="text-dark-gray fw-700 mb-0 ls-minus-2px">
            Gallery
          </h3>
</div>
<div className="col-xl-7 tab-style-04 text-center text-xl-end">

<ul className="portfolio-filter nav nav-tabs justify-content-center justify-content-xl-end border-0 fw-500" style={{display: "none"}}>
<li className="nav active"><a data-filter="*" href="#">All</a></li>
<li className="nav">
<a data-filter=".selected" href="#">Selected</a>
</li>
<li className="nav">
<a data-filter=".digital" href="#">Digital</a>
</li>
<li className="nav">
<a data-filter=".branding" href="#">Branding</a>
</li>
<li className="nav"><a data-filter=".web" href="#">Web</a></li>
</ul>

</div>
</div>
<div className="row" data-anime="{  &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;:0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<div className="col-12 filter-content p-md-0">
<ul className="portfolio-modern portfolio-wrapper grid-loading grid grid-3col xxl-grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
<li className="grid-sizer"></li>

<li className="grid-item selected digital transition-inner-all">
<a href="#">
<div className="portfolio-box">
<div className="portfolio-image border-radius-4px">
<img src="images/ecell-logo(white).png" alt="" />
</div>
<div className="portfolio-hover box-shadow-extra-large">
<div className="bg-white d-flex align-items-center align-self-end text-start border-radius-4px ps-30px pe-30px pt-20px pb-20px lg-p-20px w-100">
<div className="me-auto">
<div className="fs-12 fw-500 text-medium-gray text-uppercase lh-24">
                          Branding
                        </div>
<div className="fw-700 text-dark-gray text-uppercase lh-initial">
                          Tailoring
                        </div>
</div>
<div className="ms-auto">
<i className="feather icon-feather-plus icon-extra-medium text-dark-gray lh-36"></i>
</div>
</div>
</div>
</div>
</a>
</li>


<li className="grid-item web branding transition-inner-all">
<a href="#">
<div className="portfolio-box">
<div className="portfolio-image border-radius-6px">
<img src="images/ecell-logo(white).png" alt="" />
</div>
<div className="portfolio-hover box-shadow-extra-large">
<div className="bg-white d-flex align-items-center align-self-end text-start border-radius-4px ps-30px pe-30px pt-20px pb-20px lg-p-20px w-100">
<div className="me-auto">
<div className="fs-12 fw-500 text-medium-gray text-uppercase lh-24">
                          Design
                        </div>
<div className="fw-700 text-dark-gray text-uppercase lh-initial">
                          Spanio
                        </div>
</div>
<div className="ms-auto">
<i className="feather icon-feather-plus icon-extra-medium text-dark-gray lh-36"></i>
</div>
</div>
</div>
</div>
</a>
</li>


<li className="grid-item web branding transition-inner-all">
<a href="#">
<div className="portfolio-box">
<div className="portfolio-image border-radius-6px">
<img src="images/ecell-logo(white).png" alt="" />
</div>
<div className="portfolio-hover box-shadow-extra-large">
<div className="bg-white d-flex align-items-center align-self-end text-start border-radius-4px ps-30px pe-30px pt-20px pb-20px lg-p-20px w-100">
<div className="me-auto">
<div className="fs-12 fw-500 text-medium-gray text-uppercase lh-24">
                          Branding
                        </div>
<div className="fw-700 text-dark-gray text-uppercase lh-initial">
                          Herbal
                        </div>
</div>
<div className="ms-auto">
<i className="feather icon-feather-plus icon-extra-medium text-dark-gray lh-36"></i>
</div>
</div>
</div>
</div>
</a>
</li>


<li className="grid-item selected digital transition-inner-all">
<a href="#">
<div className="portfolio-box">
<div className="portfolio-image border-radius-6px">
<img src="images/ecell-logo(white).png" alt="" />
</div>
<div className="portfolio-hover box-shadow-extra-large">
<div className="bg-white d-flex align-items-center align-self-end text-start border-radius-4px ps-30px pe-30px pt-20px pb-20px lg-p-20px w-100">
<div className="me-auto">
<div className="fs-12 fw-500 text-medium-gray text-uppercase lh-24">
                          Brochure
                        </div>
<div className="fw-700 text-dark-gray text-uppercase lh-initial">
                          Cropo
                        </div>
</div>
<div className="ms-auto">
<i className="feather icon-feather-plus icon-extra-medium text-dark-gray lh-36"></i>
</div>
</div>
</div>
</div>
</a>
</li>


<li className="grid-item selected branding transition-inner-all">
<a href="#">
<div className="portfolio-box">
<div className="portfolio-image border-radius-6px">
<img src="images/ecell-logo(white).png" alt="" />
</div>
<div className="portfolio-hover box-shadow-extra-large">
<div className="bg-white d-flex align-items-center align-self-end text-start border-radius-4px ps-30px pe-30px pt-20px pb-20px lg-p-20px w-100">
<div className="me-auto">
<div className="fs-12 fw-500 text-medium-gray text-uppercase lh-24">
                          Design
                        </div>
<div className="fw-700 text-dark-gray text-uppercase lh-initial">
                          Violator
                        </div>
</div>
<div className="ms-auto">
<i className="feather icon-feather-plus icon-extra-medium text-dark-gray lh-36"></i>
</div>
</div>
</div>
</div>
</a>
</li>


<li className="grid-item digital web transition-inner-all">
<a href="#">
<div className="portfolio-box">
<div className="portfolio-image border-radius-6px">
<img src="images/ecell-logo(white).png" alt="" />
</div>
<div className="portfolio-hover box-shadow-extra-large">
<div className="bg-white d-flex align-items-center align-self-end text-start border-radius-4px ps-30px pe-30px pt-20px pb-20px lg-p-20px w-100">
<div className="me-auto">
<div className="fs-12 fw-500 text-medium-gray text-uppercase lh-24">
                          Digital
                        </div>
<div className="fw-700 text-dark-gray text-uppercase lh-initial">
                          Pixflow
                        </div>
</div>
<div className="ms-auto">
<i className="feather icon-feather-plus icon-extra-medium text-dark-gray lh-36"></i>
</div>
</div>
</div>
</div>
</a>
</li>

</ul>
</div>
</div>
</div>
</section>


<section style={{display: "flex", justifyContent: "center", alignItems: "center"}} className="pt-0">
<div className="container background-no-repeat background-position-top" style={{backgroundImage: "url('images/demo-it-business-testimonial-bg.png')", display: "none", marginTop: "100px"}}>
<div className="row justify-content-center mb-2">
<div className="col-xxl-6 col-lg-8 col-md-9 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [0, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<h3 className="text-dark-gray fw-700 ls-minus-2px" style={{marginBottom: "50px"}}>
            Testimonial
          </h3>
</div>
</div>
<div className="row justify-content-center align-items-center mb-6 sm-mb-8">
<div className="col-xl-10 position-relative">
<div className="swiper magic-cursor testimonials-style-06" data-slider-options="{ &quot;loop&quot;: true, &quot;autoplay&quot;: { &quot;delay&quot;: 4000, &quot;disableOnInteraction&quot;: false }, &quot;keyboard&quot;: { &quot;enabled&quot;: true, &quot;onlyInViewport&quot;: true }, &quot;navigation&quot;: { &quot;nextEl&quot;: &quot;.swiper-button-next-nav&quot;, &quot;prevEl&quot;: &quot;.swiper-button-previous-nav&quot;, &quot;effect&quot;: &quot;fade&quot; } }">
<div className="swiper-wrapper">

<div className="swiper-slide">
<div className="row align-items-center justify-content-center">
<div className="col-8 col-md-4 col-sm-6 text-center md-mb-30px">
<img alt="" src="images/ecell-logo(white).png" />
</div>
<div className="col-lg-5 col-md-7 last-paragraph-no-margin text-center text-md-start">
<a href="#" className="mb-15px d-block"><img src="images/ecell-logo(white).png" className="h-35px" alt="" /></a>
<span className="mb-5px d-table fs-18 lh-30 fw-500 text-dark-gray">Participating in Empresario helped us
                      think critically about virtually every aspect of our startup. Right from our target market and its
                      size, our competitors to scalability of our product etc. This helped us to take a step back and
                      assess our startup with a level of detail one might have overlooked on daily basis. Empresario
                      helped us in Networking and build connections with the judges, investors and entrepreneurs,who at
                      later stages helped us a lot whenever we faced some problems.</span>
<span className="fs-15 text-uppercase fw-800 text-dark-gray ls-05px">SHUBHAM BALDAVA, Ticket
                      Jugaad</span>
</div>
</div>
</div>


<div className="swiper-slide">
<div className="row align-items-center justify-content-center">
<div className="col-8 col-md-4 col-sm-6 text-center md-mb-30px">
<img alt="" src="images/ecell-logo(white).png" />
</div>
<div className="col-lg-5 col-md-7 last-paragraph-no-margin text-center text-md-start">
<a href="#" className="mb-15px d-block"><img src="images/ecell-logo(white).png" className="h-35px" alt="" /></a>
<span className="mb-5px d-table fs-18 lh-30 fw-500 text-dark-gray">Mind blown, Empresario was the best
                      B-Plan competition out of the 8 we have been selected in. The judges asked critical questions and
                      made sure that it wasn't an easy process. After the competition and before the result, all the
                      judges interacted with us.The mentoring we received at the Microsoft campus was class apart and
                      gave us a US based perspective on how to run a business, besides an amazing opportunity to
                      network.</span>
<span className="fs-15 text-uppercase fw-800 text-dark-gray ls-05px">SHARYN POTTER, Soteria
                      Solutions</span>
</div>
</div>
</div>


<div className="swiper-slide">
<div className="row align-items-center justify-content-center">
<div className="col-8 col-md-4 col-sm-6 text-center md-mb-30px">
<img alt="" src="images/ecell-logo(white).png" />
</div>
<div className="col-lg-5 col-md-7 last-paragraph-no-margin text-center text-md-start">
<a href="#" className="mb-15px d-block"><img src="images/ecell-logo(white).png" className="h-35px" alt="" /></a>
<span className="mb-5px d-table fs-18 lh-30 fw-500 text-dark-gray">The platform that Empresario
                      provided, helped us make a refined and solid B-model making us think critically about various
                      aspects of business, ranging from technology it's applicability on a massive scale to distribution
                      channels, supply chain, sales teams, key associations etc with the help of a dedicated mentor.
                      Empresario also helped in connecting with the various potential investors, clients and other
                      start-ups, who could help us in growing at a relatively faster pace.</span>
<span className="fs-15 text-uppercase fw-800 text-dark-gray ls-05px">POONAM GUPTA, Alive Home</span>
</div>
</div>
</div>

</div>

<div className="swiper-button-previous-nav swiper-button-prev md-left-0px md-mb" style={{paddingBottom: "180px"}}>
<i className="feather icon-feather-arrow-left icon-extra-medium text-dark-gray"></i>
</div>
<div className="swiper-button-next-nav swiper-button-next md-right-0px" style={{paddingBottom: "180px"}}>
<i className="feather icon-feather-arrow-right icon-extra-medium text-dark-gray"></i>
</div>

</div>
</div>
</div>
<div className="row row-cols-1 row-cols-md-3 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [0, 0], &quot;perspective&quot;: [1200,1200], &quot;scale&quot;: [1.1, 1], &quot;rotateX&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 800, &quot;delay&quot;: 200, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }" style={{display: "none"}}>
<div className="col sm-mb-30px">
<div className="bg-white h-100 border-radius-6px text-center box-shadow-quadruple-large box-shadow-quadruple-large-hover">
<div className="pt-10 pb-10">
<img src="images/ecell-logo(white).png" className="h-40px md-h-35px sm-h-40px" alt="" />
</div>
<div className="border-top fs-16 p-15px lg-ps-25px lg-pe-25px md-ps-15px md-pe-15px last-paragraph-no-margin">
<p>
                Project management -
                <span className="fw-600 text-dark-gray">275% Growth</span>
</p>
</div>
</div>
</div>
<div className="col sm-mb-30px">
<div className="bg-white h-100 border-radius-6px text-center box-shadow-quadruple-large box-shadow-quadruple-large-hover">
<div className="pt-10 pb-10">
<img src="images/ecell-logo(white).png" className="h-40px md-h-35px sm-h-40px" alt="" />
</div>
<div className="border-top fs-16 border-1 border-color-extra-medium-gray p-15px last-paragraph-no-margin">
<p>
                Team management -
                <span className="fw-600 text-dark-gray">195% Growth</span>
</p>
</div>
</div>
</div>
<div className="col">
<div className="bg-white h-100 border-radius-6px text-center box-shadow-quadruple-large box-shadow-quadruple-large-hover">
<div className="pt-10 pb-10">
<img src="images/ecell-logo(white).png" className="h-40px md-h-35px sm-h-40px" alt="" />
</div>
<div className="border-top fs-16 border-1 border-color-extra-medium-gray p-15px last-paragraph-no-margin">
<p>
                Secure storage -
                <span className="fw-600 text-dark-gray">235% Growth</span>
</p>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="pt-0 overflow-hidden">
<h3 className="text-dark-gray fw-700 ls-minus-2px" style={{textAlign: "center", marginBottom: "50px"}}>Gallery</h3>
<div className="container-fluid p-0">
<div className="row align-items-center g-0">
<div className="col-12 position-relative swiper-dark-pagination" data-anime="{ &quot;translateX&quot;: [150, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 1200, &quot;delay&quot;: 100, &quot;staggervalue&quot;: 150, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<div className="swiper overflow-visible" data-slider-options="{
            &quot;slidesPerView&quot;: 1,
            &quot;spaceBetween&quot;: 40,
            &quot;centeredSlides&quot;: &quot;true&quot;,
            &quot;loop&quot;: true,
            &quot;autoplay&quot;: {
              &quot;delay&quot;: 1400,
              &quot;disableOnInteraction&quot;: false
            },
            &quot;pagination&quot;: {
              &quot;el&quot;: &quot;.swiper-pagination-bullets-01&quot;,
              &quot;clickable&quot;: true,
              &quot;dynamicBullets&quot;: false
            },
            &quot;keyboard&quot;: {
              &quot;enabled&quot;: true,
              &quot;onlyInViewport&quot;: true
            },
            &quot;breakpoints&quot;: {
              &quot;992&quot;: {
                &quot;slidesPerView&quot;: 1.8
              },
              &quot;768&quot;: {
                &quot;slidesPerView&quot;: 1.8
              },
              &quot;320&quot;: {
                &quot;slidesPerView&quot;: 1.3
              }
            },
            &quot;effect&quot;: &quot;slide&quot;
          }">
<div className="swiper-wrapper align-items-center">

<div className="swiper-slide">
<a href="images/event-images/event-image-3.jpg" data-group="lightbox-carousel" title="Event Image">
<img className="border-radius-6px w-100 gallery-crop-img" src="images/event-images/event-image-3.jpg" alt="" />
</a>
</div>


<div className="swiper-slide">
<a href="images/event-images/user4.jpg?v=3" data-group="lightbox-carousel" title="Gallery Image 4">
<img className="border-radius-6px w-100 gallery-crop-img" src="images/event-images/user4.jpg?v=3" alt="" />
</a>
</div>


<div className="swiper-slide">
<a href="images/event-images/event-image-7.jpg" data-group="lightbox-carousel" title="Event Image">
<img className="border-radius-6px w-100 gallery-crop-img" src="images/event-images/event-image-7.jpg" alt="" />
</a>
</div>


<div className="swiper-slide">
<a href="images/event-images/user1.jpg?v=3" data-group="lightbox-carousel" title="Gallery Image 1">
<img className="border-radius-6px w-100 gallery-crop-img" src="images/event-images/user1.jpg?v=3" alt="" />
</a>
</div>


<div className="swiper-slide">
<a href="images/event-images/user2.jpg?v=3" data-group="lightbox-carousel" title="Gallery Image 2">
<img className="border-radius-6px w-100 gallery-crop-img" src="images/event-images/user2.jpg?v=3" alt="" />
</a>
</div>


<div className="swiper-slide">
<a href="images/event-images/event-image-10.jpg" data-group="lightbox-carousel" title="Event Image">
<img className="border-radius-6px w-100 gallery-crop-img" src="images/event-images/event-image-10.jpg" alt="" />
</a>
</div>


<div className="swiper-slide">
<a href="images/event-images/user5.jpg?v=3" data-group="lightbox-carousel" title="Gallery Image 5">
<img className="border-radius-6px w-100 gallery-crop-img" src="images/event-images/user5.jpg?v=3" alt="" />
</a>
</div>


<div className="swiper-slide">
<a href="images/event-images/event-image-1.jpg" data-group="lightbox-carousel" title="Event Image">
<img className="border-radius-6px w-100 gallery-crop-img" src="images/event-images/event-image-1.jpg" alt="" />
</a>
</div>


<div className="swiper-slide">
<a href="images/event-images/user3.jpg?v=3" data-group="lightbox-carousel" title="Gallery Image 3">
<img className="border-radius-6px w-100 gallery-crop-img" src="images/event-images/user3.jpg?v=3" alt="" />
</a>
</div>


<div className="swiper-slide">
<a href="images/event-images/event-image-5.jpg" data-group="lightbox-carousel" title="Event Image">
<img className="border-radius-6px w-100 gallery-crop-img" src="images/event-images/event-image-5.jpg" alt="" />
</a>
</div>


<div className="swiper-slide">
<a href="images/event-images/event-image-2.jpg" data-group="lightbox-carousel" title="Event Image">
<img className="border-radius-6px w-100 gallery-crop-img" src="images/event-images/event-image-2.jpg" alt="" />
</a>
</div>

</div>
</div>

<div className="swiper-pagination swiper-pagination-clickable swiper-pagination-style-01 swiper-pagination-bullets-01 position-static mt-40px">
</div>

</div>
</div>
</div>
</section>


<section className="ps-5 pe-5 lg-ps-2 lg-pe-2" style={{marginTop: "-80px", display: "none"}}>
<h3 className="text-dark-gray fw-700 ls-minus-2px" style={{textAlign: "center", marginTop: "-20px", marginBottom: "50px"}}>
      Gallery</h3>
<div className="container-fluid">
<div className="row">
<div className="col">
<ul className="image-gallery-style-02 gallery-wrapper grid grid-4col xxl-grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large">
<li className="grid-sizer"></li>

<li className="grid-item transition-inner-all atropos" data-atropos="" data-atropos-perspective="1150">
<div className="atropos-scale">
<div className="atropos-rotate">
<div className="atropos-inner" data-atropos-offset="3">
<div className="gallery-box">
<a href="images/event-images/user1.jpg?v=2" data-group="lightbox-group-gallery-item-2" title="Gallery Image 1">
<div className="position-relative gallery-image bg-slate-blue">
<img src="images/event-images/user1.jpg?v=2" alt="" />
<div className="d-flex align-items-center justify-content-center position-absolute top-0px left-0px w-100 h-100 gallery-hover move-bottom-top">
<i className="bi bi-camera icon-medium text-white"></i>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</li>


<li className="grid-item transition-inner-all atropos" data-atropos="" data-atropos-perspective="1150">
<div className="atropos-scale">
<div className="atropos-rotate">
<div className="atropos-inner" data-atropos-offset="3">
<div className="gallery-box">
<a href="images/event-images/user2.jpg?v=2" data-group="lightbox-group-gallery-item-2" title="Gallery Image 2">
<div className="position-relative gallery-image bg-slate-blue">
<img src="images/event-images/user2.jpg?v=2" alt="" />
<div className="d-flex align-items-center justify-content-center position-absolute top-0px left-0px w-100 h-100 gallery-hover move-bottom-top">
<i className="bi bi-camera icon-medium text-white"></i>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</li>


<li className="grid-item transition-inner-all atropos" data-atropos="" data-atropos-perspective="1150">
<div className="atropos-scale">
<div className="atropos-rotate">
<div className="atropos-inner" data-atropos-offset="3">
<div className="gallery-box">
<a href="images/event-images/user3.jpg?v=2" data-group="lightbox-group-gallery-item-2" title="Gallery Image 3">
<div className="position-relative gallery-image bg-slate-blue">
<img src="images/event-images/user3.jpg?v=2" alt="" />
<div className="d-flex align-items-center justify-content-center position-absolute top-0px left-0px w-100 h-100 gallery-hover move-bottom-top">
<i className="bi bi-camera icon-medium text-white"></i>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</li>


<li className="grid-item transition-inner-all atropos" data-atropos="" data-atropos-perspective="1150">
<div className="atropos-scale">
<div className="atropos-rotate">
<div className="atropos-inner" data-atropos-offset="3">
<div className="gallery-box">
<a href="images/event-images/user4.jpg?v=2" data-group="lightbox-group-gallery-item-2" title="Gallery Image 4">
<div className="position-relative gallery-image bg-slate-blue">
<img src="images/event-images/user4.jpg?v=2" alt="" />
<div className="d-flex align-items-center justify-content-center position-absolute top-0px left-0px w-100 h-100 gallery-hover move-bottom-top">
<i className="bi bi-camera icon-medium text-white"></i>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</li>


<li className="grid-item transition-inner-all atropos" data-atropos="" data-atropos-perspective="1150">
<div className="atropos-scale">
<div className="atropos-rotate">
<div className="atropos-inner" data-atropos-offset="3">
<div className="gallery-box">
<a href="images/event-images/user5.jpg?v=2" data-group="lightbox-group-gallery-item-2" title="Gallery Image 5">
<div className="position-relative gallery-image bg-slate-blue">
<img src="images/event-images/user5.jpg?v=2" alt="" />
<div className="d-flex align-items-center justify-content-center position-absolute top-0px left-0px w-100 h-100 gallery-hover move-bottom-top">
<i className="bi bi-camera icon-medium text-white"></i>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</li>


<li className="grid-item transition-inner-all atropos" data-atropos="" data-atropos-perspective="1150">
<div className="atropos-scale">
<div className="atropos-rotate">
<div className="atropos-inner" data-atropos-offset="3">
<div className="gallery-box">
<a href="images/event-images/images (2).jpeg" data-group="lightbox-group-gallery-item-2" title="Lightbox gallery image title">
<div className="position-relative gallery-image bg-slate-blue">
<img src="images/event-images/images (2).jpeg" alt="" />
<div className="d-flex align-items-center justify-content-center position-absolute top-0px left-0px w-100 h-100 gallery-hover move-bottom-top">
<i className="bi bi-camera icon-medium text-white"></i>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</li>


<li className="grid-item transition-inner-all atropos" data-atropos="" data-atropos-perspective="1150">
<div className="atropos-scale">
<div className="atropos-rotate">
<div className="atropos-inner" data-atropos-offset="3">
<div className="gallery-box">
<a href="images/event-images/images (2).jpeg" data-group="lightbox-group-gallery-item-2" title="Lightbox gallery image title">
<div className="position-relative gallery-image bg-slate-blue">
<img src="images/event-images/images (2).jpeg" alt="" />
<div className="d-flex align-items-center justify-content-center position-absolute top-0px left-0px w-100 h-100 gallery-hover move-bottom-top">
<i className="bi bi-camera icon-medium text-white"></i>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</li>

<li className="grid-item transition-inner-all atropos" data-atropos="" data-atropos-perspective="1150">
<div className="atropos-scale">
<div className="atropos-rotate">
<div className="atropos-inner" data-atropos-offset="3">
<div className="gallery-box">
<a href="images/event-images/images (2).jpeg" data-group="lightbox-group-gallery-item-2" title="Lightbox gallery image title">
<div className="position-relative gallery-image bg-slate-blue">
<img src="images/event-images/images (2).jpeg" alt="" />
<div className="d-flex align-items-center justify-content-center position-absolute top-0px left-0px w-100 h-100 gallery-hover move-bottom-top">
<i className="bi bi-camera icon-medium text-white"></i>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</li>

</ul>
</div>
</div>
</div>
</section>


<section className="cover-background one-third-screen sm-h-500px pb-0 position-relative" style={{backgroundImage: "url(images/event-images/images\ \(4\).jpeg)", backgroundColor: "#252840"}}>
<div className="opacity-extra-medium bg-dark-gray"></div>
<div className="container h-100">
<div className="row align-items-center justify-content-center h-100">
<div className="col-xl-8 col-lg-10 mb-9 md-mb-15 position-relative z-index-1 text-center d-flex flex-wrap align-items-center justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<span className="ps-25px pe-25px pt-5px pb-5px mb-25px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-inline-flex align-items-center text-start sm-lh-20"><i className="bi bi-megaphone text-white d-inline-block align-middle icon-small me-10px"></i>
            let's build an enterprising india</span>
<h1 className="text-white fw-600 ls-minus-2px mb-50px">
            Your chance to win prizes worth 1 CR+
          </h1>
<a href="/registration?v=5" className="btn btn-extra-large btn-switch-text btn-gradient-purple-pink btn-rounded me-10px">
<span>
<span className="btn-double-text" data-text="Register Now">Register Now</span>
<span><i className="fa-solid fa-arrow-right"></i></span>
</span>
</a>
</div>
</div>
</div>
<div className="shape-image-animation p-0 w-100 bottom-minus-40px xl-bottom-0px d-none d-md-block">
<svg xmlns="http://www.w3.org/2000/svg" widht="3000" height="400" viewBox="0 180 2500 200" fill="#ffffff">
<path className="st1" d="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250">
<animate attributeName="d" dur="5s" values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250" repeatCount="indefinite"></animate>
</path>
</svg>
</div>
</section>

<section className="py-5 bg-very-light-gray">
<div className="container pt-5 pb-5">
<div className="row justify-content-center mb-5">
<div className="col-12 text-center">
<h2 className="fw-700 text-dark-gray mb-0">Contact Us</h2>
</div>
</div>
<div className="row justify-content-center gap-4">

<div className="col-lg-5 col-md-6 mb-4">
<div className="bg-white border-radius-10px p-5 text-center h-100" style={{boxShadow: "0 10px 40px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.03)"}}>
<div className="mb-4">
<img src="images/people/jateen.jpg" alt="Jateen Ramteke" className="rounded-circle" style={{width: "150px", height: "150px", objectFit: "cover"}} />
</div>
<h4 className="text-dark-gray fw-600 mb-1 fs-22" style={{fontFamily: "'Plus Jakarta Sans', sans-serif"}}>Jateen Ramteke</h4>
<p className="text-medium-gray mb-3 pb-2" style={{fontSize: "15px"}}>Senior Manager</p>
<p className="text-medium-gray mb-4" style={{fontSize: "15px", lineHeight: "1.6"}}>Competitions and
              Associations<br />Social Media Marketing</p>
<p className="mb-1" style={{fontSize: "15px"}}><a href="mailto:ramteke.jateen@ecell-iitkgp.in" className="text-dark-gray text-decoration-none hover-text-base-color">ramteke.jateen@ecell-iitkgp.in</a></p>
<p className="mb-0" style={{fontSize: "15px", color: "#718096"}}>+91 87930 13675</p>
</div>
</div>

<div className="col-lg-5 col-md-6 mb-4">
<div className="bg-white border-radius-10px p-5 text-center h-100" style={{boxShadow: "0 10px 40px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.03)"}}>
<div className="mb-4">
<img src="images/people/devang.jpg" alt="Devang Parmar" className="rounded-circle" style={{width: "150px", height: "150px", objectFit: "cover"}} />
</div>
<h4 className="text-dark-gray fw-600 mb-1 fs-22" style={{fontFamily: "'Plus Jakarta Sans', sans-serif"}}>Devang Parmar</h4>
<p className="text-medium-gray mb-3 pb-2" style={{fontSize: "15px"}}>Senior Manager</p>
<p className="text-medium-gray mb-4" style={{fontSize: "15px", lineHeight: "1.6"}}>Competitions and
              Associations<br />Startups and Alumni Relations</p>
<p className="mb-1" style={{fontSize: "15px"}}><a href="mailto:parmar.devang@ecell-iitkgp.in" className="text-dark-gray text-decoration-none hover-text-base-color">parmar.devang@ecell-iitkgp.in</a></p>
<p className="mb-0" style={{fontSize: "15px", color: "#718096"}}>+91 8291149407</p>
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
