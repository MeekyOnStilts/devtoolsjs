/// uDevTools.js
window.addEventListener("keyup", event => {
  // Check if Ctrl + backtick (`)
  if (event.ctrlKey && event.key === "`") {
    // Dynamically create a script element and load Eruda
    const script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    
    // Initialize Eruda when the script is loaded
    script.onload = function () {
      eruda.init();
    };
  }
});
