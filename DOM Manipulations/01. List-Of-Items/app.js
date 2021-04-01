function addItem() {
   
    let newAtribute=document.createElement('li');
    newAtribute.textContent=document.getElementById('newItemText').value;
    document.getElementById('items').appendChild(newAtribute);


}