const ids = ['img-10', 'img-29'];
const url = "https://youareanidiot.cc"; 

document.getElementById('home-button').onclick = function() {
    window.location.href = "main.html";
};

document.getElementById('sitemap-button').onclick = function() {
    window.location.href = "sitemap.html";
};

ids.forEach(id => {
    document.getElementById(id).onclick = function() {
        window.location.href = url;
    };
});

window.addEventListener('load', () => {
    const homeButton = document.getElementById('home-button');
    const sitemapButton = document.getElementById('sitemap-button');

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
    var img = document.getElementById('img-39');
    img.addEventListener('click', function() {
        window.location.href = './rgss.html';
    });
});