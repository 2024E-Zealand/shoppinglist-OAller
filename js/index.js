//Write your Javascript code here
// Funktion til at oprette og returnere et nyt 'li' element
function createListItem(id, className, textContent) {
    // Opretter et nyt listeelement
    let li = document.createElement('li');
    
    // Sætter ID og klasse for elementet
    li.setAttribute('id', id);
    li.setAttribute('class', className);
    
    // Tilføjer tekst til elementet
    let textNode = document.createTextNode(textContent);
    li.appendChild(textNode);
    
    // Returnerer det færdige element
    return li;
}

// Tilføjer et nyt element til listen når siden indlæses
function testCreateListItem() {
    // Henter den eksisterende liste fra siden
    let list = document.getElementById('list');
    
    // Skaber og tilføjer et nyt 'li' element til listen
    let newItem = createListItem('4', 'healthy', 'Broccoli');
    list.appendChild(newItem);
}

// Udfører testCreateListItem når dokumentet er klar
// document.addEventListener('DOMContentLoaded', testCreateListItem);

console.log("Shoppinglist")