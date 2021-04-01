function solve() {
  let generateButton=document.querySelectorAll('button')[0].addEventListener('click',addFurniture);
  let buyButton=document.querySelectorAll('button')[1].addEventListener('click',buy);
  let table=document.querySelector('tbody');

  function buy(ev) {
    let checkedFields=document.querySelectorAll('input[type="checkbox"]');
    let furnitures=[];
    let totalSum=0;
    let decFactor=0;
    for (let i = 0; i < checkedFields.length; i++) {
      if (checkedFields[i].checked) {
        let furnitureName=checkedFields[i].parentNode.parentNode.children[1].textContent;
        console.log(furnitureName);
        furnitures.push(furnitureName);
        totalSum+=Number(checkedFields[i].parentNode.parentNode.children[2].textContent);
        decFactor+=Number(checkedFields[i].parentNode.parentNode.children[3].textContent);
      }
    }
    decFactor/=furnitures.length;
    document.querySelectorAll('textarea')[1].value=`Bought furniture: ${furnitures.join(', ')}\n`+
                `Total price: ${totalSum.toFixed(2)}\n`+
                `Average decoration factor: ${decFactor}`;
    
  }
  
  function addFurniture (ev) {
    let furnituresArr=JSON.parse(document.querySelectorAll('textarea')[0].value);
    for (let i = 0; i < furnituresArr.length; i++) {
      const currentFurniture=furnituresArr[i];
      const trEl=document.createElement('tr');
      const tdImgEl=document.createElement('td');
      const imgSrc=document.createElement('img');
      imgSrc.setAttribute('src',currentFurniture.img);
      tdImgEl.appendChild(imgSrc);
      trEl.appendChild(tdImgEl);
      const tdNameEl=document.createElement('td');
      const pNameEl=document.createElement('p');
      pNameEl.textContent=currentFurniture.name;
      tdNameEl.appendChild(pNameEl);
      trEl.appendChild(tdNameEl);
      console.log(trEl)
      const tdPriceEl=document.createElement('td');
      const pPriceEl=document.createElement('p');
      pPriceEl.textContent=currentFurniture.price;
      tdPriceEl.appendChild(pPriceEl);
      trEl.appendChild(tdPriceEl);
      const tdDecEl=document.createElement('td');
      const pDecEl=document.createElement('p');
      pDecEl.textContent=currentFurniture.decFactor;
      tdDecEl.appendChild(pDecEl);
      trEl.appendChild(tdDecEl);
      const tdCheckbox=document.createElement('td');
      const inputEl=document.createElement('input');
      inputEl.setAttribute('type','checkbox');
      tdCheckbox.appendChild(inputEl);
      trEl.appendChild(tdCheckbox);
      table.appendChild(trEl);
      
    }
  }
 

}