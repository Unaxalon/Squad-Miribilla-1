// ==== CARRITO SQUAD MIRIBILLA ====

// Array donde guardamos los productos añadidos
let carrito = [];

// Buscar los botones de "Añadir al carrito"
const botones = document.querySelectorAll(".addToCart");

// Cuando se haga clic en un botón, añadir el producto
botones.forEach(boton => {
  boton.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    const nombre = card.querySelector(".nombre").innerText;
    const precio = card.querySelector(".precio").innerText;
    
    carrito.push({ nombre, precio });
    actualizarCarrito();
  });
});

// Mostrar carrito en modal o alerta
function actualizarCarrito() {
  const carritoDiv = document.getElementById("cartModal");
  if (!carritoDiv) {
    alert("Carrito actualizado: " + carrito.length + " productos");
    return;
  }

  carritoDiv.innerHTML = `
    <div class="bg-white p-6 rounded-2xl shadow-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80">
      <h2 class="text-xl font-bold mb-4 text-center">🛒 Tu carrito</h2>
      <ul class="mb-4">
        ${carrito.map(p => <li>${p.nombre} - ${p.precio}</li>).join("")}
      </ul>
      <button id="cerrarCarrito" class="w-full bg-pink-600 text-white py-2 rounded">Cerrar</button>
    </div>
  `;

  document.getElementById("cerrarCarrito").onclick = () => {
    carritoDiv.innerHTML = "";
  };
}
