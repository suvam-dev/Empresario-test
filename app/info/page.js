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
<a href="/info" className="nav-link">About <i className="dropdown-toggle" style={{marginLeft: "10px"}}></i> </a>
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
<a href="/media" className="nav-link">Media</a>
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
<div className="col-12 col-lg-6 col-md-10 position-relative text-center page-title-extra-large d-flex flex-wrap flex-column align-items-center justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<span className="ps-25px pe-25px pt-5px pb-5px mb-15px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-flex"><i className="bi bi-megaphone text-white icon-small me-10px"></i>Learn more about empresario</span>
<h1 className="mb-20px text-white fw-600 ls-minus-1px">Info</h1>
</div>
</div>
</div>
</section>


<section className="position-relative" style={{backgroundColor: "#F8F9FA", paddingTop: "40px", paddingBottom: "40px"}}>
<div className="container">
<div className="row">
<div className="col tab-style-01">
<ul className="nav nav-tabs justify-content-center border-0 text-center fs-18 alt-font fw-600">
<li className="nav-item my-1">
<a className="nav-link active" data-bs-toggle="tab" href="#tab_sec1" style={{minWidth: "200px"}}>Structure</a>
</li>
<li className="nav-item my-1">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec2" style={{minWidth: "200px"}}>Timeline</a>
</li>
<li className="nav-item my-1">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec3" style={{minWidth: "200px"}}>Instructions</a>
</li>
<li className="nav-item my-1">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec4" style={{minWidth: "200px"}}>FAQs</a>
</li>
</ul>
<div className="tab-content">

<div className="tab-pane fade in active show" id="tab_sec1">
<div className="row justify-content-center align-items-center">

<div className="container" style={{marginTop: "50px"}}>
<div className="bg-dark-slate-blue border-radius-6px p-8 md-p-6 sm-p-10 position-relative overflow-hidden" style={{backgroundColor: "white"}}>
<div className="row justify-content-center mb-5">
<div className="col-lg-8 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
</div>
</div>
<div className="row justify-content-center">
<style dangerouslySetInnerHTML={{ __html: `
        .timeline-container {
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
            padding: 80px 0;
            overflow: hidden;
        }
        .timeline-line {
            position: absolute;
            top: 130px; 
            bottom: 130px; 
            left: 50%;
            width: 2px;
            background: #e0e0e0;
            transform: translateX(-50%);
            z-index: 0;
        }
        .timeline-progress {
            position: absolute;
            top: 130px;
            left: 50%;
            width: 2px;
            background: #1E3A8A;
            transform: translateX(-50%);
            z-index: 1;
            height: 0px; 
        }
        .timeline-ball {
            position: absolute;
            top: 130px; 
            left: 50%;
            width: 28px;
            height: 28px;
            background: #1E3A8A;
            border: 5px solid #ffffff;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            z-index: 20;
            transition: top 0.1s ease-out;
            box-shadow: 0 0 10px rgba(30, 58, 138, 0.4);
        }
        .timeline-item {
            margin-bottom: 100px;
            position: relative;
            z-index: 2;
        }
        .timeline-item:last-child {
            margin-bottom: 0;
        }
        .timeline-number {
            font-size: 70px;
            font-style: italic;
            font-weight: 700;
            color: #1E3A8A; 
            line-height: 0.8;
            margin-right: 25px;
            font-family: inherit; 
        }
        .timeline-h {
            font-size: 26px;
            font-weight: 700;
            color: #1E2033;
            margin-bottom: 15px;
            letter-spacing: -0.5px;
            font-family: inherit;
        }
        .timeline-p {
            color: #6B7280;
            margin-bottom: 0;
            font-size: 16px;
            line-height: 1.6;
        }
        @media (max-width: 767px) {
            .timeline-line, .timeline-progress, .timeline-ball {
                left: 30px;
            }
            .timeline-item .col-md-6.pe-md-5, .timeline-item .col-md-6.ps-md-5 {
                padding-left: 70px !important;
                padding-right: 20px !important;
            }
            .timeline-item .d-flex.justify-content-end {
                justify-content: flex-start !important;
            }
        }
    ` }} />
<div className="col-12">
<div className="timeline-container" id="customTimeline">
<div className="timeline-line" id="timelineTrack"></div>
<div className="timeline-progress" id="timelineProgress"></div>
<div className="timeline-ball" id="ball-1"></div>
<div className="timeline-ball" id="ball-2"></div>
<div className="timeline-ball" id="ball-3"></div>
<div className="timeline-ball" id="ball-4"></div>
<div className="timeline-ball" id="ball-5"></div>
<div className="timeline-ball" id="ball-6"></div>

