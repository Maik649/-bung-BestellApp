
function init() {
    render();
}

function render() {
 renderDeshesHeader();
}

function renderDeshesHeader() {
  const mainContent = document.getElementById("content");
  mainContent.innerHTML = "";
  
  for (let categoryindex = 0; categoryindex < category.length; categoryindex++) {
    
          mainContent.innerHTML += getDeshesHeaderTemplade(categoryindex);
      }
}


