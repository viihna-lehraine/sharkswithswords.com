document.addEventListener('DOMContentLoaded', function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile)
    window.location.href = "../../mobile/html/about-mobile.html";
  })

document.getElementById('homeButton').onclick = function() {
    window.location.href = './main.html';
}

document.getElementById('sitemapButton').onclick = function() {
    window.location.href = './sitemap.html';
}