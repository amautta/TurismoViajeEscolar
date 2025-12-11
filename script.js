// Script principal del sitio demo TurismoViajeEscolar
document.addEventListener("DOMContentLoaded", () => {
  // Año dinámico en el footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Botones principales y sección de formulario
  const heroCta = document.getElementById("btn-cotizar-hero");
  const heroNavCta = document.getElementById("btn-cotizar-hero-nav");
  const formSection = document.getElementById("contacto");

  function scrollToForm() {
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  /* --- BOTÓN HERO: scroll + evento personalizado --- */
  if (heroCta) heroCta.addEventListener("click", scrollToForm);

  if (heroCta) heroCta.addEventListener("click", () => {
    if (typeof ac === "function") {
      // Evento personalizado: clic en CTA principal
      ac("record", "click_cta_hero");
    }
  });

  /* --- BOTÓN DEL MENÚ: scroll + evento personalizado --- */
  if (heroNavCta) heroNavCta.addEventListener("click", scrollToForm);

  if (heroNavCta) heroNavCta.addEventListener("click", () => {
    if (typeof ac === "function") {
      // Evento personalizado: clic en CTA del menú
      ac("record", "click_cta_nav");
    }
  });

  // Botones de "Cotizar este viaje" en cada paquete
  const paqueteButtons = document.querySelectorAll(".btn-cotizar-paquete");
  const destinoSelect = document.getElementById("destino");

  paqueteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const paquete = btn.getAttribute("data-paquete");

      // Rellenar el select con el paquete elegido
      if (destinoSelect && paquete) {
        destinoSelect.value = paquete;
      }

      // Scroll al formulario
      scrollToForm();

      console.log("CTA paquete clickeado:", paquete);

      // Evento personalizado: clic en paquete
      if (typeof ac === "function") {
        ac("record", "click_paquete", { paquete: paquete });
      }
    });
  });

  // Manejo de envío del formulario (modo demo)
  const form = document.getElementById("form-cotizacion");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Evento personalizado: envío de formulario
      if (typeof ac === "function") {
        const destinoValue = destinoSelect ? destinoSelect.value : null;
        ac("record", "form_submit", {
          destino: destinoValue,
        });
      }

      console.log("Formulario de cotización enviado (demo)");

      alert(
        "Gracias por enviar tu cotización demo.\nEste formulario es solo para pruebas."
      );

      form.reset();
    });
  }
});
