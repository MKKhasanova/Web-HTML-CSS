const productTemplate = (imageSrc, price, productName, availability, availabilityGray) => {
    return `
      <div class="product">
        <div class="image">
          <img src="${imageSrc}" alt="" width="300" height="200">
        </div>
        <div class="info">
          <span class="price font2">${price}</span>
          <p class="product-name font1">${productName}</p>
          <p class="availability font1">${availability}</p>
          <p class="availabilitygray font3">${availabilityGray}</p>
          <ul class="rating">
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
              <li><i class="fa-solid fa-star"></i></li>
          </ul>
          <div class="info-price">
            <span class="buyinoneclick font4">Купить в один клик</span>
            <div class="cart-buttons" style="display: none;">  
              <button class="decrease-btn" onclick="decreaseQuantity()">-</button>
              <span class="quantity">0</span>
              <button class="increase-btn" onclick="increaseQuantity()">+</button>  
            </div>                       
            <button class="add-to-cart-btn" onclick="addToCart()"><i class="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      </div>
    `;
  };
  const kanefronData = {
    imageSrc: 'img/канефрон1.png',
    price: 'от 230₽',
    productName: 'Канефрон Н таб №60',
    availability: 'В наличии в 646 аптеках',
    availabilityGray: 'Под заказ в 656 аптеках'
  };
  
  const kreonData = {
    imageSrc: 'img/креон.png',
    price: 'от 276₽',
    productName: 'Креон ® 10 000 капсулы №20',
    availability: 'В наличии в 512 аптеках',
    availabilityGray: 'Под заказ в 612 аптеках'
  };
  
  const kanefronHtml = productTemplate(kanefronData.imageSrc, kanefronData.price, kanefronData.productName, kanefronData.availability, kanefronData.availabilityGray);
  const kreonHtml = productTemplate(kreonData.imageSrc, kreonData.price, kreonData.productName, kreonData.availability, kreonData.availabilityGray);
  
  document.querySelector('.kanefron').innerHTML = kanefronHtml;
  document.querySelector('.kreon').innerHTML = kreonHtml;
    