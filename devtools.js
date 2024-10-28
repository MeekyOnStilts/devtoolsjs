/// uDevTools.js
window.addEventListener("keyup", event => {
  // Check if Ctrl key is pressed and the key is `
  if (event.ctrlKey && event.key === '`') {
    // Check if Eruda is already loaded
    if (typeof eruda === 'undefined') {
      var script = document.createElement('script');
      script.src = "//cdn.jsdelivr.net/npm/eruda";
      document.body.appendChild(script);
      script.onload = function () {
        eruda.init();
      };
    } else {
      // Toggle Eruda visibility
      eruda.get('console').config.set('display', !eruda.get('console').config.get('display'));
    }
  }
});
