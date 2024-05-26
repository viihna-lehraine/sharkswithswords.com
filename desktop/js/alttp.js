document.addEventListener('DOMContentLoaded', function() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile)
  window.location.href = "../../mobile/html/alttp-mobile.html";
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

window.onclick = function(event) {
    if (!event.target.matches('.dropdownButton')) {
      var dropdowns = document.getElementsByClassName("dropdownContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
} 