<div className="row timeline-item align-items-center" id="item-1">
<div className="col-md-6 pe-md-5">
<div className="d-flex justify-content-end text-start">
<div className="d-flex" style={{maxWidth: "450px"}}>
<div className="timeline-number alt-font">1</div>
<div>
<h3 className="timeline-h alt-font">Online Form Submission</h3>
<p className="timeline-p">Register for Empresario 2026 and complete the initial questionnaire to begin Round 1 of the competition.</p>
</div>
</div>
</div>
</div>
<div className="col-md-6 d-none d-md-block"></div>
<div className="reference-point position-absolute top-50 start-50 translate-middle w-0 h-0" style={{zIndex: "1"}} id="point-1"></div>
</div>

<div className="row timeline-item align-items-center" id="item-2">
<div className="col-md-6 d-none d-md-block"></div>
<div className="col-md-6 ps-md-5 text-start">
<div className="d-flex" style={{maxWidth: "450px"}}>
<div className="timeline-number alt-font">2</div>
<div>
<h3 className="timeline-h alt-font">Early Bird Registration</h3>
<p className="timeline-p">Early applicants receive exclusive benefits like extended online mentorship, giving them a head start in refining their startup business models.</p>
</div>
</div>
</div>
<div className="reference-point position-absolute top-50 start-50 translate-middle w-0 h-0" style={{zIndex: "1"}} id="point-2"></div>
</div>

<div className="row timeline-item align-items-center" id="item-3">
<div className="col-md-6 pe-md-5">
<div className="d-flex justify-content-end text-start">
<div className="d-flex" style={{maxWidth: "450px"}}>
<div className="timeline-number alt-font">3</div>
<div>
<h3 className="timeline-h alt-font">Regular Registration</h3>
<p className="timeline-p">Teams registering after the early bird deadline can still participate and access all key phases of Empresario's startup competition.</p>
</div>
</div>
</div>
</div>
<div className="col-md-6 d-none d-md-block"></div>
<div className="reference-point position-absolute top-50 start-50 translate-middle w-0 h-0" style={{zIndex: "1"}} id="point-3"></div>
</div>

<div className="row timeline-item align-items-center" id="item-4">
<div className="col-md-6 d-none d-md-block"></div>
<div className="col-md-6 ps-md-5 text-start">
<div className="d-flex" style={{maxWidth: "450px"}}>
<div className="timeline-number alt-font">4</div>
<div>
<h3 className="timeline-h alt-font">Mentorship</h3>
<p className="timeline-p">Shortlisted startups will receive personalized mentorship from industry experts to help enhance and polish their business ideas.</p>
</div>
</div>
</div>
<div className="reference-point position-absolute top-50 start-50 translate-middle w-0 h-0" style={{zIndex: "1"}} id="point-4"></div>
</div>

<div className="row timeline-item align-items-center" id="item-5">
<div className="col-md-6 pe-md-5">
<div className="d-flex justify-content-end text-start">
<div className="d-flex" style={{maxWidth: "450px"}}>
<div className="timeline-number alt-font">5</div>
<div>
<h3 className="timeline-h alt-font">Final Submission</h3>
<p className="timeline-p">After the mentorship phase, teams must submit their final pitch decks, reflecting the improved and validated business model.</p>
</div>
</div>
</div>
</div>
<div className="col-md-6 d-none d-md-block"></div>
<div className="reference-point position-absolute top-50 start-50 translate-middle w-0 h-0" style={{zIndex: "1"}} id="point-5"></div>
</div>

<div className="row timeline-item align-items-center" id="item-6">
<div className="col-md-6 d-none d-md-block"></div>
<div className="col-md-6 ps-md-5 text-start">
<div className="d-flex" style={{maxWidth: "450px"}}>
<div className="timeline-number alt-font">6</div>
<div>
<h3 className="timeline-h alt-font">Grand Finale</h3>
<p className="timeline-p">Top teams will pitch their startups live to a panel of VCs, angel investors, and business leaders at the finale in Kolkata.</p>
</div>
</div>
</div>
<div className="reference-point position-absolute top-50 start-50 translate-middle w-0 h-0" style={{zIndex: "1"}} id="point-6"></div>
</div>
</div>
</div>
</div>

</div>
</div>

