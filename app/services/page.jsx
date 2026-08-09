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
<style id="custom-rotate-override" dangerouslySetInnerHTML={{ __html: `
    /* Override flip animation for rotate-box */
    .rotate-box-style-02 .rotate-box {
        transform-style: flat !important;
    }
    .rotate-box-style-02 .rotate-box .front-side,
    .rotate-box-style-02 .rotate-box .back-side {
        transform: none !important;
        transition: all 0.4s ease !important;
        backface-visibility: visible !important;
    }
    .rotate-box-style-02 .rotate-box:hover .front-side {
        filter: blur(8px);
        opacity: 0.4;
        transform: none !important;
    }
    .rotate-box-style-02 .rotate-box .back-side {
        opacity: 0 !important;
        z-index: 2 !important;
        pointer-events: none;
        transform: none !important;
        background-image: none !important;
        background-color: rgba(37, 40, 64, 0.7) !important; /* Sidebar blue color */
    }
    .rotate-box-style-02 .rotate-box:hover .back-side {
        opacity: 1 !important;
        pointer-events: auto;
        transform: none !important;
    }
    
    /* Reset content positioning inside the rotate-box */
    .rotate-box-style-02 .rotate-box .rotate-content-front,
    .rotate-box-style-02 .rotate-box .rotate-content-back {
        top: 0 !important;
        transform: none !important;
    }
  ` }} />


<Navbar />


<section className="pt-0 hero-section-container ipad-top-space-margin sm-pb-0" >
<div className="hero-bg-blur"></div>
<div className="shape-image-animation bottom-0 p-0 w-100 d-none d-md-block">
<svg xmlns="http://www.w3.org/2000/svg" widht="3000" height="400" viewBox="0 180 2500 200" fill="#ffffff">
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
<h1 className="mb-20px text-white fw-600 ls-minus-1px">Services</h1>
</div>
</div>
</div>
</section>


<section className="bg-white">
<h2 className="text-center m-4" style={{fontWeight: "700", color: "#1E2033"}}>Previous Year Service Partner</h2>
<div className="container">
<div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center mb-5 g-4">

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-400px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px shadow-lg" style={{boxShadow: "0 10px 30px rgba(0,0,0,0.15)"}}>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="./images/logos/swipe (1).png" style={{maxHeight: "100px", maxWidth: "150px", marginBottom: "20px"}} alt="" />
<h5 className="alt-font fw-600 text-dark-gray mb-0" style={{fontSize: "1rem"}}>FREE SWIPE SUBSCRIPTION OF INR 49,999/-</h5>
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side bg-charcoal-blue border-radius-6px box-shadow-quadruple-large">
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span className="text-white alt-font fw-600 fs-18 mb-5px">Service Details</span>
<p className="text-white text-center mb-15px">1)Startup should have registered for <br /> Empresario to
                avail the services <br /> 2)Startup need to provide the <br />details in the airtable <br /></p>
<a href="https://getswipe.in/?campaignid=18020457045&adgroupid=140454943856&keyword=swipe&device=c&creative=616145033678&_campaignname=BrandSearch&gad_source=1&gclid=Cj0KCQiAv628BhC2ARIsAIJIiK9EFE8onM3s1jZQHhtrFy1pDMVnTqN67tLVHDdqXqk--bMWdm2qf64aAoKXEALw_wcB" target="_blank" className="btn btn-small btn-white mt-3">View Offer</a>
</div>
</div>
</div>
</div>

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-400px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px shadow-lg" style={{boxShadow: "0 10px 30px rgba(0,0,0,0.15)"}}>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="https://imagedelivery.net/cpyRmB-4Qzn5-ySmAHXmxA/ec1eb906-d0da-48bf-4e8f-66fdb755b200/public" style={{maxHeight: "100px", maxWidth: "150px", marginBottom: "20px"}} alt="" />
<h5 className="alt-font fw-600 text-dark-gray mb-0" style={{fontSize: "1rem"}}>Free credits worth 16k</h5>
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side bg-charcoal-blue border-radius-6px box-shadow-quadruple-large">
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span className="text-white alt-font fw-600 fs-18 mb-5px">Service Details</span>
<p className="text-white text-center mb-15px">1)Startup should have registered for Empresario to avail the
                services <br /> 2) Fill the given below google form:</p>
