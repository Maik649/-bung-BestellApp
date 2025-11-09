function renderDishesNavi(array) {
  const dishesFrame = document.getElementById("deshContent");
  dishesFrame.innerHTML = "";
  if (category) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      dishesFrame.innerHTML += getDeshesTemplade(element);
    }
 
  }
}

