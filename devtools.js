/// uDevTools.js
window.addEventListener("keyup", event => {
  // Check if Ctrl + ` (backtick) is pressed
  if (event.ctrlKey && event.which === 192) {
    // Dynamically load the Eruda script
    const script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);

    // Initialize Eruda once the script has loaded
    script.onload = function () {
      eruda.init();
    };
  }
});
