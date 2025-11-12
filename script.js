function init() {
  renderDefaultDeshes();
  renderBasket();
  name();
}

function renderDefaultDeshes() {
  const mainContent = document.getElementById("deshes-content");
  mainContent.innerHTML = "";
  for (let index = 0; index < dishes.length; index++) {
    const dishe = dishes[index];
    mainContent.innerHTML += `<div id="dishes-card" class="dishes-card">
                        <img src="${dishe.img}" alt="${dishe.name}">
                        <p>${dishe.name}</p>
                        <p>${dishe.description}</p>
                        <p>${dishe.price.toFixed(2)} €</p>
                        <button onclick="addDeshesToBasket(id, ${dishe.id})"class="add-to-basket-button">+</button>
                    </div>`;
  }
}

function renderBasket() {
  const basketContent = document.getElementById("basket-content");
  basketContent.innerHTML = "";
        
  for (let basketindex = 0; basketindex < baskets.length; basketindex++) {
    const basket = baskets[basketindex];
    basketContent.innerHTML += `
       <button>+</button>
        <span>${basket.id}</span>
        <img class="dishes-img" src="${basket.img}" alt=""${basket.name}>
        <button>-</button>
  `;}
}

function addDeshesToBasket(id, index) {
  if (dishes.length > 0) {
    let newDishes = dishes[index];
    baskets.push(newDishes);
    renderBasket(baskets);
  }
}

function name(basketindex) {
  renderBasket(basketindex) ? "Warenkorb ist Leer" : renderBasket(basketindex);
}; 
