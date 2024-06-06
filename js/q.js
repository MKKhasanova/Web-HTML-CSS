
    function decreaseKanefronQuantity() {
        // Создаем новый элемент с информацией о товаре
        var product = document.createElement("p");
        product.textContent = "Товар";

        // Добавляем товар в контейнер
        var container = document.getElementById("selected-products-container");
        container.appendChild(product);
    }

    function removeFromCart() {
        // Получаем контейнер и его дочерние элементы (товары)
        var container = document.getElementById("selected-products-container");
        var products = container.getElementsByTagName("p");

        // Удаляем последний товар из контейнера (если есть)
        if (products.length > 0) {
            container.removeChild(products[products.length - 1]);
        }
    }
