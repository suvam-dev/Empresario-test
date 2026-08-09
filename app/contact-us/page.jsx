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
<span className="ps-25px pe-25px pt-5px pb-5px mb-15px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-flex"><i className="bi bi-megaphone text-white icon-small me-10px"></i>
            Tell us your queries</span>
<h1 className="mb-20px text-white fw-600 ls-minus-1px">Contact us</h1>
</div>
</div>
</div>
</section>


<section className="pt-3 sm-pt-50px" style={{backgroundColor: "#F0F2F8"}}>
<div className="container">
<div className="row justify-content-center">
<div className="col-xl-5 col-lg-8 col-md-10 lg-mb-50px" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 250, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<div className="position-sticky top-120px lg-top-0px lg-position-relative text-center text-xl-start">
<span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-flex justify-content-center justify-content-xl-start"><i className="bi bi-chat-square-dots fs-16 me-5px"></i>Get in Touch</span>
<h3 className="text-dark-gray ls-minus-2px fw-700">
              Contact Us
            </h3>
<p className="mb-35px w-90 lg-w-100 sm-mb-25px">
              Have questions or need more info about Empresario? Reach out to us—we're here to help you get started on
              your entrepreneurial journey.
            </p>
<a href="#" className="btn btn-extra-large btn-switch-text btn-gradient-purple-pink left-icon btn-rounded me-10px ls-0px">
<span style={{display: "none"}}>
<span><i className="bi bi-telephone-outbound"></i></span>
<span className="btn-double-text" data-text="Schedule a call">Schedule a call</span>
</span>
</a>
</div>
</div>
<div className="col-xl-6 col-lg-8 col-md-10 offset-xl-1">
<div className="row row-cols-1 justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 150, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

<div className="col services-box-style-02 mb-30px">
<div className="row g-0 box-shadow-quadruple-large border-radius-6px overflow-hidden">
<div className="col-lg-6 col-sm-6">
<div className="h-100 cover-background xs-h-300px" style={{backgroundImage: "url('/images/people/jateen.jpg)"}}></div>
</div>
<div className="col-lg-6 col-sm-6 bg-white box-shadow-extra-large p-40px xl-p-30px">
<div className="services-box-content last-paragraph-no-margin">
<span className="d-block text-dark-gray primary-font fw-700 fs-19 mb-10px">Jateen Ramteke</span>
<p>Senior Manager</p>
<a href="mailto:ramteke.jateen@ecell-iitkgp.in" className="fs-16 lh-20 primary-font fw-500 text-dark-gray d-inline-block mb-25px">ramteke.jateen@ecell-iitkgp.in</a>
<div className="text-dark-gray fw-600">
<i className="feather icon-feather-phone-call icon-small me-10px text-dark-gray"></i><a href="tel:+918793013675">+91 87930 13675</a>
</div>
</div>
</div>
</div>
</div>


<div className="col services-box-style-02 mb-30px">
<div className="row g-0 box-shadow-quadruple-large border-radius-6px overflow-hidden">
<div className="col-lg-6 col-sm-6">
<div className="h-100 cover-background xs-h-300px" style={{backgroundImage: "url('/images/people/devang.jpg)"}}></div>
</div>
<div className="col-lg-6 col-sm-6 bg-white box-shadow-extra-large p-40px xl-p-30px">
<div className="services-box-content last-paragraph-no-margin">
<span className="d-block text-dark-gray primary-font fw-700 fs-19 mb-10px">Devang Parmar</span>
<p>Senior Manager</p>
<a href="mailto:parmar.devang@ecell-iitkgp.in" className="fs-16 lh-20 primary-font fw-500 text-dark-gray d-inline-block mb-25px">parmar.devang@ecell-iitkgp.in</a>
<div className="text-dark-gray fw-600">
<i className="feather icon-feather-phone-call icon-small me-10px text-dark-gray"></i><a href="tel:+918291149407">+91 8291149407</a>
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


<Footer />










    </>
  );
}