</div>
</div>


<div className="tab-pane fade in" id="tab_sec2">
<div className="row justify-content-center align-items-center">

<div className="container bg-dark-slate-blue border-radius-6px p-8 md-p-6 sm-p-10 position-relative overflow-hidden" style={{backgroundColor: "white", marginTop: "50px"}}>
<div className="row mb-7 sm-mb-50px">
<h2 className="fw-600" style={{textAlign: "center", color: "#1E2033"}}>Timeline</h2>
</div>
<div className="row mb-6 sm-mb-30px">
<div className="col-12" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-transparent-white-light position-relative">
<div className="col-md-1 text-start text-md-center sm-mb-20px">
<i className="fa-regular fa-calendar-days" style={{marginRight: "10px", marginLeft: "4px", transform: "scale(1.2)", color: "#5A8503"}}></i>
<span className="fs-18 alt-font fw-600" style={{color: "#1E2033"}}>21/07/25</span>
</div>
<div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
<span className="fw-500 fs-30" style={{color: "#1E2033"}}>Empresario launches</span>
</div>
<div className="col-md-5 last-paragraph-no-margin">
<p>The official launch of Empresario. A significant milestone marking the beginning of the journey for aspiring entrepreneurs.</p>
</div>
</div>

<div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-transparent-white-light position-relative">
<div className="col-md-1 text-start text-md-center sm-mb-20px">
<i className="fa-regular fa-calendar-days" style={{marginRight: "10px", marginLeft: "4px", transform: "scale(1.2)", color: "#5A8503"}}></i>
<span className="fs-18 alt-font fw-600" style={{color: "#1E2033"}}>14/09/25</span>
</div>
<div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
<span className="fw-500 fs-30" style={{color: "#1E2033"}}>Early Bird Deadline</span>
</div>
<div className="col-md-5 last-paragraph-no-margin">
<p>The last date for early bird registrations. Participants who register by this deadline benefit from early exposure and additional opportunities.</p>
</div>
</div>

<div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-transparent-white-light position-relative">
<div className="col-md-1 text-start text-md-center sm-mb-20px">
<i className="fa-regular fa-calendar-days" style={{marginRight: "10px", marginLeft: "4px", transform: "scale(1.2)", color: "#5A8503"}}></i>
<span className="fs-18 alt-font fw-600" style={{color: "#1E2033"}}>30/9/25</span>
</div>
<div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
<span className="fw-500 fs-30" style={{color: "#1E2033"}}>Early Bird Result Declaration</span>
</div>
<div className="col-md-5 last-paragraph-no-margin">
<p>Announcement of the semi-finalists from the early bird registrations. These selected teams will move forward in the competition, refining their ideas for the next rounds.</p>
</div>
</div>

<div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-transparent-white-light position-relative">
<div className="col-md-1 text-start text-md-center sm-mb-20px">
<i className="fa-regular fa-calendar-days" style={{marginRight: "10px", marginLeft: "4px", transform: "scale(1.2)", color: "#5A8503"}}></i>
<span className="fs-18 alt-font fw-600" style={{color: "#1E2033"}}>19/10/25</span>
</div>
<div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
<span className="fw-500 fs-30" style={{color: "#1E2033"}}>Regular Deadline</span>
</div>
<div className="col-md-5 last-paragraph-no-margin">
<p>Mentoring sessions for early bird semi-finalists commence, providing valuable guidance from experienced mentors. This stage helps participants enhance their business models and pitch presentations.</p>
</div>
</div>

<div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-transparent-white-light position-relative">
<div className="col-md-1 text-start text-md-center sm-mb-20px">
<i className="fa-regular fa-calendar-days" style={{marginRight: "10px", marginLeft: "4px", transform: "scale(1.2)", color: "#5A8503"}}></i>
<span className="fs-18 alt-font fw-600" style={{color: "#1E2033"}}>05/11/25</span>
</div>
<div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
<span className="fw-500 fs-30" style={{color: "#1E2033"}}>Regular Result Declaration</span>
</div>
<div className="col-md-5 last-paragraph-no-margin">
<p>The final deadline for regular registrations. This marks the last chance for teams to enter the competition and strive for a spot in the semi-finals.</p>
</div>
</div>

