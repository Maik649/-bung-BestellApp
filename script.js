
function init() {
    renderDeshesHeader();
}

function renderDeshesHeader() {
  const mainContent = document.getElementById("menu-header");
  mainContent.innerHTML = "";

  for (
    let categoryindex = 0; categoryindex < category.length; categoryindex++) {
    let categorys = category[categoryindex];
    mainContent.innerHTML += getDeshesMenuTemplade(categorys);
  }
}


function renderDeshes() {
  const mainContent = document.getElementById("Content");
  mainContent.innerHTML = "";

 
}

