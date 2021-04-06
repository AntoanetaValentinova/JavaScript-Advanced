function solve(){
   let buttonCreate=document.querySelector('button[class="btn create"]').addEventListener('click',create);

   function archive (e) {
      let ol=Array.from(document.querySelectorAll('section[class="archive-section"] ol li'));
      let article=e.target.parentNode.parentNode;
      let text=article.querySelector('h1').textContent;
      article.remove();
      let liEl=document.createElement('li');
      liEl.textContent=text;
      ol.push(liEl);
      ol.sort((a,b)=>a.textContent.localeCompare(b.textContent));
      let oltO=document.querySelector('section[class="archive-section"] ol');
      ol.forEach(e=>oltO.appendChild(e));
   }


   function deleteIt(e) {
      e.target.parentNode.parentNode.remove();
   }
   function create(e) {
      e.preventDefault();
      let autor=document.querySelector('#creator').value;
      let title=document.querySelector('#title').value;
      let category=document.querySelector('#category').value;
      let content=document.querySelector('#content').value;
      let atricle=document.createElement('article');
      let h1=document.createElement('h1');
      h1.textContent=title;
      atricle.appendChild(h1);
      let p=document.createElement('p');
      p.textContent='Category:';
      let strong=document.createElement('strong');
      strong.textContent=category;
      p.appendChild(strong);
      atricle.appendChild(p);
      let p2=document.createElement('p');
      p2.textContent='Creator:';
      let strong2=document.createElement('strong');
      strong2.textContent=autor;
      p2.appendChild(strong2);
      atricle.appendChild(p2);
      let pText=document.createElement('p');
      pText.textContent=content;
      atricle.appendChild(pText);
      let div=document.createElement('div');
      div.classList.add('buttons');
      let btnDelete=document.createElement('button');
      btnDelete.setAttribute('class','btn delete');
      btnDelete.textContent='Delete';
      btnDelete.addEventListener('click',deleteIt);
      let btnArchive=document.createElement('button');
      btnArchive.setAttribute('class','btn archive');
      btnArchive.textContent='Archive';
      btnArchive.addEventListener('click',archive);
      div.appendChild(btnDelete);
      div.appendChild(btnArchive);
      atricle.appendChild(div);
      let mainSection=document.querySelector('main section');
      mainSection.appendChild(atricle);
   }
  }
