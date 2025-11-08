
function getDeshesHeaderTemplade(categoryindex) {
  return `
<div class="nav-section">
<div class="figger-haeder">
<img src="${category[categoryindex].img}" alt="category-icon">
</div>
<h3>${category[categoryindex].name}</h3>

    <div class="bewertungen">
    <p>Bewertungen: (${category[categoryindex].bewertung})</p>
    <img id="star-img" src="../assets/img/icons/stern.png" alt="star-Icon">
    </div>
    
   <div id="menu-header" class="main-header">
    <img onclick="onToggle()" id="nav-img" src="../assets/img/icons/dm.png" alt="pfeil-Icon"></img>
    <link>Hauptmenu</link>
    <link></link>
    <link></link>
</div>
</div>
 <div id="deshes" class"is-close" class="">
                    <h3 id="deshesH3" class"h3" class="">Test</h3>
                </div>
`;
}

