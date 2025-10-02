document.addEventListener("DOMContentLoaded", () => {
  // Botón de contacto (alerta al hacer clic)
  const boton = document.getElementById("boton-contacto");
  if (boton) {
    boton.addEventListener("click", () => {
      alert("¡Gracias por visitar mi portfolio!");
    });
  }

  // Estrellas que caen en el fondo del #sobre-mi
  const starsContainer = document.querySelector(".stars");

  if (starsContainer) {
    function createStar() {
      const star = document.createElement("div");
      star.classList.add("star");

      // Posición horizontal aleatoria (0 a 100vw)
      star.style.left = Math.random() * 100 + "vw";

      // Tamaño aleatorio entre 3 y 8 px
      const size = Math.random() * 5 + 3;
      star.style.width = size + "px";
      star.style.height = size + "px";

      // Duración animación aleatoria entre 1 y 2.5 segundos
      star.style.animationDuration = (Math.random() * 1.5 + 1) + "s";

      starsContainer.appendChild(star);

      // Eliminar la estrella después de terminar la animación
      setTimeout(() => {
        star.remove();
      }, parseFloat(star.style.animationDuration) * 1000);
    }

    // Crear una nueva estrella cada 150 ms
    setInterval(createStar, 150);
  }

  // Tarjetas de tecnologías con animación al hacer scroll
  const techCards = document.querySelectorAll(".tech-card");

  function checkVisibility() {
    const windowBottom = window.innerHeight;

    techCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < windowBottom - 50 && !card.classList.contains("visible")) {
        // Añadir delay personalizado por tarjeta
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add("visible");
      }
    });
  }

  // Verificar visibilidad al cargar y al hacer scroll
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});



