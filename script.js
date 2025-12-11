// Año dinámico en el footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Scroll suave desde botones de "Cotizar"
  const heroCta = document.getElementById("btn-cotizar-hero");
  const heroNavCta = document.getElementById("btn-cotizar-hero-nav");
  const formSection = document.getElementById("contacto");

  function scrollToForm() {
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  if (heroCta) heroCta.addEventListener("click", scrollToForm);
  if (heroNavCta) heroNavCta.addEventListener("click", scrollToForm);

  // Botones de "Cotizar este viaje" en cada paquete
  const paqueteButtons = document.querySelectorAll(".btn-cotizar-paquete");
  const destinoSelect = document.getElementById("destino");

  paqueteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const paquete = btn.getAttribute("data-paquete");
      if (destinoSelect && paquete) {
        destinoSelect.value = paquete;
      }
      scrollToForm();

      // Lugar perfecto para enganchar Predictive Engagement (eventos personalizados)
      console.log("CTA paquete clickeado:", paquete);
    });
  });

  // Manejo de envío del formulario (modo demo)
  const form = document.getElementById("form-cotizacion");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Aquí podrías disparar un evento personalizado de PE.
      console.log("Formulario de cotización enviado (demo)");

      alert(
        "Gracias por enviar tu cotización demo.\nEste formulario es solo para pruebas."
      );

      form.reset();
    });
  }
});