<div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-transparent-white-light position-relative">
<div className="col-md-1 text-start text-md-center sm-mb-20px">
<i className="fa-regular fa-calendar-days" style={{marginRight: "10px", marginLeft: "4px", transform: "scale(1.2)", color: "#5A8503"}}></i>
<span className="fs-18 alt-font fw-600" style={{color: "#1E2033"}}>20/12/25</span>
</div>
<div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
<span className="fw-500 fs-30" style={{color: "#1E2033"}}>Final submission</span>
</div>
<div className="col-md-5 last-paragraph-no-margin">
<p>The deadline for final submissions. All teams must submit their refined business models and presentations for evaluation to determine the finalists.</p>
</div>
</div>

<div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-transparent-white-light position-relative">
<div className="col-md-1 text-start text-md-center sm-mb-20px">
<i className="fa-regular fa-calendar-days" style={{marginRight: "10px", marginLeft: "4px", transform: "scale(1.2)", color: "#5A8503"}}></i>
<span className="fs-18 alt-font fw-600" style={{color: "#1E2033"}}>10/01/26</span>
</div>
<div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
<span className="fw-500 fs-30" style={{color: "#1E2033"}}>Finalists announcement</span>
</div>
<div className="col-md-5 last-paragraph-no-margin">
<p>The finalists are announced, giving the selected teams the opportunity to pitch their business models in the grand finale and compete for top prizes.</p>
</div>
</div>

<div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-transparent-white-light position-relative">
<div className="col-md-1 text-start text-md-center sm-mb-20px">
<i className="fa-regular fa-calendar-days" style={{marginRight: "10px", marginLeft: "4px", transform: "scale(1.2)", color: "#5A8503"}}></i>
<span className="fs-18 alt-font fw-600" style={{color: "#1E2033"}}>7/02/25</span>
</div>
<div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
<span className="fw-500 fs-30" style={{color: "#1E2033"}}>Grand Finale</span>
</div>
<div className="col-md-5 last-paragraph-no-margin">
<p>The grand finals will be held in Kolkata. Finalists will present their business models to a panel of judges.</p>
</div>
</div>
</div>
</div>
<div className="position-absolute top-5px ls-minus-6px left-0px w-100 text-center" data-bottom-top="transform: translate3d(380px, 0px, 0px);" data-top-bottom="transform: translate3d(-380px, 0px, 0px);">
<div className="fs-200 md-fs-170 xs-fs-110 fw-700 opacity-1">Timeline</div>
</div>
</div>

</div>
</div>


<div className="tab-pane fade in" id="tab_sec3">
<div className="row justify-content-center align-items-center bg-dark-slate-blue border-radius-6px p-8 md-p-6 sm-p-10 position-relative overflow-hidden" style={{backgroundColor: "white", marginTop: "50px"}}>
<div className="info-rules">
<h3 className="fw-600 ls-minus-1px z-index-1 position-relative" style={{color: "#1E2033", textAlign: "center"}}>Rules</h3>
<ol>
<li>A team may consist of a minimum of 1 or a maximum of 5 members.</li>
<li>Ventures must not involve a buyout, an expansion of an existing company, a real estate syndication, a tax shelter, a franchise, a licensing agreement for distribution in a different geographical area, or a spin-out from an existing corporation.</li>
<li>There is no restriction on any individual's participation. Anyone, from students to working professionals across the world with an idea, a product or service, or even an operating startup, can participate.</li>
</ol>
</div>
<div className="info-terms" style={{marginTop: "50px"}}>
<h3 className="fw-600 ls-minus-1px z-index-1 position-relative" style={{color: "#1E2033", textAlign: "center", marginBottom: "25px"}}>Terms and conditions</h3>
<div>
<p className="z-index-1 position-relative" style={{color: "#1E2033"}}>By registering for this competition, it shall be deemed that each individual of the participating team has agreed to be bound by the following terms and conditions:</p>
<ol>
<li>By registering to participate in Empresario, each participating team agrees to allow Entrepreneurship Cell, IIT Kharagpur to use their names, images and information regarding the team's business, and prize information for publicity and marketing efforts throughout the world. Each participating team must agree to accept that their registration form and other entries will not be returned to them, and accept that their personal data will be available for information and statistical purposes.</li>
<br />
<li>The participating team represents that Intellectual Property in the Business Plan does not infringe upon the intellectual property or any other legal or moral right of any person or entity.</li>
<br />
<li>Entrepreneurship Cell, IIT Kharagpur reserves the right to disqualify or prohibit from participating in Empresario any team that makes a submission that, in the sole discretion of Entrepreneurship Cell, IIT Kharagpur does not confirm with the Eligibility Criteria or does not comply with these Terms & Conditions and/ or the Competition Rules.</li>
<br />
<li>By entering the Competition, each team and its individual members agree to accept as final any decisions of The Entrepreneurship Cell, IIT Kharagpur including determination of the winners of Empresario.</li>
<br />
<li>Entrepreneurship Cell, IIT Kharagpur shall have the discretion to initiate appropriate action against participating teams including individuals of such participating teams in case of any losses or damages arising from violation of the Eligibility Criteria, Competition Rules and the Terms & Conditions.</li>
</ol>
</div>
</div>
</div>
</div>


