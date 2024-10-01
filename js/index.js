//Write your Javascript code here

// Funktion til at oprette og returnere et nyt 'li' element
function createListItem(id, className, textContent) {
    let li = document.createElement('li');
    li.setAttribute('id', id);
    li.setAttribute('class', className);
    let textNode = document.createTextNode(textContent);
    li.appendChild(textNode);
    return li;
}

// Funktion til at tilføje et 'li' element til en specifik liste
function appendListItem(listId, liElement) {
    let list = document.getElementById(listId);
    list.appendChild(liElement);
}

// Tilføjer et nyt element til listen når siden indlæses
function testAppendListItem() {
    // Skaber og tilføjer et nyt 'li' element til listen 'list'
    let newItem = createListItem('4', 'healthy', 'Broccoli');
    appendListItem('list', newItem);
}

// Udfører testAppendListItem når dokumentet er klar
document.addEventListener('DOMContentLoaded', testAppendListItem);

console.log("Shoppinglist initialized");
