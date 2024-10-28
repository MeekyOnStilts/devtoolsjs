/// uDevTools.js
window.addEventListener("keyup", e => { if (e.ctrlKey && e.which === 192) { let c = prompt("Eval:", "(function () { var script = document.createElement('script'); script.src='//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { eruda.init() } })()"); if (c.startsWith("javascript:")) c = c.substring(11); eval(c); } });
