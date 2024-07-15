let mybutton = document.getElementById("boton-volver");
let footer = document.querySelector("footer");

window.onscroll = function () {
  scrollFunction();
  highlightFooter();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function highlightFooter() {
  let buttonRect = mybutton.getBoundingClientRect();
  let footerRect = footer.getBoundingClientRect();

  if (
    buttonRect.top < footerRect.bottom &&
    buttonRect.bottom > footerRect.top
  ) {
    mybutton.style.backgroundColor = "white";
    mybutton.style.color = "black";
  } else {
    mybutton.style.backgroundColor = ""; // Vuelve al estilo por defecto
    mybutton.style.color = ""; // Vuelve al estilo por defecto
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}