document.addEventListener('DOMContentLoaded', function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile)
    window.location.href = "../../mobile/html/contact-mobile.html";
  })