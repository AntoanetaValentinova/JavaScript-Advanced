function solve() {
    document.querySelector('#add').addEventListener('click', add);
    let sections = Array.from(document.querySelectorAll('section'));

    function finish(e) {
        let article=e.target.parentNode.parentNode;
        let div=article.querySelector('div');
        div.remove();
        let sectionReady = sections[3];
        let divSectionReady=Array.from(sectionReady.querySelectorAll('div'))[1];
        divSectionReady.appendChild(article);
    }

    function deleteIt(e) {
        e.target.parentNode.parentNode.remove();
    }

    function start(e) {
        let article=e.target.parentNode.parentNode;
        let buttons=Array.from(article.querySelectorAll('button'));
        buttons[0].classList.remove('green');
        buttons[0].classList.add('red');
        buttons[0].textContent='Delete';
        buttons[0].addEventListener('click',deleteIt);
        buttons[1].classList.remove('red');
        buttons[1].classList.add('orange');
        buttons[1].textContent='Finish';
        buttons[1].addEventListener('click',finish);
        let sectionInProgress = sections[2];
        let divSectionInProgress=Array.from(sectionInProgress.querySelectorAll('div'))[1];
        divSectionInProgress.appendChild(article);

    }

    function add(e) {
        e.preventDefault();
        let isValid = true;
        let task = document.querySelector('#task').value;
        let description = document.querySelector('#description').value;
        let date = document.querySelector('#date').value;
        if (task === '' || description=== '' || date === '') {
            isValid = false;
        }
        if (isValid) {
            let atricle = document.createElement('article');
            let h3 = document.createElement('h3');
            h3.textContent = task;
            atricle.appendChild(h3);
            let p1 = document.createElement('p');
            p1.textContent = 'Description: ' + description;
            atricle.appendChild(p1);
            let p2 = document.createElement('p');
            p2.textContent = 'Due Date: ' + date;
            atricle.appendChild(p2);
            let div = document.createElement('div');
            div.classList.add('flex');
            let btn1 = document.createElement('button');
            btn1.classList.add('green');
            btn1.textContent = 'Start';
            btn1.addEventListener('click',start);
            div.appendChild(btn1);
            let btn2 = document.createElement('button');
            btn2.classList.add('red');
            btn2.textContent = 'Delete';
            btn2.addEventListener('click',deleteIt);
            div.appendChild(btn2);
            atricle.appendChild(div);
            let sectionOpen = sections[1];
            let divSectionOpen=Array.from(sectionOpen.querySelectorAll('div'))[1];
            console.log(divSectionOpen);
            divSectionOpen.appendChild(atricle);
            document.querySelector('#task').value='';
            document.querySelector('#description').value='';
           document.querySelector('#date').value='';
        }
       
    }
}