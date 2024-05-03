document.addEventListener('DOMContentLoaded', function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        var element = document.querySelector('desktopRedirectOverlay');

        if (element) {
            element.classList.remove('hidden');
        }
    }
})