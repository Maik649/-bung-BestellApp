function getHeaderMenu(category) {
  return `<div onclick="renderDishesNavi(${category.name})" id="header-content" class="headerContent">
                <li>${category.name}</li>
                </div>`;
}

function getDefaultDeshes(dishe) {
  return `<div id="dishes-card" class="dishes-card">
      <img src="${dishe.img}" alt="${dishe.name}">
       <p>${dishe.name}</p>
       <p>${dishe.description}</p>
       <p>${dishe.price.toFixed(2).replace('.', ',')} €</p>
       <button onclick="addDeshesToBasket(${dishe.id})"class="add-to-basket-button">+</button>
    </div>`;
}

function getRenderBasket(basket, index) {
  return `<div class="isDesh">
        <img class="dishes-img" src="${basket.img}" alt=""${basket.name}>
          <button onclick="moreDeshes(${index})">+</button>
            <span>${basket.amount}</span>
          <button onclick="fewerDeshes(${index})">-</button> </div>`;
}