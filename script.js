const reasons = [
  "Because your smile has a way of making everything feel okay.",
  "Because you deserve the same kindness you so easily give to others.",
  "Because even the smallest moments feel special when they include you.",
  "Because your strength is beautiful, even on the days you don't notice it.",
  "Because there is nobody else quite like you, Jashan.",
  "Because your happiness matters to me — today and every day."
];
let reasonIndex = 0;
const reasonText = document.getElementById("reasonText");
const reasonCount = document.getElementById("reasonCount");
document.getElementById("nextReason").addEventListener("click", () => {
  reasonIndex = (reasonIndex + 1) % reasons.length;
  reasonText.animate([{opacity:0, transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}],{duration:350});
  reasonText.textContent = reasons[reasonIndex];
  reasonCount.textContent = `${String(reasonIndex+1).padStart(2,"0")} / ${String(reasons.length).padStart(2,"0")}`;
});
function burst(x, y, count=8) {
  const symbols = ["♡","✦","♥","✧"];
  for (let i=0;i<count;i++) {
    const el=document.createElement("span");
    el.className="pop-heart";
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=(x+(Math.random()*90-45))+"px";
    el.style.top=(y+(Math.random()*40-20))+"px";
    el.style.animationDelay=(Math.random()*.25)+"s";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),1500);
  }
}
document.getElementById("heartButton").addEventListener("click", e=>{
  const r=e.currentTarget.getBoundingClientRect(); burst(r.left+r.width/2,r.top,12);
  e.currentTarget.innerHTML='Love sent <span>♥</span>';
});
document.getElementById("wishButton").addEventListener("click",()=>{
  document.getElementById("wishMessage").textContent="May your wish find its way to you. You deserve beautiful things. ♡";
  const layer=document.getElementById("confettiLayer");
  const symbols=["✦","♡","✧","♥","✷"];
  for(let i=0;i<34;i++){
    const s=document.createElement("span");s.className="confetti";s.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    s.style.left=Math.random()*100+"%";s.style.animationDelay=Math.random()*.8+"s";s.style.color=["#f0a2c4","#f7e9e6","#c9a9ff"][i%3];layer.appendChild(s);
    setTimeout(()=>s.remove(),3500);
  }
  document.getElementById("wishButton").textContent="Wish sent into the universe ✨";
});
document.getElementById("replayButton").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
// Optional gentle sound: synthesized only after the visitor explicitly turns it on.
let audioContext=null, oscillator=null, gain=null, soundOn=false, melodyTimer=null;
document.getElementById("musicToggle").addEventListener("click",()=>{
  const btn=document.getElementById("musicToggle");
  if(!soundOn){
    try{
      audioContext=new (window.AudioContext||window.webkitAudioContext)();
      gain=audioContext.createGain();gain.gain.value=.018;gain.connect(audioContext.destination);
      oscillator=audioContext.createOscillator();oscillator.type="sine";oscillator.frequency.value=261.63;oscillator.connect(gain);oscillator.start();
      const notes=[261.63,329.63,392,329.63,293.66,349.23,392,440];let n=0;
      melodyTimer=setInterval(()=>{if(oscillator&&audioContext){oscillator.frequency.setTargetAtTime(notes[n%notes.length],audioContext.currentTime,.18);n++;}},750);
      soundOn=true;btn.innerHTML="♫ <span>Sound on</span>";btn.setAttribute("aria-pressed","true");
    }catch(err){btn.innerHTML="♫ <span>Sound unavailable</span>";}
  }else{
    clearInterval(melodyTimer);if(oscillator){oscillator.stop();oscillator.disconnect();oscillator=null;}if(audioContext){audioContext.close();audioContext=null;}
    soundOn=false;btn.innerHTML="♫ <span>Sound off</span>";btn.setAttribute("aria-pressed","false");
  }
});
