function addItem() {
    let text=document.getElementById('newItemText').value;
    let value=document.getElementById('newItemValue').value;
    let newElement=document.createElement('option');
    newElement.value=value;
    newElement.textContent=text;
    let menu=document.getElementById('menu');
    menu.appendChild(newElement);
    document.getElementById('newItemText').value='';
    document.getElementById('newItemValue').value='';
}