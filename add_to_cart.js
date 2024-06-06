function addToCart(product) {
    var imageSrc = ""; // Путь к изображению выбранного товара
    var quantity = 0; // Количество выбранного товара
  
    // В зависимости от выбранного товара обновляем значения переменных imageSrc и quantity
  
    // Далее обновляем значения на странице
    document.getElementById(product + "-image").src = imageSrc; // Обновляем изображение товара
    document.querySelector("." + product + "-quantity").textContent = quantity; // Обновляем количество товара
  
    // Добавьте свой код для обработки добавления товара в корзину
  }
  
  function increaseQuantity(product) {
    var quantityElement = document.querySelector("." + product + "-quantity");
    var quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
  }
  
  function decreaseQuantity(product) {
    var quantityElement = document.querySelector("." + product + "-quantity");
    var quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
    }
  }
  