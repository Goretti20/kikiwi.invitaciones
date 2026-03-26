// Script para duplicar el caption en cada item del carrusel
document.addEventListener("DOMContentLoaded", function() {
  // Selecciona el caption único
  const caption = document.getElementById("globalCaption");
  // Selecciona todos los items del carrusel
  const items = document.querySelectorAll(".carousel-item");
  // Inserta una copia del caption en cada item
  items.forEach(item => {
    const clone = caption.cloneNode(true);
    item.appendChild(clone);
  });
  setTimeout(() => {
    caption.classList.add("visible");
  }, 300);

  const carousel = document.querySelector(".carousel-inner");
  window.addEventListener("scroll", function() {
    const carouselRect = carousel.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Cuando el carrusel ya no está visible
    if (carouselRect.bottom < windowHeight / 2) {
      caption.classList.add("black");
    } else {
      caption.classList.remove("black");
    }
  });
});

// Script para animar la sección de nuestra historia, mesa de regalos y dress code
document.addEventListener("DOMContentLoaded", function() {
  const historia = document.getElementById("historia");
  const mesaRegalos = document.getElementById("mesaRegalos");
  const dressCode = document.getElementById("dressCode");

  historia.addEventListener("shown.bs.collapse", function () {
    historia.classList.add("show"); // activa la animación
  });

  historia.addEventListener("hidden.bs.collapse", function () {
    historia.classList.remove("show"); // resetea al cerrar
  });
  mesaRegalos.addEventListener("shown.bs.collapse", function () {
    mesaRegalos.classList.add("show"); // activa la animación
  });

  mesaRegalos.addEventListener("hidden.bs.collapse", function () {
    mesaRegalos.classList.remove("show"); // resetea al cerrar
  }); 

  dressCode.addEventListener("shown.bs.collapse", function () {
    dressCode.classList.add("show"); // activa la animación
  });

  dressCode.addEventListener("hidden.bs.collapse", function () {
    dressCode.classList.remove("show"); // resetea al cerrar
  });

});

// Script para animar el itinerario
document.addEventListener("DOMContentLoaded", function() {
  const itinerario = document.getElementById("itinerario");
  const items = document.querySelectorAll("#itinerario .timeline-item");

  itinerario.addEventListener("shown.bs.collapse", function () {
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 300); // efecto escalonado
    });
  });

  itinerario.addEventListener("hidden.bs.collapse", function () {
    items.forEach(item => item.classList.remove("show"));
  });
});

// Script para animar la sección de mesa de regalos y dress code con efecto escalonado
document.addEventListener("DOMContentLoaded", function() {
  const mesaRegalos = document.getElementById("mesaRegalos");
  const cards = document.querySelectorAll("#mesaRegalos .gift-option");
  const dressCode = document.getElementById("dressCode");
  const dots = document.querySelectorAll("#dressCode .color-dot");

  mesaRegalos.addEventListener("shown.bs.collapse", function () {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 300); // efecto escalonado
    });
  });

  mesaRegalos.addEventListener("hidden.bs.collapse", function () {
    cards.forEach(card => card.classList.remove("show"));
  });

  dressCode.addEventListener("shown.bs.collapse", function () {
    dots.forEach((dot, index) => {
      setTimeout(() => {
        dot.classList.add("show");
      }, index * 200); // efecto escalonado
    });
  });

  dressCode.addEventListener("hidden.bs.collapse", function () {
    dots.forEach(dot => dot.classList.remove("show"));
  });  

});

// Script para manejar datos (ejemplo)
document.getElementById('confirmationForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const data = {
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        asistencia: document.querySelector('input[name="asistencia"]:checked').value
      };
      fetch("https://script.google.com/macros/s/AKfycbw8xT6Efjdzs4N2WTP8bu1Fk6yaFItPbUkCojAMxRc289VRoPCN800-Dk4jurf3vGs4/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"   // importante para que Apps Script entienda el JSON
        },
        body: JSON.stringify(data)
      })
      .then(response => response.text())
      .then(result => {
        alert("Respuesta del servidor: " + result); // aquí verás "OK" o "Error: ..."
      })
      .catch(error => {
        alert("Error en la petición: " + error);
      });
      console.log("Datos capturados:", data);
});




