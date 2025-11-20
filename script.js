const headerContent = document.getElementById("menu-header");
const mainContent = document.getElementById("dishes-content");
const dishesFrame = document.getElementById("dishes-content");
const gesamtPrice = document.getElementById("total-price-value");
const PriceVSal = document.getElementById("price-value");
const basketContent = document.getElementById("basket-container");
const myDialog = document.getElementById("myModal");
const openDialogs = document.querySelector("#myModal");
const addDishe = document.querySelector("#myModal2");
const button = document.getElementById("order-button");
const menuToggle = document.querySelectorAll("#header-content");
const menuContent = document.getElementById("menu-header");
const buttonWarenkorb = document.querySelector(".showlink");

function init() {
  renderHeaderMenu();
  renderDefaultDishes();
  getSupBasketPrice();
}

function renderHeaderMenu() {
  for (let menuindex = 0; menuindex < category.length; menuindex++) {
    const menuDishes = category[menuindex];
    headerContent.innerHTML += getHeaderMenu(menuDishes);
  }
}

function renderDishesNavi(array) {
  dishesFrame.innerHTML = "";
  if (category) {
    for (let index = 0; index < array.length; index++) {
      const deshes = array[index];
      dishesFrame.innerHTML += getDefaultDishes(deshes);
    }
  }
}

function renderDefaultDishes() {
  mainContent.innerHTML = "";
  for (let index = 0; index < dishes.length; index++) {
    const dishe = dishes[index];
    mainContent.innerHTML += getDefaultDishes(dishe);
  }
}

function renderBasketItem() {
 const basketItem = document.getElementById("basket-content");
  basketItem.innerHTML = "";
  for (let basketindex = 0; basketindex < baskets.length; basketindex++) {
    const basket = baskets[basketindex];
    basketItem.innerHTML += getRenderBasketItem(basket, basketindex);
  }
  disableButton();
}

function disableButton() {
  if (baskets.length <= 0) {
    button.setAttribute("disabled", true);
    button.style.backgroundColor = "rgba(117, 116, 115, 1)";
  } else {
    button.removeAttribute("disabled");
    button.style.backgroundColor = "rgb(255, 128, 0)";
  }
}

function addDishesToBasket(id) {
  let dish = dishes.find((dishe) => dishe.id === id);
  if (!dish) return;
  let basket = baskets.find((bask) => bask.id === dish.id);
  if (basket) {
    basket.amount = (basket.amount || 0) + 1;
  } else {
    const newItem = Object.assign({}, dish, { amount: dish.amount || 1 });
    baskets.push(newItem);
  }
  if (baskets.length > 0) {
      buttonWarenkorb.classList.add("showlinkIsOpen");
  }
  getSupBasketPrice();
  renderBasketItem();
}

function moreDishes(index) {
  const bask = baskets[index];
  if (!bask) return;
  bask.amount = (bask.amount || 0) + 1;
  getSupBasketPrice();
  renderBasketItem();
}

function fewerDishes(index) {
  const bask = baskets[index];
  if (!bask) return;
  bask.amount = (bask.amount || 0) - 1;
  if (bask.amount <= 0) {
    baskets.splice(index, 1);
  }
  getSupBasketPrice();
  renderBasketItem();
}

function removeDish(index){
  baskets.splice(index, 1);
  getSupBasketPrice();
  renderBasketItem();
}

function getSupBasketPrice() {
  let total = 0;
  for (let i = 0; i < baskets.length; i++) {
    const item = baskets[i];
    total += (item.amount || 0) * (item.price || 0);
  }
  const lieferKosten = total > 0 ? 3.5 : 0;
  const turtelGesamt = total + lieferKosten;
  if (gesamtPrice) {
    gesamtPrice.innerText = turtelGesamt.toFixed(2).replace(".", ",") + " €";
    PriceVSal.innerText = turtelGesamt.toFixed(2).replace(".", ",") + " €";;
    renderBasketItem();
  }
}

function toogleMenu() {
  for (let index = 0; index < menuToggle.length; index++) {
    const menuItem = menuToggle[index];
    menuItem.classList.toggle("isOpen");
  }
  menuContent.classList.toggle("isContentOpen");
}

let openWarenkorp = document.querySelector(".basket-container");
function openWarenkorb() {
  openWarenkorp.classList.toggle("isOpen");
  if (openWarenkorp) {
    window.scroll({
      top: 0,
    });
    document.body.style.overflow = "hidden";
  }
  renderBasketItem();
}

function removeBasket() {
  baskets.length = 0;
}

function openDialog() {
  openDialogs.classList.toggle("isOpen");
  myDialog.showModal();
  removeBasket();
  renderBasketItem();
  getSupBasketPrice();
  setTime = setTimeout(closeDialog, 900);
}

function closeDialog() {
  openDialogs.classList.remove("isOpen");
  addDishe.classList.remove("isOpen");
  buttonWarenkorb.classList.remove("showlinkIsOpen");
   openWarenkorp.classList.toggle("isOpen");
   document.body.style.overflow = "scroll";
  myDialog.close();
}
