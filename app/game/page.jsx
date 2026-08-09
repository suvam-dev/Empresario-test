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
<style dangerouslySetInnerHTML={{ __html: `
    :root{
      --bg1:#0f1724; --bg2:#1e293b; --accent:#ff6b6b; --glass: rgba(255,255,255,0.06);
      --card-radius:16px;
    }
    html,body{height:100%;}
    body{
      margin:0; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
      background: radial-gradient( circle at 10% 20%, #071126 0%, var(--bg1) 20%, var(--bg2) 100% );
      display:flex; align-items:center; justify-content:center; color:#e6eef8;
    }
    .wrap{
      width:min(980px, 96%);
      background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
      border-radius:var(--card-radius);
      padding:18px; box-shadow: 0 10px 30px rgba(2,6,23,0.6);
      display:grid; grid-template-columns: 1fr 320px; gap:18px; align-items:center;
    }
    header{grid-column:1/-1; display:flex; justify-content:space-between; align-items:center; gap:12px}
    h1{font-size:18px; margin:0}
    .sub{color:#9fb3d6; font-size:13px}
    /* canvas area */
    .game-area{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border-radius:12px; padding:12px}
    canvas{display:block; width:100%; height:560px; background: linear-gradient(180deg, rgba(0,0,0,0.2), rgba(5,10,20,0.2)), repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0 2px, transparent 2px 10px); border-radius:10px}
    /* side panel */
    .panel{padding:14px; border-radius:10px; background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));}
    .panel .row{display:flex; justify-content:space-between; margin-bottom:10px}
    .btn{display:inline-block;background:var(--accent); color:white; padding:10px 12px;border-radius:8px;cursor:pointer;border:none;font-weight:600}
    .muted{color:#9fb3d6; font-size:13px}
    .controls{display:flex; gap:8px; margin-top:12px}
    .footer{grid-column:1/-1; text-align:center; font-size:12px; color:#9fb3d6; margin-top:6px}
    @media (max-width:900px){
      .wrap{grid-template-columns:1fr}
      canvas{height:420px}
    }
  ` }} />

<div className="wrap">
<header>
<div>
<h1>Block & Ball — Bouncy Arcade</h1>
<div className="sub">Use arrow keys or mouse to move the paddle. Break every block!</div>
</div>
<div style={{display: "flex", gap: "8px", alignItems: "center"}}>
<div className="muted">Lives: <span id="ui-lives">3</span></div>
<div className="muted">Score: <span id="ui-score">0</span></div>
<button id="startBtn" className="btn">Start</button>
</div>
</header>
<div className="game-area">
<canvas id="gameCanvas" width="860" height="560"></canvas>
</div>
<aside className="panel">
<div className="row"><div className="muted">Level</div><div id="ui-level">1</div></div>
<div className="row"><div className="muted">Blocks left</div><div id="ui-blocks">0</div></div>
<div className="row"><div className="muted">Ball speed</div><div id="ui-speed">Normal</div></div>
<div style={{marginTop: "12px"}}>
<div className="muted">Controls</div>
<div className="controls">
<div className="muted">← →</div>
<div className="muted">Mouse</div>
<div className="muted">Space: Pause</div>
</div>
</div>
<div style={{marginTop: "18px", display: "flex", gap: "8px", flexDirection: "column"}}>
<button id="nextLevelBtn" className="btn" style={{background: "#4ade80"}}>Next Level</button>
<button id="resetBtn" className="btn" style={{background: "#7c3aed"}}>Reset</button>
</div>
<div style={{marginTop: "12px"}} className="muted">Tip: catch power-ups to grow paddle or slow ball.</div>
</aside>
<div className="footer">Made for you — press Start. Enjoy. 🎮</div>
</div>


<div className="social-sidebar">
<a href="https://www.instagram.com/iitkgp_ecell/" target="_blank" className="instagram" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
<a href="https://www.linkedin.com/company/ecellkgp/" target="_blank" className="linkedin" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
<a href="https://www.facebook.com/ecell.iitkgp/" target="_blank" className="facebook" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
<a href="https://x.com/ecelliitkgp" target="_blank" className="twitter" title="X (Twitter)"><i className="fa-brands fa-x-twitter"></i></a>
</div>
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

    </>
  );
}
