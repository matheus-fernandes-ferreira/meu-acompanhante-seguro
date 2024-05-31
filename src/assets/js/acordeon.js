var acordeon = document.getElementsByClassName("banner-acordeon");
var i;

for (i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}