/// uDevTools.js
window.addEventListener("keyup", e => { if (e.ctrlKey && e.which === 192) { eval("(function () { var script = document.createElement('script'); script.src='//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { eruda.init() } })()"); } });
