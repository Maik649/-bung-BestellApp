



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
   
function renderBookCard() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  for (let bookindex = 0; bookindex < books.length; bookindex++) {
    content.innerHTML += bookCard(bookindex);
    renderComment(bookindex);
  }
}