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


<section className="pt-0 cover-background ipad-top-space-margin sm-pb-0" style={{backgroundImage: "url('images/event-images/images\ \(4\).jpeg')", backgroundColor: "#F8F9FA"}}>
<div className="shape-image-animation p-0 w-100 d-none d-md-block">
<svg xmlns="http://www.w3.org/2000/svg" widht="3000" height="400" viewBox="0 180 2500 200" fill="#F8F9FA">
<path className="st1" d="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250">
<animate attributeName="d" dur="5s" values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250" repeatCount="indefinite"></animate>
</path>
</svg>
</div>
<div style={{height: "500px"}}>
<div id="particles-style-01" className="position-absolute h-100 top-0 left-0 w-100" data-particle="true" data-particle-options="{&quot;particles&quot;:{&quot;number&quot;:{&quot;value&quot;:10,&quot;density&quot;:{&quot;enable&quot;:true,&quot;value_area&quot;:800}},&quot;color&quot;:{&quot;value&quot;:&quot;#b0b4e2&quot;},&quot;shape&quot;:{&quot;type&quot;:&quot;circle&quot;,&quot;stroke&quot;:{&quot;width&quot;:0,&quot;color&quot;:&quot;#000000&quot;},&quot;polygon&quot;:{&quot;nb_sides&quot;:5},&quot;image&quot;:{&quot;src&quot;:&quot;img/github.svg&quot;,&quot;width&quot;:100,&quot;height&quot;:100}},&quot;opacity&quot;:{&quot;value&quot;:1,&quot;random&quot;:false,&quot;anim&quot;:{&quot;enable&quot;:false,&quot;speed&quot;:1,&quot;opacity_min&quot;:0.1,&quot;sync&quot;:false}},&quot;size&quot;:{&quot;value&quot;:4,&quot;random&quot;:true,&quot;anim&quot;:{&quot;enable&quot;:false,&quot;speed&quot;:40,&quot;size_min&quot;:0.1,&quot;sync&quot;:false}},&quot;line_linked&quot;:{&quot;enable&quot;:false,&quot;distance&quot;:150,&quot;color&quot;:&quot;#ffffff&quot;,&quot;opacity&quot;:0.4,&quot;width&quot;:1},&quot;move&quot;:{&quot;enable&quot;:true,&quot;speed&quot;:6,&quot;direction&quot;:&quot;none&quot;,&quot;random&quot;:false,&quot;straight&quot;:false,&quot;out_mode&quot;:&quot;out&quot;,&quot;bounce&quot;:false,&quot;attract&quot;:{&quot;enable&quot;:false,&quot;rotateX&quot;:600,&quot;rotateY&quot;:1200}}},&quot;interactivity&quot;:{&quot;detect_on&quot;:&quot;canvas&quot;,&quot;events&quot;:{&quot;onhover&quot;:{&quot;enable&quot;:true,&quot;mode&quot;:&quot;repulse&quot;},&quot;onclick&quot;:{&quot;enable&quot;:true,&quot;mode&quot;:&quot;push&quot;},&quot;resize&quot;:true},&quot;modes&quot;:{&quot;grab&quot;:{&quot;distance&quot;:400,&quot;line_linked&quot;:{&quot;opacity&quot;:1}},&quot;bubble&quot;:{&quot;distance&quot;:400,&quot;size&quot;:40,&quot;duration&quot;:2,&quot;opacity&quot;:8,&quot;speed&quot;:3},&quot;repulse&quot;:{&quot;distance&quot;:200,&quot;duration&quot;:0.4},&quot;push&quot;:{&quot;particles_nb&quot;:4},&quot;remove&quot;:{&quot;particles_nb&quot;:2}}},&quot;retina_detect&quot;:true}">
</div>
<div className="container">
<div className="row align-items-center justify-content-center h-500px sm-h-300px">
<div className="col-12 col-lg-6 col-md-10 position-relative text-center page-title-extra-large d-flex flex-wrap flex-column align-items-center justify-content-center" data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
<span className="ps-25px pe-25px pt-5px pb-5px mb-15px text-uppercase text-white fs-12 ls-1px fw-600 border-radius-100px bg-gradient-dark-gray-transparent d-flex"><i className="bi bi-megaphone text-white icon-small me-10px"></i>Find important information</span>
<h1 className="mb-20px text-white fw-600 ls-minus-1px">Resources</h1>
</div>
</div>
</div>
</div></section>


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


