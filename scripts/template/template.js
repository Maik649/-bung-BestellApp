function getHeaderMenu(category) {
  return `<div onclick="renderDishesNavi(${category.selector})" id="header-content" class="headerContent">
                <li>${category.name}</li>
                </div>`;
}

function getDefaultDishes(dishe) {
  return `<div id="dishes-card" class="dishes-card">
      <img src="${dishe.img}" alt="${dishe.name}">
       <p>${dishe.name}</p>
       <p>${dishe.description}</p>
       <p>${dishe.price.toFixed(2).replace(".", ",") + " €"}</p>
       <button onclick="addDishesToBasket(${dishe.id})"class="add-to-basket-button">+</button>
    </div>`;
}

function getRenderBasket() {
  return `<div class="basket-header">
                        <h2>Warenkorb</h2>
                    </div>
                    <div id="basket-content" class="basket-content">
                    
                    </div>
                    <div class="basket-footer">
                        <span>Lieferkosten: 3,50€</span>
                        <div class="total-price">
                            <span>Gesamt:</span>
                            <span id="total-price-value">0,00 €</span>
                        </div>
<button onclick="openDialog()" id="order-button" class="order-button">Bestellen</button>`;
}

function getRenderBasketItem(basket, index) {
  return `<div class="isDish">
            <div class="dish-head">
              <p>${basket.name}</p>
              <p>${basket.price.toFixed(2).replace(".", ",") + "€"}</p>
            </div> 
            <div class="dish-body">
              <button onclick="moreDishes(${index})">+</button>
                <span>${basket.amount}</span>
              <button onclick="fewerDishes(${index})">-</button> 
                <img onclick="removeDish(${index})" class"delete-item" src="${
    basket.icon
  }" alt="Papierkorp">
            </div>
          </div>`;
}