function addPlayer() {
    //getting the entered string from html
    let value = document.getElementById('name').value;
    //putting the value in a text node
    let newText = document.createTextNode(value);
    //Creating an element, appending the text node to the element
    let newEl = document.createElement('p');
    newEl.appendChild(newText);
    //inserting the element into the document
    document.body.insertBefore(newEl,div1);
}