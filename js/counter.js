let kanefronQuantity = 0;
let kreonQuantity = 0;
let pentalginQuantity = 0;
let rengalinQuantity = 0;

function kanefronAddToCart() {
  kanefronQuantity++;
  updateKanefronQuantity();
}

function kreonAddToCart() {
  kreonQuantity++;
  updateKreonQuantity();
}

function pentalginAddToCart() {
  pentalginQuantity++;
  updatePentalginQuantity();
}

function rengalinAddToCart() {
  rengalinQuantity++;
  updateRengalinQuantity();
}

function decreaseKanefronQuantity() {
  if (kanefronQuantity > 0) {
    kanefronQuantity--;
    updateKanefronQuantity();
  }
}

function decreaseKreonQuantity() {
  if (kreonQuantity > 0) {
    kreonQuantity--;
    updateKreonQuantity();
  }
}

function decreasePentalginQuantity() {
  if (pentalginQuantity > 0) {
    pentalginQuantity--;
    updatePentalginQuantity();
  }
}

function decreaseRengalinQuantity() {
  if (rengalinQuantity > 0) {
    rengalinQuantity--;
    updateRengalinQuantity();
  }
}

function increaseKanefronQuantity() {
  kanefronQuantity++;
  updateKanefronQuantity();
}

function increaseKreonQuantity() {
  kreonQuantity++;
  updateKreonQuantity();
}

function increasePentalginQuantity() {
  pentalginQuantity++;
  updatePentalginQuantity();
}

function increaseRengalinQuantity() {
  rengalinQuantity++;
  updateRengalinQuantity();
}

function updateKanefronQuantity() {
  const kanefronQuantityElement = document.querySelector('.kanefron-quantity');
  kanefronQuantityElement.textContent = kanefronQuantity;
  
  const kanefronCartButtons = document.getElementById('kanefron-cart-buttons');
  const kanefronAddToCartBtn = document.getElementById('kanefron-add-to-cart-btn');
  
  if (kanefronQuantity > 0) {
    kanefronCartButtons.style.display = 'flex';
    kanefronAddToCartBtn.style.display = 'none';
  } else {
    kanefronCartButtons.style.display = 'none';
    kanefronAddToCartBtn.style.display = 'block';
  }
}

function updateKreonQuantity() {
  const kreonQuantityElement = document.querySelector('.kreon-quantity');
  kreonQuantityElement.textContent = kreonQuantity;
  
  const kreonCartButtons = document.getElementById('kreon-cart-buttons');
  const kreonAddToCartBtn = document.getElementById('kreon-add-to-cart-btn');
  
  if (kreonQuantity > 0) {
    kreonCartButtons.style.display = 'flex';
    kreonAddToCartBtn.style.display = 'none';
  } else {
    kreonCartButtons.style.display = 'none';
    kreonAddToCartBtn.style.display = 'block';
  }
}

function updatePentalginQuantity() {
  const pentalginQuantityElement = document.querySelector('.pentalgin-quantity');
  pentalginQuantityElement.textContent = pentalginQuantity;
  
  const pentalginCartButtons = document.getElementById('pentalgin-cart-buttons');
  const pentalginAddToCartBtn = document.getElementById('pentalgin-add-to-cart-btn');
  
  if (pentalginQuantity > 0) {
    pentalginCartButtons.style.display = 'flex';
    pentalginAddToCartBtn.style.display = 'none';
  } else {
    pentalginCartButtons.style.display = 'none';
    pentalginAddToCartBtn.style.display = 'block';
  }
}

function updateRengalinQuantity() {
  const rengalinQuantityElement = document.querySelector('.rengalin-quantity');
  rengalinQuantityElement.textContent = rengalinQuantity;
  
  const rengalinCartButtons = document.getElementById('rengalin-cart-buttons');
  const rengalinAddToCartBtn = document.getElementById('rengalin-add-to-cart-btn');
  
  if (rengalinQuantity > 0) {
    rengalinCartButtons.style.display = 'flex';
    rengalinAddToCartBtn.style.display = 'none';
  } else {
    rengalinCartButtons.style.display = 'none';
    rengalinAddToCartBtn.style.display = 'block';
  }
}