<a href="https://app.callerdesk.io/" target="_blank" className="btn btn-small btn-white mt-3">View Offer</a>
</div>
</div>
</div>
</div>

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-400px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px shadow-lg" style={{boxShadow: "0 10px 30px rgba(0,0,0,0.15)"}}>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" style={{maxHeight: "100px", maxWidth: "150px", marginBottom: "20px"}} alt="" />
<h5 className="alt-font fw-600 text-dark-gray mb-0" style={{fontSize: "1rem"}}>$1000 credits for all startups and $5000 credits for finalists.</h5>
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side bg-charcoal-blue border-radius-6px box-shadow-quadruple-large">
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span className="text-white alt-font fw-600 fs-18 mb-5px">Service Details</span>
<p className="text-white text-center mb-15px">Kindly fill out this Google form, and representatives from
                AMLEGALS or Entrepreneurship Cell will contact you.</p>
<a href="https://aws.amazon.com/" target="_blank" className="btn btn-small btn-white mt-3">View Offer</a>
</div>
</div>
</div>
</div>

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-400px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px shadow-lg" style={{boxShadow: "0 10px 30px rgba(0,0,0,0.15)"}}>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIHgIQZVkU3KQEreTEqQXO9iG2Boyc3n-2A&s" style={{maxHeight: "100px", maxWidth: "150px", marginBottom: "20px"}} alt="" />
<h5 className="alt-font fw-600 text-dark-gray mb-0" style={{fontSize: "1rem"}}>FREE CANVA PRO: 1-MONTH FOR SEMIFINALISTS, 3-MONTHS FOR FINALISTS – EMPRESARIO
                2026 STARTUPS</h5>
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side bg-charcoal-blue border-radius-6px box-shadow-quadruple-large">
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span className="text-white alt-font fw-600 fs-18 mb-5px">Service Details</span>
<p className="text-white text-center mb-15px">Startup needs to provide the following details in the canva’s
                subscription provided: a) Startup Name b) Contact Number c) Email Address</p>
<a href="https://www.canva.com/en_in/?msockid=2672aa8ab9b06f3a1512bff2b8b66e3c" target="_blank" className="btn btn-small btn-white mt-3">View Offer</a>
</div>
</div>
</div>
</div>

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-400px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px shadow-lg" style={{boxShadow: "0 10px 30px rgba(0,0,0,0.15)"}}>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="https://amlegals.com/wp-content/uploads/2025/08/MAIN-AMLEGALS-LOGO-2.png" style={{maxHeight: "100px", maxWidth: "200px", marginBottom: "20px"}} alt="" />
<h5 className="alt-font fw-600 text-dark-gray mb-0" style={{fontSize: "1rem"}}>Exclusive and subsidised legal fees for Empresario finalists and semi finalists</h5>
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side bg-charcoal-blue border-radius-6px box-shadow-quadruple-large">
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span className="text-white alt-font fw-600 fs-18 mb-5px">Service Details</span>
<p className="text-white text-center mb-15px">Kindly fill out this Google form, and representatives from
                AMLEGALS or Entrepreneurship Cell will contact you.</p>
<a href="https://amlegals.com/#" target="_blank" className="btn btn-small btn-white mt-3">View Offer</a>
</div>
</div>
</div>
</div>

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-400px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px shadow-lg" style={{boxShadow: "0 10px 30px rgba(0,0,0,0.15)"}}>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<img src="https://miro.medium.com/v2/resize:fit:2400/2*-TRDmVVL_EVdCyp4SEIQsw.png" style={{maxHeight: "100px", maxWidth: "150px", marginBottom: "20px"}} alt="" />
<h5 className="alt-font fw-600 text-dark-gray mb-0" style={{fontSize: "1rem"}}>FREE SUBSCRIPTION OF INR 49,999/- TO ALL THE STARTUPS OF EMPRESARIO 2026 FOR 1
                YEAR</h5>
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side bg-charcoal-blue border-radius-6px box-shadow-quadruple-large">
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span className="text-white alt-font fw-600 fs-18 mb-5px">Service Details</span>
<p className="text-white text-center mb-15px">1)Startup should have registered for Empresario to avail the
                services 2)Fill the given below google form</p>
