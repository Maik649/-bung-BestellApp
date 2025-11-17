function init() {
  renderHeaderMenu();
  renderDefaultDeshes();
  renderBasket();
}

function renderHeaderMenu() {
  const headerContent = document.getElementById("menu-header");
  for (let menuindex = 0; menuindex < category.length; menuindex++) {
    const menuDishes = category[menuindex];
    headerContent.innerHTML += getHeaderMenu(menuDishes);
  }
}

function renderDifaultDeshes() {
  const mainContent = document.getElementById("dishes-content");
  mainContent.innerHTML = "";
  for (let index = 0; index < dishes.length; index++) {
    const dishe = dishes[index];
    mainContent.innerHTML += getDefaultDeshes(dishe);
  }
}

function renderBasket() {
  const basketContent = document.getElementById("basket-content");
  basketContent.innerHTML = "";
  for (let basketindex = 0; basketindex < baskets.length; basketindex++) {
    const basket = baskets[basketindex];
    basketContent.innerHTML += getRenderBasket(basket, basketindex);
  }
}

function addDeshesToBasket(id) {
  let dish = dishes.find((dishe) => dishe.id === id);
  if (!dish) return;
  let basket = baskets.find((bask) => bask.id === dish.id);
  if (basket) {
    basket.amount = (basket.amount || 0) + 1;
  }else{
   const newItem = Object.assign({}, dish, { amount: dish.amount || 1 });
    baskets.push(newItem);
  }
  getsupBasketPrice();
  renderBasket();
}

function moreDeshes(index) {
  const bask = baskets[index];
  if(!bask)return;
  bask.amount = (bask.amount || 0) + 1
   getsupBasketPrice();
   renderBasket();
}

function fewerDeshes(index) {
  const bask = baskets[index];
  if (!bask) return;
  bask.amount = (bask.amount || 0) - 1;
  if (bask.amount <= 0) {
    baskets.splice(index, 1);
  }
  getSupBasketPrice();
  renderBasket();
}

function getSupBasketPrice() {
  const gesamt = document.getElementById("total-price-value");
  let total = 0;
  for (let i = 0; i < baskets.length; i++) {
   const item = baskets[i];
   total += (item.amount || 0) * (item.price || 0);
  }
   const lieferKosten =  total > 0 ? 3.5 : 0;
   const turtelGesamt = total + lieferKosten;
   if(gesamt){
     gesamt.innerText = turtelGesamt.toFixed(2).replace(".", ",") + " €";
   }
  }

function toogleMenu() {
  let menuToggle = document.querySelectorAll("#header-content");
  let menuContent = document.getElementById("menu-header");
  for (let index = 0; index < menuToggle.length; index++) {
    const menuItem = menuToggle[index];
    menuItem.classList.toggle("isOpen");
  }
  menuContent.classList.toggle("isContentOpen");
}

function removeBasket() {
  baskets.length = 0;
}

let myDialog = document.getElementById("myModal"); 

function openDialog() {
 let openDialogs = document.querySelector("#myModal");
     openDialogs.classList.toggle("isOpen");
  myDialog.showModal();
  removeBasket();
  getsupBasketPrice();
  renderBasket();
  setTime = setTimeout(closeDialog, 2000); 
}

function closeDialog() {
  let openDialogs = document.querySelector("#myModal");
  openDialogs.classList.remove("isOpen");
  myDialog.close();
}