function renderDishesNavi(array) {
  const dishesFrame = document.getElementById("deshes-content");
  dishesFrame.innerHTML = "";
  if (category) {
    for (let index = 0; index < array.length; index++) {
      const deshes = array[index];
      dishesFrame.innerHTML += getDefaultDeshes(deshes);
    }
 
  }
}