<a href="https://www.msgclub.net/" target="_blank" className="btn btn-small btn-white mt-3">View Offer</a>
</div>
</div>
</div>
</div>

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-400px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px shadow-lg" style={{boxShadow: "0 10px 30px rgba(0,0,0,0.15)"}}>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<a href="https://cynoteck.com/" target="_blank">
<img src="/images/logos/cynoteck-logo.png" style={{maxHeight: "100px", maxWidth: "150px", marginBottom: "20px", backgroundColor: "#071333", padding: "15px", borderRadius: "8px"}} alt="Cynoteck Technology Solutions" />
</a>
<h5 className="alt-font fw-600 text-dark-gray mb-0" style={{fontSize: "1rem"}}>Cynoteck Technology Solutions</h5>
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side bg-charcoal-blue border-radius-6px box-shadow-quadruple-large">
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span className="text-white alt-font fw-600 fs-18 mb-5px">Service Details</span>
<p className="text-white text-center mb-15px">50% discount on its standard hourly development charges for all the startups registered for Empresario</p>
<a href="https://cynoteck.com/" target="_blank" className="btn btn-small btn-white mt-3">View Offer</a>
</div>
</div>
</div>
</div>

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-400px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px shadow-lg" style={{boxShadow: "0 10px 30px rgba(0,0,0,0.15)"}}>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<a href="https://razorpay.com/rize/" target="_blank">
<img src="/images/logos/razorpay-rize-logo.svg" style={{maxHeight: "100px", maxWidth: "150px", marginBottom: "20px"}} alt="Razorpay Rize" />
</a>
<h5 className="alt-font fw-600 text-dark-gray mb-0" style={{fontSize: "1rem"}}>Razorpay Rize</h5>
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side bg-charcoal-blue border-radius-6px box-shadow-quadruple-large">
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span className="text-white alt-font fw-600 fs-18 mb-5px">Service Details</span>
<p className="text-white text-center mb-15px">Free professional company incorporation worth ₹1499 for all startups and direct access to exclusive Razorpay Rize Program for the finalists of Empresario</p>
<a href="https://razorpay.com/rize/" target="_blank" className="btn btn-small btn-white mt-3">View Offer</a>
</div>
</div>
</div>
</div>

<div className="col rotate-box-style-02 mb-30px">
<div className="w-100 min-h-400px text-center rotate-box to-left">
<div className="w-100 h-100 overflow-hidden z-index-1 front-side bg-white border-radius-6px shadow-lg" style={{boxShadow: "0 10px 30px rgba(0,0,0,0.15)"}}>
<div className="rotate-content-front z-index-2 p-30px d-flex flex-column align-items-center justify-content-center h-100">
<a href="https://www.legalkart.com/" target="_blank">
<img src="/images/logos/legalkart-logo.png" style={{maxHeight: "100px", maxWidth: "150px", marginBottom: "20px"}} alt="LegalKart" />
</a>
<h5 className="alt-font fw-600 text-dark-gray mb-0" style={{fontSize: "1rem"}}>LegalKart</h5>
</div>
</div>
<div className="w-100 h-100 overflow-hidden back-side bg-charcoal-blue border-radius-6px box-shadow-quadruple-large">
<div className="d-flex flex-column align-items-center justify-content-center h-100 z-index-2 rotate-content-back p-30px">
<span className="text-white alt-font fw-600 fs-18 mb-5px">Service Details</span>
<p className="text-white text-center mb-15px">A 99% discount for each of the finalists and 50% for the semi-finalists which will include drafting and vetting of documents and legal opinion on queries.</p>
<a href="https://www.legalkart.com/" target="_blank" className="btn btn-small btn-white mt-3">View Offer</a>
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
<div className="bg-white border-radius-6px p-10 ps-12 pe-12 lg-ps-8 lg-pe-8 h-100 d-flex flex-wrap flex-column justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [0, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 1200, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 150, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
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
