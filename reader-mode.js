(function(){
"use strict";
function init(){
 if(document.getElementById("reading-mode-toggle"))return;
 var s=document.createElement("style");
 s.textContent=`
 .reader-navigation{display:flex!important;align-items:center;flex-wrap:wrap;gap:.5rem 1rem;width:100%;margin-bottom:1.25rem!important;text-align:left!important}
 .reader-navigation .reader-toggle{margin-left:auto;cursor:pointer;flex-shrink:0;border:1px solid currentColor;border-radius:6px;padding:.45rem .8rem;background:rgba(100,110,120,.18);color:inherit;font:600 .88rem system-ui,sans-serif}
 .reader-navigation .reader-toggle:focus-visible{outline:2px solid currentColor;outline-offset:3px}
 body.reader-active{background:#f8f5ee!important;background-image:none!important;color:#252a30!important;font-size:1.125rem!important;line-height:1.85!important}
 body.reader-active .overlay{background:transparent!important}
 body.reader-active :is(.container,main,article,.card,.trp,table){background:#fffdf8!important;color:#252a30!important;border-color:#ddd7c9!important;box-shadow:none!important}
 body.reader-active :is(.container,main,article){max-width:780px!important;margin-left:auto!important;margin-right:auto!important}
 body.reader-active :is(p,li,td,th,blockquote,figcaption,.subtitle,.tagline,.intro,.footer,.card p){color:#252a30!important;text-shadow:none!important}
 body.reader-active :is(h1,h2,h3,h4,h5,h6,strong){color:#26374b!important;text-shadow:none!important}
 body.reader-active a{color:#175887!important;text-shadow:none!important}
 body.reader-active .reader-toggle{background:#26374b!important;color:white!important;border-color:#26374b!important}
 body.reader-active .cards{max-width:780px!important}
 body.reader-active .card{width:100%!important;max-width:none!important;transform:none!important}
 body.reader-active img{max-width:100%;height:auto}
 @media(max-width:560px){.reader-navigation{gap:.6rem}.reader-navigation .reader-toggle{margin-left:auto}}
 @media print{.reader-toggle{display:none!important}}
 `;
 document.head.appendChild(s);
 var nav=document.querySelector("nav");
 if(!nav){nav=document.createElement("nav");nav.setAttribute("aria-label","Page navigation");var host=document.querySelector(".container,main,.overlay")||document.body;host.insertBefore(nav,host.firstChild);}
 nav.classList.add("reader-navigation");
 var b=document.createElement("button");b.id="reading-mode-toggle";b.type="button";b.className="reader-toggle";nav.appendChild(b);
 function set(on){document.body.classList.toggle("reader-active",on);b.textContent=on?"📖 Exit Reading Mode":"📖 Reading Mode";b.setAttribute("aria-pressed",String(on));try{localStorage.setItem("roleplay-reader-mode",on?"on":"off")}catch(e){}}
 var prior=false;try{prior=localStorage.getItem("roleplay-reader-mode")==="on"}catch(e){}
 set(prior);b.addEventListener("click",function(){set(!document.body.classList.contains("reader-active"))});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();