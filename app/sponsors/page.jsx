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


<section className="pt-0 hero-section-container ipad-top-space-margin sm-pb-0" >
<div className="hero-bg-blur"></div>
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
<img src="/images/sundaram finance.png" className="h-100px" alt="Sundaram Finance" style={{objectFit: "contain"}} loading="lazy" />
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
<img src="/images/Unicorn India Ventures.png" className="h-100px" alt="Unicorn India Ventures" style={{objectFit: "contain"}} loading="lazy" />
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
<img src="/images/MONAD.png" className="h-100px" alt="MONAD" style={{objectFit: "contain"}} loading="lazy" />
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
<img src="/images/unstop.png" className="h-100px" alt="Unstop" style={{objectFit: "contain"}} loading="lazy" />
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
<img src="/images/IDFC FIRST Bank.png" className="h-100px" alt="IDFC FIRST Bank" style={{objectFit: "contain"}} loading="lazy" />
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
<img src="/images/Odoo.png" className="h-100px" alt="Odoo" style={{objectFit: "contain"}} loading="lazy" />
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
<img src="/images/jci.png" className="h-100px" alt="JCI" style={{objectFit: "contain"}} loading="lazy" />
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
<img src="/images/AIPPS.png" className="h-100px" alt="AI4ICPS" style={{objectFit: "contain"}} loading="lazy" />
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
<img src="/images/YES BANK.png" className="h-100px" alt="YES BANK" style={{objectFit: "contain"}} loading="lazy" />
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
<img src="/images/bharatx.png" className="h-100px" alt="BharatX" style={{objectFit: "contain"}} loading="lazy" />
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
<img src="/images/TDeFi.jpeg" className="h-100px" alt="TDeFi" style={{objectFit: "contain"}} loading="lazy" />
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

<Footer />










    </>
  );
}
