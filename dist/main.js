(()=>{"use strict";!function(){const e=document.getElementById("content"),t=document.createElement("header");t.className="top-bar",e.appendChild(t);const n=document.querySelector(".top-bar"),o=document.createElement("div");o.className="options options-left",o.innerHTML='<p id="menu-link">Menu</p>',n.appendChild(o);const c=document.createElement("h1");c.className="res-name",c.textContent="Restaurant De Steak",n.appendChild(c);const a=document.createElement("div");a.className="options options-right",a.innerHTML='<p id="about-link">About</p><p id="contacts-link">Contact</p>',n.appendChild(a);const i=document.createElement("div");i.classList="info",e.appendChild(i)}();const e=document.querySelector(".info"),t=document.querySelector(".res-name");function n(){e.style.backgroundImage="none",e.innerHTML=""}[document.querySelector("#menu-link"),document.querySelector("#about-link"),document.querySelector("#contacts-link")].forEach((e=>{e.addEventListener("click",(()=>{var t;n(),"Menu"===(t=e.textContent)?function(){const e=document.querySelector(".info"),t=document.createElement("h3");t.textContent="SIRLOIN 12OZ",e.appendChild(t);const n=document.createElement("h3");n.textContent="RIBEYE 12OZ",e.appendChild(n);const o=document.createElement("h3");o.textContent="T-BONE 20OZ",e.appendChild(o);const c=document.createElement("h3");c.textContent="BLACK ANGUS FILET MIGNON 10OZ",e.appendChild(c)}():"About"===t?function(){const e=document.querySelector(".info"),t=document.createElement("h1"),n=document.createElement("p");t.textContent="A mordern Take on steak houses",e.appendChild(t),n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",e.appendChild(n)}():function(){const e=document.querySelector(".info"),t=document.createElement("h1"),n=document.createElement("h3");t.className="address",t.textContent="123 Fake street, City, Country, FS000",e.appendChild(t),n.className="tel-Num",n.textContent="+44 7000 0000",e.appendChild(n)}()}))})),t.addEventListener("click",(()=>{n(),e.style.backgroundImage="url(../dist/imgs/background.jpg)"}))})();