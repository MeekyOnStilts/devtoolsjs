/// uDevTools.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    let defaultCode = "(function () { var script = document.createElement('script') script.src='//cdn.jsdelivr.net/npm/eruda' document.body.appendChild(script) script.onload = function () { eruda.init() } })()"
    let code = prompt("Eval:", defaultCode)
    if (code.startsWith("javascript:")) {
      code = code.substring(11)
    }
    eval(code)
  }
})
