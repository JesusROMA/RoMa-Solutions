document.addEventListener("DOMContentLoaded", () => {
    const learnMoreButton = document.querySelector(".learn-more-button");
    const moreText = document.querySelector(".more-text");
  
    learnMoreButton.addEventListener("click", () => {
      if (moreText.style.display === "none") {
        moreText.style.display = "inline"; // Muestra el texto adicional
        learnMoreButton.textContent = "Leer Menos"; // Cambia el texto del botón
      } else {
        moreText.style.display = "none"; // Oculta el texto adicional
        learnMoreButton.textContent = "Leer Más"; // Cambia el texto del botón
      }
    });
  });
  