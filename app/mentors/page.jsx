"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>



<Navbar />


<section className="pt-0 hero-section-container ipad-top-space-margin sm-pb-0" style={{backgroundColor: "#F0F2F8"}}>
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
<span className="ps-25px pe-25px pt-5px pb-5px mb-15px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-flex"><i className="bi bi-megaphone text-white icon-small me-10px"></i>Meet our rich pool of mentors</span>
<h1 className="mb-20px text-white fw-600 ls-minus-1px">Mentors</h1>
</div>
</div>
</div>
</section>

<section className="bg-very-light-gray position-relative" data-parallax-background-ratio="0.5" style={{backgroundImage: "url('/images/bg.jpg')", marginTop: "-30px"}}>
<div className="opacity-extra-medium"></div>
<div className="container position-relative z-index-1">
<h1 style={{textAlign: "center", /* centers the heading */
            fontFamily: "'Arial', sans-serif", /* changes font */
            fontSize: "60px", /* changes size */
            fontWeight: "bold", /* makes it bold */
            color: "#333"}}>
        Mentors
      </h1>

<div className="col tab-style-01 mb-5">
<ul className="nav nav-tabs justify-content-center border-0 text-center fs-18 alt-font fw-600 mb-3">
<li className="nav-item">
<a className="nav-link active" data-bs-toggle="tab" href="#tab_2026">2026 Mentors</a>
</li>
<li className="nav-item">
<a className="nav-link" data-bs-toggle="tab" href="#tab_previous">Previous Year Mentors</a>
</li>
</ul>
</div>

<div className="tab-content">

<div className="tab-pane fade in active show" id="tab_2026">
<div className="row row-cols-1 row-cols-xl-3 row-cols-lg-3 row-cols-sm-2 justify-content-center" id="mentorContainer2026">

</div>
</div>

<div className="tab-pane fade" id="tab_previous">
<div className="row row-cols-1 row-cols-xl-3 row-cols-lg-3 row-cols-sm-2 justify-content-center" id="mentorContainerPrevious">

</div>
</div>
</div>
</div>
</section>

<Footer />

    </>
  );
}
