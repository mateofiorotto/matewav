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

document.addEventListener('DOMContentLoaded', function () {
  // Altura del encabezado
  const headerHeight = document.querySelector('nav').offsetHeight;
  
  // Margen adicional
  const additionalOffset = 80; // Ajusta este valor según tus necesidades
  
  // Selecciona todos los enlaces de navegación
  const navLinks = document.querySelectorAll('.links-navs'); // Asegúrate de seleccionar los elementos de ancla dentro de los enlaces de navegación

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      // Obtén el ID de la sección destino
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) { // Solo previene el comportamiento por defecto si el destino existe
        event.preventDefault();

        // Calcula la posición de la sección menos la altura del encabezado y el margen adicional
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - additionalOffset;

        // Desplazamiento suave a la posición calculada
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});