

function getSections(category) {
    let dishesHTML = '';
    if (category.items && category.items.length > 0) {
      for (let i = 0; i < category.items.length; i++) {
        dishesHTML += getDefaultDishes(category.items[i]);
      }
    }
  return `<section class="dishes-section">
               <h2>${category.name}</h2>
               <div id="dishes-content-${category.id}" class="dishes-content">
                 ${dishesHTML}
               </div>
            </section>`;
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
                <img onclick="removeDish(${index})" class"delete-item" src="${basket.icon}" alt="Papierkorp">
            </div>
          </div>`;
}