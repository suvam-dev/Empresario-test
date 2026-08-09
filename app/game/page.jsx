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


<Footer />

    </>
  );
}
