// Shared: dark mode toggle, scroll reveal, animated sparkle-network background

(function theme(){
  const root = document.documentElement, btn = document.getElementById('themeBtn');
  let saved = null; try { saved = localStorage.getItem('theme'); } catch(e){}
  const set = d => { root.dataset.theme = d ? 'dark' : 'light'; if(btn) btn.textContent = d ? '☀️' : '🌙';
    try { localStorage.setItem('theme', d ? 'dark' : 'light'); } catch(e){} };
  set(saved === 'dark');
  if(btn) btn.onclick = () => set(root.dataset.theme !== 'dark');
})();

function observeReveal(){
  const io = new IntersectionObserver(es => es.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
  }), { threshold: .15 });
  document.querySelectorAll('.reveal:not(.show)').forEach(el => io.observe(el));
}
observeReveal();

// Network of nodes + AI Collective sparkles on <canvas id="bg">; follows the mouse
(function network(){
  const c = document.getElementById('bg'); if(!c) return;
  const ctx = c.getContext('2d'), GREEN = '#6dc730', WHITE = '#ffffff';
  let pts = [], W, H, mouse = {x:-999,y:-999};
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function size(){
    W = c.width = c.offsetWidth; H = c.height = c.offsetHeight;
    pts = Array.from({length: Math.min(80, Math.floor(W/15))}, (_,i) => ({
      x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4,
      star: i % 6 === 0, r: 2 + Math.random()*3, tw: Math.random()*6.28 }));
  }
  size(); addEventListener('resize', size);
  c.parentElement.addEventListener('mousemove', e => { const r = c.getBoundingClientRect(); mouse = {x:e.clientX-r.left, y:e.clientY-r.top}; });
  c.parentElement.addEventListener('mouseleave', () => mouse = {x:-999,y:-999});
  function sparkle(x,y,r){ ctx.beginPath(); ctx.moveTo(x,y-r*2); ctx.quadraticCurveTo(x,y,x+r*2,y); ctx.quadraticCurveTo(x,y,x,y+r*2); ctx.quadraticCurveTo(x,y,x-r*2,y); ctx.quadraticCurveTo(x,y,x,y-r*2); ctx.fill(); }
  (function draw(t){
    ctx.clearRect(0,0,W,H);
    for(const p of pts){ if(!reduce){ p.x+=p.vx; p.y+=p.vy; } if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1; }
    ctx.lineWidth = 1;
    for(let i=0;i<pts.length;i++){
      const a = pts[i];
      for(let j=i+1;j<pts.length;j++){ const b = pts[j], d = Math.hypot(a.x-b.x,a.y-b.y);
        if(d<120){ ctx.globalAlpha = (1-d/120)*.22; ctx.strokeStyle = WHITE; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); } }
      const dm = Math.hypot(a.x-mouse.x,a.y-mouse.y);
      if(dm<170){ ctx.globalAlpha = (1-dm/170)*.8; ctx.strokeStyle = GREEN; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(mouse.x,mouse.y); ctx.stroke(); }
      if(a.star){ ctx.globalAlpha = .55 + .45*Math.sin((t||0)/500 + a.tw); ctx.fillStyle = GREEN; sparkle(a.x,a.y,a.r); }
      else { ctx.globalAlpha = .7; ctx.fillStyle = WHITE; ctx.beginPath(); ctx.arc(a.x,a.y,1.8,0,7); ctx.fill(); }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  })();
})();
