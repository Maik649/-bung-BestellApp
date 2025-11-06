function deshesHeader() {
  return `<div class="content-header">
  
    <div class="content-header-menu">
        <img src="" alt="Menu-Icon">

        <div class="bewertungen">
         
            <p>Bewertungen: (${"4,2 - 5"})</p>
              <img id="star-img" src="../assets/img/stern.png" alt="star-Icon">
        </div>

        <div class="nav-section">
            <img id="nav-img" src="../assets/img/dm.png" alt="pfeil-Icon">
            <p>Hauptgerichte</p>
            <p>Beilagen</p>
        </div>
    </div>
</div>`;
}

function deshesContent() {
  return `<div class="deshe">
                    <div class="desh-header">
                        <img src="${""}" alt="Gerichte Bild">
                        <h2>${""}</h2>
                      
                    </div>
                    <div class="desh-content" id="desh-content">
                       <img src="${""}" alt="Icon">
                        <h3>${""}</h3>
                        <p>Preis: ${""} €</p>
                        p>${""}</p>
                    </div>
                    <div class="desh-footer">      
                        <button class="add-to-basket-btn" data-desh-id="${""}">In den Warenkorb</button>
                    </div>
                </div>
   `;
}
