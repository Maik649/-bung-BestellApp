

function getCategoryHeader() {
    return `
    <div class="content-header">
    </div>
    `;
}




function getDeshesHeaderTemplade(categoryindex) {
  return `
    <div class="nav-section">
    <div class="nav-header">
    <img id="nav-img" src="../assets/img/icons/dm.png" alt="pfeil-Icon">
    <h3>${category[categoryindex].name}</h3>
    <img src="${category[categoryindex].img}" alt="category-icon">
    </div>
    <div class="bewertungen">
    <p>Bewertungen: (${category[categoryindex].bewertung})</p>
                <img id="star-img" src="../assets/img/icons/stern.png" alt="star-Icon">
            </div>
</div>`;
}

function deshesContent() {
  return `<div class="deshes-content">
                
                </div>`;
}