<section className="position-relative" style={{backgroundColor: "#F8F9FA"}}>
<div className="container" style={{marginTop: "-50px"}}>
<div className="row">
<div className="col tab-style-01">
<ul className="nav nav-tabs justify-content-center border-0 text-center fs-18 alt-font fw-600 mb-3">
<li className="nav-item my-1">
<a className="nav-link active" data-bs-toggle="tab" href="#tab_sec1" style={{minWidth: "340px"}}>Business Model
                Competition</a>
</li>
<li className="nav-item my-1">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec2" style={{minWidth: "340px"}}>B Model v/s B Plan</a>
</li>
<li className="nav-item my-1">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec3" style={{minWidth: "340px"}}>Development</a>
</li>
<li className="nav-item my-1">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec4" style={{minWidth: "340px"}}>Business Model
                Canvas</a>
</li>
<li className="nav-item my-1">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec5" style={{minWidth: "340px"}}>About Patents</a>
</li>
<li className="nav-item my-1">
<a className="nav-link" data-bs-toggle="tab" href="#tab_sec6" style={{minWidth: "340px"}}>Submission</a>
</li>
</ul>
<div className="tab-content">

<div className="tab-pane fade in active show" id="tab_sec1">
<div className="row justify-content-center align-items-center border-radius-6px p-8 md-p-6 sm-p-10" style={{backgroundColor: "#fff"}}>
<h3 className="container ls-minus-1px z-index-1 position-relative" style={{color: "#1E2033", textAlign: "center"}}>What is Business Model Competition?</h3>
<p>Empresario represents a radical departure from the traditional approach and marks the beginning of a
                  new paradigm in entrepreneurship. It is not just a typical business plan competition; rather, it
                  focuses on the business model competition approach. Instead of solely concentrating on creating a
                  comprehensive business plan with financials and polished presentations, Empresario emphasizes
                  identifying and precisely defining the key assumptions of the new venture. It encourages participants
                  to test these assumptions in the real world and then make necessary pivots or changes based on the
                  insights gained from the testing phase.
                  <br /><br />
                  The competition aims to reward entrepreneurs who can break down their ideas into critical business
                  model assumptions. Participants are encouraged to step out of their comfort zones and engage directly
                  with potential customers to test these assumptions rigorously. By applying customer development and
                  lean startup principles, the objective is to arrive at a customer-validated business model.
                  <br /><br />
                  In essence, Empresario fosters a culture of continuous learning and adaptability in entrepreneurship.
                  It acknowledges that successful ventures are built upon a strong foundation of validated assumptions
                  and a willingness to iterate and pivot until the optimal solution is achieved.
                </p>
</div>
</div>


<div className="tab-pane fade in" id="tab_sec2">
<div className="row justify-content-center align-items-center border-radius-6px p-8 md-p-6 sm-p-10" style={{backgroundColor: "#fff"}}>
<h3 className="container ls-minus-1px z-index-1 position-relative" style={{color: "#1E2033", textAlign: "center"}}>How does a Business Model differ from a traditional
                  Business Plan?</h3>
<p>The International Business Model Competition recognizes that any new venture involves making educated
                  guesses about the problem and its solution. The only valid way to test these assumptions is to "get
                  outside the building" and engage with customers directly. let's clarify the difference between a
                  business model and a business plan.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Outside versus Inside the Building:</b>Traditional business plans often
                  rely on secondary research, market reports, and internal analysis to gather information about the
                  market and potential customers. However, this approach can lead to assumptions based on incomplete or
                  outdated data. In contrast, the lean startup methodology encourages entrepreneurs to actively engage
                  with customers early on. By having direct conversations, conducting interviews, and observing customer
                  behaviour, startups can gain valuable insights and feedback that inform the development of their
                  business model.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Input versus Output Focus:</b>Traditional business plans tend to focus on
                  input-based assumptions, where entrepreneurs make educated guesses about customers' preferences,
                  market demand, and strategies. These assumptions are often treated as facts without being tested. The
                  lean startup approach emphasises an output-focused mindset. It aims to transform assumptions into
                  facts by actively seeking customer feedback and validating hypotheses through experiments and
                  real-world data. This iterative feedback loop allows startups to continuously refine their business
                  model based on actual customer responses and behavior, increasing the chances of creating a product or
                  service that customers truly want.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Change versus Fortify:</b>Traditional business plans often aim to fortify
                  the core idea or concept by gathering evidence, conducting market research, and providing extensive
                  justifications. These plans are presented as static documents that attempt to convince others of the
                  idea's viability. In contrast, the lean startup approach embraces a mindset of continuous learning and
                  adaptation. It recognizes that initial assumptions may be flawed or incomplete and encourages startups
                  to be open to change. Rather than seeing a pivot or change in direction as a failure, it is viewed as
                  a natural part of the learning process.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Chasing Customers versus Chasing Funding:</b>Traditional business plans
                  often place a primary focus on attracting funding. Entrepreneurs may spend a significant amount of
                  time crafting their plans to impress potential investors and secure financing. In contrast, the lean
                  startup approach encourages startups to prioritize customer acquisition and validation over
                  fundraising. By focusing on getting into the field, engaging with customers, and delivering a product
                  or service that meets their needs, you can demonstrate real-world validation and traction.</p>
