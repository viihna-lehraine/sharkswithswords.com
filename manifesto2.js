const ids = ['img10', 'img29'];
const url = "https://youareanidiot.cc"; 

document.getElementById('homeButton').onclick = function() {
    window.location.href = "https://sharkswithswords.com/main.html";
};

document.getElementById('sitemapButton').onclick = function() {
    window.location.href = "https://sharkswithswords.com/sitemap.html";
};

ids.forEach(id => {
    document.getElementById(id).onclick = function() {
        window.location.href = url;
    };
});

window.addEventListener('load', () => {
    const homeButton = document.getElementById('homeButton');
    const sitemapButton = document.getElementById('sitemapButton');

    function handleMouseEnter() {
        this.classList.add('button-animate');
    }

    function handleMouseLeave() {
        this.classList.remove('button-animate');
    }

    [homeButton, sitemapButton].forEach(button => {
        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);
    });
});

window.addEventListener('load', function() {
    var img = document.getElementById('img39');
    img.addEventListener('click', function() {
        window.location.href = 'rgss.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile)
    window.location.href = "manifesto2-mobile.html";
})