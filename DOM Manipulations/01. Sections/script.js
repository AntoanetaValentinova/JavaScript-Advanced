function create(words) {
  let divElements=[];
  let result=document.querySelector('#content');
   words.forEach(word=>{
      let divEl=document.createElement('div');
      divEl.addEventListener('click',onClick);
      let pEl=document.createElement('p');
      pEl.textContent=word;
      pEl.style.display='none';
      divEl.appendChild(pEl);
      result.appendChild(divEl);
      divElements.push(divEl);
   })

   function onClick(ev) {
      ev.target.children[0].style.display='block';
   }
 
}