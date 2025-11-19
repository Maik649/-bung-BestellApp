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

function getRenderBasket(basket, index) {
 
  return `<div class="isDish">
          <p>${basket.name}</p>
        <p>${basket.price.toFixed(2).replace(".", ",") + "€"}</p>
          <button onclick="moreDishes(${index})">+</button>
            <span>${basket.amount}</span>
          <button onclick="fewerDishes(${index})">-</button> 
          <img onclick="fewerDishes(${index})" class"delete-item" src="${basket.icon}" alt="Papierkorp">
          </div>`;
}