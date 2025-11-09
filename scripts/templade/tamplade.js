
function getDeshesMenuTemplade(categorys) {
  return `
<div class="nav-section" onclick="renderDishesNavi(${categorys.name.toLowerCase()})">
      <img src="${categorys.img}" alt="category-icon">
      <span>${categorys.name}</span>
    </div>`;
}


function getDeshesTemplade(categorys) {
  return `
<div class="desh-content">
    <div class="deshes-img-content">
        <img src="${categorys.img}" alt="deshes-img">
    </div>
    <div class="dersh-description">
        <p>${categorys.name}</p>
    </div>
    <p>${categorys.description}</p>
     <p>${categorys.price},00 €</p>

    <div class="button-content">
        <button class="add-button">+</button>
    </div>
</div>`;
}