<br /><br />
<p><b style={{color: "#1E2033"}}>Launching versus Talking:</b>Traditional business plans are often centered
                  around future projections, forecasts, and initiatives. They lay out a roadmap for what the business
                  intends to do without necessarily validating those assumptions through real-world feedback. In
                  contrast, the lean startup methodology emphasizes the importance of taking action and launching early.
                  Startups actively engage in customer development, gathering insights, and iterating their products or
                  services based on validated learning. This emphasis on tangible actions and outcomes positions the
                  startup to learn and adapt quickly, ultimately increasing its chances of success.</p>
</div>
</div>


<div className="tab-pane fade in" id="tab_sec3">
<div className="row justify-content-center align-items-center border-radius-6px p-8 md-p-6 sm-p-10" style={{backgroundColor: "#fff"}}>
<h3 className="container ls-minus-1px z-index-1 position-relative" style={{color: "#1E2033", textAlign: "center"}}>Business Model Development</h3>
<p>Drawing from Steve Blank’s Customer Development process, Alexander Osterwalder’s Business Model
                  Generation book, and Nathan Furr’s Nail It then Scales It process
                </p>
<p><b style={{color: "#1E2033"}}>Find a Problem:</b> Identify a Significant Customer Problem Worth Solving
                  and write down all your key hypotheses about the business model to solve this problem. We recommend
                  that you use Alex Osterwalder’s Business Model Canvas as a scorecard to track your assumptions and the
                  changes that you make.
                </p>
<p><b style={{color: "#1E2033"}}>Nail the Pain:</b> Step outside the building and conduct face-to-face
                  interviews with customers to understand the specific "job" they are trying to accomplish, identify
                  their current pain points, and explore their existing methods for addressing those challenges. Be
                  prepared to pivot your approach if you discover that your initial assumptions are incorrect.</p>

</div>
</div>


<div className="tab-pane fade in" id="tab_sec4">
<div className="row justify-content-center align-items-center border-radius-6px p-8 md-p-6 sm-p-10" style={{backgroundColor: "#fff"}}>
<h3 className="container ls-minus-1px z-index-1 position-relative" style={{color: "#1E2033", textAlign: "center"}}>Business Model Canvas</h3>
<p>The Business Model Canvas (BMC) is a strategic management tool to quickly and easily define and
                  communicate a business idea or concept. It is a one page document which works through the fundamental
                  elements of a business or product, structuring an idea in a coherent way.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Value Proposition:</b>Value Proposition: What’s compelling about the
                  proposition? Why do customers buy, use? It is the fundamental concept of the exchange of value between
                  your business and your customer/clients. Generally, value is exchanged from a customer for money when
                  a problem is solved or a pain is relieved for them by your business.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Customer Segments:</b>Who are the customers? What do they think? See?
                  Feel? Do? Customer Segmenting is the practice of dividing a customer base into groups of individuals
                  that are similar in specific ways, such as age, gender, interests and spending habits.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Channels:</b>How are these propositions promoted, sold and delivered? Why?
                  Is it working? Channels are defined as the avenues through which your customer comes into contact with
                  your business and becomes part of your sales cycle. This is generally covered under the marketing plan
                  for your business.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Customer Relationships:</b>How do you interact with the customer through
                  their ‘journey’? Customer Relationships is defined as how a business interacts with its customers. So,
                  do you meet with them in person? Or over the phone? Or is your business predominantly run online so
                  the relationship will be online too?</p><br /><br />
