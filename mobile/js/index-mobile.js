
document.addEventListener('DOMContentLoaded', function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        window.location.href = '../../index.html';
    } else {
        const skeletonFireImages = document.querySelectorAll('.skeletonFireImg');
        skeletonFireImages.forEach((img) => {
            if (img.id === 'imgFire') {
                img.removeAttribute('id');
            }
            img.setAttribute('id', 'desktopImgHide');
        });
        
        const button = document.getElementById('removeDesktopOverlayButton');
        const overlay = document.getElementById('desktopRedirect');

        button.addEventListener('click', function() {
            overlay.style.display = 'none';
        });
    }
});