function init() {
  renderDefaultDeshes();
  renderBasket();
}

function renderDefaultDeshes() {
  const mainContent = document.getElementById("deshes-content");
  mainContent.innerHTML = "";
  for (let index = 0; index < dishes.length; index++) {
    const dishe = dishes[index];
    mainContent.innerHTML += `
    <div id="dishes-card" class="dishes-card">
      <img src="${dishe.img}" alt="${dishe.name}">
       <p>${dishe.name}</p>
       <p>${dishe.description}</p>
       <p>${dishe.price.toFixed(2)} €</p>
       <button onclick="addDeshesToBasket(${
         dishe.id
       })"class="add-to-basket-button">+</button>
    </div>`;
  }
}

function renderBasket() {
  const basketContent = document.getElementById("basket-content");
  basketContent.innerHTML = "";
  for (let basketindex = 0; basketindex < baskets.length; basketindex++) {
    const basket = baskets[basketindex];
    basketContent.innerHTML += `
        <img class="dishes-img" src="${basket.img}" alt=""${basket.name}>
          <button onclick="moreDeshes( ${(event, basket.id)})">+</button>
            <span>${basket.amount}</span>
          <button onclick="fewerDeshes(${(basket.id)})">-</button>`;
  }
}

function addDeshesToBasket(index) {
  if (dishes.length > 0) {
    let newDishes = dishes[index];
    baskets.push(newDishes);
    renderBasket(baskets);
  }
}

function moreDeshes(index, event) {
 
  
  if (Object.keys(baskets).length) {
    let lieferKosten = 3.5;
     let gesamt = document.getElementById("total-price-value");
     let price = baskets[index].price;
     let amount = 1;
     amount += baskets[index].amount++;
     let totalPric = amount * price;
     let zuZahlen = lieferKosten + totalPric;
    console.log(amount, totalPric);
    gesamt.innerText = zuZahlen.toFixed(2).replace(".", ",") + " €";
    renderBasket(baskets);
    event.stopPropagation();
    return;
  }
}

// Todo Berechnung nicht ins minus gehen lassen wenn unter 0 removen

function fewerDeshes(index) {
  
  
  if (Object.keys(baskets).length) {
    let gesamt = document.getElementById("total-price-value");
    let lieferKosten = 3.5;
    let price = baskets[index].price;
    let amount= 1;
    let totalPric = amount * price;
    amount += baskets[index].amount--;
    let zuZahlen = lieferKosten + totalPric;
    console.log(amount, totalPric);
    gesamt.innerText = zuZahlen.toFixed(2).replace(".", ",") + " €";
    renderBasket(baskets);
    return
  }
}

