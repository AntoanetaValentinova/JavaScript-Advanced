function solve() {
    let button=document.querySelector('button').addEventListener('click',onScreen);
    let movies=document.querySelector('#movies ul');
    let archiveList=document.querySelector('#archive ul');
    document.querySelector('#archive').lastElementChild.addEventListener('click',clear);

    function clear (e) {
        let liElements=Array.from(document.querySelectorAll('#archive ul li')).forEach(li=>li.remove());
    }

    function onScreen (e) {
        e.preventDefault();
        let inputs=Array.from(document.querySelectorAll('#container input'));
        let name=inputs[0].value;
        let hall=inputs[1].value;
        let price=inputs[2].value; 
        if (name!==''&&hall!==''&&price!==''&&Number(price)) {
            let liEl=document.createElement('li');
            let spanEl=document.createElement('span');
            spanEl.textContent=name;
            liEl.appendChild(spanEl);
            let strongEl=document.createElement('strong');
            strongEl.textContent='Hall: '+hall;
            liEl.appendChild(strongEl);
            inputs.forEach(input=>input.value='');
            let divEl=document.createElement('div');
            let divStrong=document.createElement('strong');
            divStrong.textContent=Number(price).toFixed(2);
            divEl.appendChild(divStrong);
            let divInput=document.createElement('input');
            divInput.setAttribute('placeholder','Tickets Sold');
            divEl.appendChild(divInput);
            let divButton=document.createElement('button');
            divButton.textContent='Archive';
            divButton.addEventListener('click',archive);
            divEl.appendChild(divButton);
            liEl.appendChild(divEl);
            movies.appendChild(liEl);
        }
    }

    function archive (e) {
        let countTickets=Number(e.target.parentNode.querySelector('input').value);
        if (Number(countTickets)) {
            let movieName=e.target.parentNode.parentNode.querySelector('span').textContent;
            let price=Number(e.target.parentNode.querySelector('strong').textContent);
            let totalPrice=countTickets*price;
            e.target.parentNode.parentNode.remove();
            let liEl=document.createElement('li');
            let spanEl=document.createElement('span');
            spanEl.textContent=movieName;
            liEl.appendChild(spanEl);
            let strong=document.createElement('strong');
            strong.textContent='Total amount: '+totalPrice.toFixed(2);
            liEl.appendChild(strong);
            let deleteBtn=document.createElement('button');
            deleteBtn.textContent='Delete';
            liEl.appendChild(deleteBtn);
            deleteBtn.addEventListener('click',deleteLI);
            archiveList.appendChild(liEl);
        }
    }

    function deleteLI (e) {
        e.target.parentNode.remove();
    }
}