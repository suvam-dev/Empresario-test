"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>



<Navbar />


<section className="pt-0 hero-section-container ipad-top-space-margin sm-pb-0" style={{backgroundColor: "#F8F9FA"}}>
<div className="hero-bg-blur"></div>
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
<span className="ps-25px pe-25px pt-5px pb-5px mb-15px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-flex"><i className="bi bi-megaphone text-white icon-small me-10px"></i>Meet Our Associations</span>
<h1 className="mb-20px text-white fw-600 ls-minus-1px">Associations</h1>
</div>
</div>
</div>
</section>


<section className="background-position-center-top sm-background-image-none" style={{backgroundImage: "none", backgroundColor: "#F0F2F8", marginTop: "-100px", display: "none"}}>
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


<section className="position-relative" style={{backgroundColor: "#F0F2F8"}}>
<div className="container" style={{marginTop: "-30px"}}>
<div className="row">
<div className="col tab-style-01">
<ul className="nav nav-tabs justify-content-center border-0 text-center fs-18 alt-font fw-600 mb-3">
<li className="nav-item">
<a className="nav-link active" data-bs-toggle="tab" href="#tab_sec2" style={{marginTop: "10px"}}>Partners</a>
</li>
<li className="nav-item">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec1" style={{marginTop: "10px"}}>Associations</a>
</li>
<li className="nav-item">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec3" style={{marginTop: "10px"}}>Outreach</a>
</li>
<li className="nav-item">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec4" style={{marginTop: "10px"}}>Incubation Partners</a>
</li>
</ul>
<div className="tab-content">


<div className="tab-pane fade in active show" id="tab_sec2">
<div className="row justify-content-center align-items-center">
<div className="container">
<div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center" id="tab2-container">

</div>
</div>
</div>
</div>

<div className="tab-pane fade in" id="tab_sec1">
<div className="row justify-content-center align-items-center">
<div className="container">
<div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center" id="tab1-container">

</div>
</div>
</div>
</div>

<div className="tab-pane fade in" id="tab_sec3">
<div className="row justify-content-center align-items-center">
<div className="container">
<div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center" id="tab3-container">

</div>
</div>
</div>
</div>

<div className="tab-pane fade in" id="tab_sec4">
<div className="row justify-content-center align-items-center">
<div className="container">
<div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center" id="tab4-container">

</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</section>


<Footer />










    </>
  );
}
