function solution() {
    let uls=Array.from(document.querySelectorAll('section[class="card"] ul'));
  
 document.querySelector('section[class="card"] button').addEventListener('click',onClick);

    function send(e) {
        let liEl= e.target.parentNode;
        let buttons=Array.from(liEl.querySelectorAll('button'));
        buttons.forEach(b=>b.remove());
        let ulSend=uls[1];
        ulSend.appendChild(liEl);
    }
    function discard(e) {
        let liEl= e.target.parentNode;
        let buttons=Array.from(liEl.querySelectorAll('button'));
        buttons.forEach(b=>b.remove());
        let ulDiscard=uls[2];
        ulDiscard.appendChild(liEl); 
    }

    function onClick (e) {
        let giftName=document.querySelector('input[placeholder="Gift name"]').value;
        let ul=uls[0];
        let liEl=document.createElement('li');
        liEl.classList.add('gift');
        liEl.textContent=giftName;
        let sendBtn=document.createElement('button');
        sendBtn.setAttribute('id','sendButton');
        sendBtn.textContent='Send';
        sendBtn.addEventListener('click',send)
        liEl.appendChild(sendBtn);
        let discardButton=document.createElement('button');
        discardButton.setAttribute('id','discardButton');
        discardButton.textContent='Discard';
        discardButton.addEventListener('click',discard)
        liEl.appendChild(discardButton);
        let lis=Array.from(ul.children);
        lis.push(liEl);
        lis.sort((a,b)=>a.textContent.localeCompare(b.textContent))
        .forEach(e=>ul.appendChild(e));
        document.querySelector('input[placeholder="Gift name"]').value='';
    }
}