<div className="tab-pane fade in" id="tab_sec4">
<div className="row justify-content-center align-items-center">

<div className="accordion accordion-style-01" id="accordion-style-01" data-active-icon="fa-angle-down" data-inactive-icon="fa-angle-right" style={{marginTop: "50px"}}>

<div className="accordion-item bg-white active-accordion">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-01" aria-expanded="true" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                What is Empresario?<span><i className="fa-solid fa-angle-down icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-01" className="accordion-collapse collapse show" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>
                                  Empresario is a premier business model competition that provides a platform for aspiring entrepreneurs to showcase their innovative ideas. It is designed to help participants refine their business concepts, receive mentorship from industry experts, and compete for top prizes.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-02" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                Who can participate in Empresario?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-02" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>Anyone with an innovative idea, product, service, or even an operating startup can participate. The competition is open to students, working professionals, and entrepreneurs from across the globe.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-03" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                Is there a registration fee to participate in Empresario?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-03" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>No, there is no fee for registration. Participation in Empresario is completely free.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-04" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                How do I register for Empresario?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-04" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>You can register for Empresario through our official website. Simply fill out the registration form with the required details, and you'll be entered into the competition.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-05" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                Can I participate as part of a team?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-05" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>Yes, you can participate as part of a team. A team can consist of a minimum of 1 and a maximum of 5 members.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-06" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                What are the benefits of participating in Empresario?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-06" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>Participants gain exposure to potential investors, mentorship from industry experts, and the opportunity to refine their business models. Finalists have the chance to present their ideas in front of a prestigious panel of judges and compete for top prizes.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-07" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                What kind of ideas or ventures can be submitted?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-07" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>You can submit any innovative idea, product, or service across various domains. However, ventures cannot be a buyout, an expansion of an existing company, a real estate syndication, a tax shelter, a franchise, a licensing agreement for distribution in a different geographical area, or a spin-out from an existing corporation.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-08" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                How will my submission be evaluated?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-08" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>Submissions will be evaluated based on criteria such as innovation, feasibility, market potential, and overall impact. The evaluation process includes preliminary rounds, followed by mentoring and final presentations for those who advance to the later stages.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-09" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                What happens if my team is selected as a semi-finalist?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-09" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>If your team is selected as a semi-finalist, you will receive mentorship from industry experts to help you refine your business model and prepare for the next stage of the competition.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-11" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                Where and when will the grand finale take place?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-11" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>The grand finale will take place in Kolkata on 1th February 2023 (tentative). Finalists will present their business models to a panel of judges and an audience.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-12" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                How can I prepare for the competition?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-12" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>To prepare for the competition, we recommend thoroughly developing your business model, conducting market research, and being ready to articulate your idea clearly. Take advantage of the mentoring sessions provided to semi-finalists to refine your concept further.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-13" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                Who will be the judges and mentors for the competition?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-13" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>The judges and mentors for Empresario are esteemed industry professionals, successful entrepreneurs, and investors who bring a wealth of experience and knowledge to the competition.
                                </p>
</div>
</div>
</div>


<div className="accordion-item bg-white">
<div className="accordion-header">
<a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-01-14" aria-expanded="false" data-bs-parent="#accordion-style-01">
<div className="accordion-title position-relative fs-18 d-flex align-items-center pe-20px text-dark-gray fw-600 alt-font mb-0">
                                How will I be informed about my progress in the competition?<span><i className="fa-solid fa-angle-right icon-small"></i></span>
</div>
</a>
</div>
<div id="accordion-style-01-14" className="accordion-collapse collapse" data-bs-parent="#accordion-style-01">
<div className="accordion-body last-paragraph-no-margin">
<p>Participants will be informed about their progress via email and updates on the official website. Semi-finalists and finalists will receive specific instructions and notifications regarding the next steps.
                                </p>
</div>
</div>
</div>

</div>
</div>
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
