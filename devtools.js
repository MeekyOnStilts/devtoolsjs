/// uRUN.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    let code = prompt("Eval:", "javascript:(function () { var script = document.createElement('script'); script.src='//chii.liriliri.io/playground/target.js'; document.body.appendChild(script); })();");
    if (code.startsWith("javascript:")) {
      code = code.substring(11);
    }
    eval(code);
  }
});
