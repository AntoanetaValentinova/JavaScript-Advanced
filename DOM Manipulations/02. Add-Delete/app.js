function addItem() {

    //Create li element
    let newEl=document.createElement('li');
    newEl.textContent=document.getElementById('newText').value;

    //create button Delete
    let newButton=document.createElement('a');
    newButton.href="#";
    newButton.textContent=['[Delete]'];

    //add event listener
    newButton.addEventListener('click',onClick);
    function onClick(event) {
        event.target.parentNode.remove();
    }

    //append new elements
    newEl.appendChild(newButton);
    document.getElementById('items').appendChild(newEl);

}