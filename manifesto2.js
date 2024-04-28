const ids = ['img10', 'img29', 'img39'];
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

document.addEventListener('DOMContentLoaded', () => {
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