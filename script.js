// ===============================
// 🛒 Carrito simple con WhatsApp
// ===============================

let cart = JSON.parse(localStorage.getItem('sqm_cart_v1')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('sqm_cart_v1', JSON.stringify(cart));
  updateCartCount();
  alert(${name} añadido al carrito);
}

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = cart.length;
}

function openCart() {
  if (cart.length === 0) {
    alert('Tu carrito está vacío.');
    return;
  }

  const total = cart.reduce((s, i) => s + Number(i.price), 0);
  const lines = cart.map((i) => ${i.name} (${i.price}€)).join('\n');

  // 👉 Cambia aquí tu número de WhatsApp (sin signos)
  const waNumber = '34641683104'; 
  const message = encodeURIComponent(Hola Squad Miribilla 👋\nQuiero hacer este pedido:\n${lines}\n\nTotal: ${total}€);
  window.open(https://wa.me/${waNumber}?text=${message}, '_blank');
}

// Conectar el botón del carrito (si existe)
const cartButton = document.getElementById('cartButton');
if (cartButton) cartButton.addEventListener('click', openCart);

// Actualizar contador al cargar
updateCartCount();