<p><b style={{color: "#1E2033"}}>Key Activities:</b>What uniquely strategic things does the business do to
                  deliver its proposition? The Key Activities of your business/product are the actions that your
                  business undertakes to achieve the value proposition for your customers.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Key Resources:</b>What unique strategic assets must the business have to
                  compete? Key means the resources your business requires to do business. These resources are what is
                  needed practically to undertake the action/activities of your business.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Key Partnerships:</b>What can the company not do so it can focus on its
                  Key Activities? If my business cannot achieve the value proposition alone, who else do I need to rely
                  on to do it Key Partners are a list of other external companies/suppliers/parties you may need to
                  achieve your key activities and deliver value to the customer.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Cost Structure:</b>Cost Structure: What are the business’ major cost
                  drivers? How are they linked to revenue? Your business cost structure is defined as the monetary cost
                  of operating as a business.</p><br /><br />
</div>
</div>


<div className="tab-pane fade in show" id="tab_sec5">
<div className="row justify-content-center align-items-center border-radius-6px p-8 md-p-6 sm-p-10" style={{backgroundColor: "#fff"}}>
<h3 className="container ls-minus-1px z-index-1 position-relative" style={{color: "#1E2033", textAlign: "center"}}>What is a patent? How do you file a patent?</h3>
<p>When inventors come up with a new device, the first thing they want to do is patent it. Patents are
                  enforceable rights in a particular jurisdiction given to an inventor to exclude others from using,
                  making or selling their invention. For a certain period of time, patent-holders are allowed to control
                  how their inventions are used, allowing them to reap the financial rewards of their work. Patents are
                  a palpable, legally-binding manifestation of a person's genius and innovation; they allow a person to
                  actually own an INVENTION.
                  <br /><br />
                  One can obtain a patent by filing a patent application in a prescribed format in any one of the four
                  patent offices in India. Patent application will result in defining your rights over the invention and
                  how broadly you have protected your invention. Even simple words in patent application can change your
                  right over the scope of invention drastically. Patent attorneys or patent agents are the best people
                  to write and draft your application. Filing an invention in India will give you a right only in India
                  as patent right is jurisdictional in nature. One has to file patent applications in other countries
                  wherever he/she feels the invention needs to be protected.
                </p>
</div>
</div>


<div className="tab-pane fade in show" id="tab_sec6">
<div className="row justify-content-center align-items-center border-radius-6px p-8 md-p-6 sm-p-10" style={{backgroundColor: "#fff"}}>
<h3 className="container ls-minus-1px z-index-1 position-relative" style={{color: "#1E2033", textAlign: "center"}}>How to prepare your submission?</h3>
<p>All the teams who qualifies the first round, need to submit a documentation which must adhere to the
                  following submission requirements: Although there is not one format for successful submissions, we
                  suggest that it should contain the following components:</p><br /><br />
<p><b style={{color: "#1E2033"}}>Title Slide:</b>Briefly introduce your team and provide an overview of
                  your business, highlighting the pain point it addresses and the proposed solution.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Assumption Slides:</b>State your initial hypotheses and emphasize any
                  identified customer problems. - Highlight key hypotheses related to your business model, particularly
                  focusing on customer pain and your solution.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Action Slides:</b>Describe the specific tests conducted to validate your
                  hypotheses. Present the discovered facts and insights from the tests, along with any remaining
                  information to be uncovered. - Emphasize the importance of gathering data to demonstrate your
                  understanding of customer pain.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Pivot Slides:</b>Explain how your initial assumptions were either
                  confirmed or refuted. - Outline any significant pivots made based on the test results.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Solution Slides:</b>Detail your current solution to the customer problem
                  and provide evidence of its viability. - Include customer statements, pilot commitments, and purchase
                  orders, if available.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Go-to-Market Strategy:</b>Identify the decision-makers and influencers
                  involved in the sales process. - Share facts and customer feedback that demonstrate your ability to
                  connect with and communicate convincingly to customers.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Market Size Analysis:</b>Present the Total Addressable Market (TAM) and
                  Serviceable Addressable Market (SAM) figures. - Clearly define your target market and your plan for
                  entering the market successfully.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Lessons Learned:</b>Communicate the valuable lessons you have learned
                  throughout your entrepreneurial journey. - Acknowledge any pivots made and discuss learnings from both
                  successes and failures.</p><br /><br />
<p><b style={{color: "#1E2033"}}>Appendices:</b>Include supporting material in the appendices that
                  complements the main body of the model. - Ensure that all critical information is included in the main
                  presentation, as judges may not read all material in the appendices.</p><br /><br />
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
