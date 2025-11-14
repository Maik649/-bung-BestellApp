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
          <button onclick="moreDeshes(${(basket.id)})">+</button>
            <span>${basket.amount}</span>
          <button onclick="fewerDeshes(${(basket.id)})">-</button>`;
  }
}

function addDeshesToBasket(index) {
  if (dishes.length > 0) {
    let newDishes = dishes[index];
    baskets.push(newDishes);
    getsupBasketPrice(baskets);
    renderBasket(baskets);
  }
}

function moreDeshes(index) {
  if (baskets.length > 0) {
    //let gesamt = document.getElementById("total-price-value");
    //let lieferKosten = 3.5;
    //let price = baskets[index].price;
    let amount = 1;
        amount += baskets[index].amount++;
    //let totalPric = amount * price;
    //let zuZahlen = lieferKosten + totalPric;
    //console.log(amount);
    //gesamt.innerText = zuZahlen.toFixed(2).replace(".", ",") + " €";
    //getsupBasketPrice(baskets);
    renderBasket(baskets);
  }
}

// Todo Berechnung nicht ins minus gehen lassen wenn unter 0 removen

function fewerDeshes(index) {
  if (baskets.length > 0) {
    //let gesamt = document.getElementById("total-price-value");
    //let price = baskets[index].price;
    let amount = 1;
    //let totalPric = amount * price;
        amount += baskets[index].amount--;
    //console.log(amount, totalPric);
    //getsupBasketPrice(baskets);
    renderBasket(baskets);
    //Object.keys(baskets).length
    //return
  }
}

function getsupBasketPrice() {
  for (let i = 0; i < baskets.length; i++) {
    let gesamt = document.getElementById("total-price-value");
    let lieferKosten = 3.5;
    const turtelPrice = baskets[i].amount * baskets[i].price +lieferKosten;
    let turtelGesamt = turtelPrice * baskets.length;
    gesamt.innerText = turtelGesamt.toFixed(2).replace(".", ",") + " €";
    console.log(turtelPrice);
    renderBasket(baskets);
    return
  }
}
