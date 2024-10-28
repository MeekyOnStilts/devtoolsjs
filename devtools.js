/// uDevTools.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    (function () {     
      var script = document.createElement('script');    
      script.src = "//cdn.jsdelivr.net/npm/eruda";     
      document.body.appendChild(script);    
      script.onload = function () {         
        eruda.init();
      };
    })();
  }
});
