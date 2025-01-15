/// uRUN.js
window.addEventListener("keyup", e => { if (e.ctrlKey && e.which === 192) { let c = prompt("Eval:", "javascript:(function () { var script = document.createElement('script'); script.src="//chii.liriliri.io/playground/target.js"; document.body.appendChild(script); })();"); if (c.startsWith("javascript:")) c = c.substring(11); eval(c); } });
