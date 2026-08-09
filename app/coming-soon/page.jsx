"use client";

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



<section className="cover-background overflow-auto full-screen position-relative" style={{backgroundImage: "url('/images/coming-soon-bg.jpg)"}}>
<div id="particles-style-01" className="position-absolute h-100 top-0 left-0 w-100" data-particle="true" data-particle-options="{&quot;particles&quot;:{&quot;number&quot;:{&quot;value&quot;:10,&quot;density&quot;:{&quot;enable&quot;:true,&quot;value_area&quot;:800}},&quot;color&quot;:{&quot;value&quot;:&quot;#b0b4e2&quot;},&quot;shape&quot;:{&quot;type&quot;:&quot;circle&quot;,&quot;stroke&quot;:{&quot;width&quot;:0,&quot;color&quot;:&quot;#000000&quot;},&quot;polygon&quot;:{&quot;nb_sides&quot;:5},&quot;image&quot;:{&quot;src&quot;:&quot;img/github.svg&quot;,&quot;width&quot;:100,&quot;height&quot;:100}},&quot;opacity&quot;:{&quot;value&quot;:1,&quot;random&quot;:false,&quot;anim&quot;:{&quot;enable&quot;:false,&quot;speed&quot;:1,&quot;opacity_min&quot;:0.1,&quot;sync&quot;:false}},&quot;size&quot;:{&quot;value&quot;:4,&quot;random&quot;:true,&quot;anim&quot;:{&quot;enable&quot;:false,&quot;speed&quot;:40,&quot;size_min&quot;:0.1,&quot;sync&quot;:false}},&quot;line_linked&quot;:{&quot;enable&quot;:false,&quot;distance&quot;:150,&quot;color&quot;:&quot;#ffffff&quot;,&quot;opacity&quot;:0.4,&quot;width&quot;:1},&quot;move&quot;:{&quot;enable&quot;:true,&quot;speed&quot;:6,&quot;direction&quot;:&quot;none&quot;,&quot;random&quot;:false,&quot;straight&quot;:false,&quot;out_mode&quot;:&quot;out&quot;,&quot;bounce&quot;:false,&quot;attract&quot;:{&quot;enable&quot;:false,&quot;rotateX&quot;:600,&quot;rotateY&quot;:1200}}},&quot;interactivity&quot;:{&quot;detect_on&quot;:&quot;canvas&quot;,&quot;events&quot;:{&quot;onhover&quot;:{&quot;enable&quot;:true,&quot;mode&quot;:&quot;repulse&quot;},&quot;onclick&quot;:{&quot;enable&quot;:true,&quot;mode&quot;:&quot;push&quot;},&quot;resize&quot;:true},&quot;modes&quot;:{&quot;grab&quot;:{&quot;distance&quot;:400,&quot;line_linked&quot;:{&quot;opacity&quot;:1}},&quot;bubble&quot;:{&quot;distance&quot;:400,&quot;size&quot;:40,&quot;duration&quot;:2,&quot;opacity&quot;:8,&quot;speed&quot;:3},&quot;repulse&quot;:{&quot;distance&quot;:200,&quot;duration&quot;:0.4},&quot;push&quot;:{&quot;particles_nb&quot;:4},&quot;remove&quot;:{&quot;particles_nb&quot;:2}}},&quot;retina_detect&quot;:true}"></div>
<div className="container h-100">
<div className="row align-items-center justify-content-center h-100 z-index-2 position-relative">
<div className="col-md-12 col-lg-10 col-xl-8 col-xxl-7 text-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<a className="mb-10 md-mb-50px d-inline-block" href="/">
<img src="/images/logos/empresario-transparent-logo.png" data-at2x="/images/logos/empresario-transparent-logo.png" alt="" style={{transform: "scale(0.6)"}} />
</a>
<h1 className="fw-700 fs-70 mb-10px text-dark-gray ls-minus-2px" style={{marginTop: "-50px"}}>
              Coming soon!
            </h1>
<h6 className="text-dark-gray mb-0">We're getting ready to launch!</h6>
<div className="countdown-style-03 mb-9 mt-9" style={{display: "none"}}>
<div data-enddate="2024/08/08 12:00:00" className="countdown"></div>
</div>
<div className="w-100 newsletter-style-03 position-relative mb-8 lg-mb-15 md-mb-6" style={{display: "none"}}>
<form action="email-templates/subscribe-newsletter.php" method="post" className="position-relative lg-w-100 w-80 mx-auto">
<div className="position-relative">
<input className="input-large bg-white border-color-transparent w-100 border-radius-5px box-shadow-extra-large form-control required" type="email" name="email" placeholder="Enter your email address" />
<input type="hidden" name="redirect" value="" />
<button className="btn btn-extra-large text-dark-gray ls-0px left-icon submit text-transform-none fw-600" aria-label="submit">
<i className="icon feather icon-feather-mail icon-small align-middle"></i><span>Notify me</span>
</button>
</div>
<div className="form-results border-radius-100px mt-15px p-15px fs-15 w-100 text-center d-none"></div>
</form>
<p className="fs-14 mt-15px mb-0">
                Subscribe our newsletter to get update when it'll be live.
              </p>
</div>
<div className="elements-social social-icon-style-02 mt-15px">
<ul className="medium-icon dark">
<li className="my-0">
<a className="facebook" href="https://www.facebook.com/ecell.iitkgp/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
</li>
<li className="my-0">
<a className="linkedin" href="https://www.linkedin.com/company/ecellkgp/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
</li>
<li className="my-0">
<a className="x-twitter" href="https://twitter.com/ecelliitkgp" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
</li>
<li className="my-0">
<a className="instagram" href="https://www.instagram.com/iitkgp_ecell/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
</li>
</ul>
</div>
</div>
<a href="/" style={{textAlign: "center"}}>Go back to home →</a>
</div>
</div>
<div>
</div>
</section>






<Footer />

    </>
  );
}
