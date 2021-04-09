function solve() {
    document.querySelector('.form-control button').addEventListener('click', onClick);
    let modules = [];

    function onClick(e) {
        e.preventDefault();
        let isInputValid = true;
        let lectureInput = document.querySelector('input[name="lecture-name"]').value;
        if (lectureInput === '' || lectureInput.trim() === '') {
            isInputValid = false;
        }
        let dateInput = document.querySelector('input[name="lecture-date"]').value;
        if (dateInput === '' || dateInput.trim() === '') {
            isInputValid = false;
        }

        let selectInput = document.querySelector('select[name="lecture-module"]').value;
        if (selectInput === undefined) {
            isInputValid = false;
        }
        if (isInputValid) {
            let textContentModule = selectInput.toUpperCase() + '-MODULE';

            if (!modules.includes(selectInput)) {
                modules.push(selectInput);
                let divEl = document.createElement('div');
                divEl.classList.add('module');
                let h3El = document.createElement('h3');
                h3El.textContent = selectInput.toUpperCase() + '-MODULE';
                divEl.appendChild(h3El);
                let ulEl = document.createElement('ul');
                let liEl = document.createElement('li');
                liEl.classList.add('flex');
                let h4El = document.createElement('h4');
                let date = dateInput.substring(0, 4) + "/" + dateInput.substring(5, 7) + '/' + dateInput.substring(8, 10) + ' - ' + dateInput.substring(11, dateInput.length);
                h4El.textContent = `${lectureInput} - ${date}`;
                liEl.appendChild(h4El);
                let button = document.createElement('button');
                button.addEventListener('click',deleteEl);
                button.textContent = 'Del';
                button.classList.add('red');
                liEl.appendChild(button);
                ulEl.appendChild(liEl);
                divEl.appendChild(ulEl);
                document.querySelector('.modules').appendChild(divEl);
            } else {
                let modules = Array.from(document.querySelectorAll('div[class="module"]'));
                let existingModule = '';
                for (let i = 0; i < modules.length; i++) {
                    let currentH4 = modules[i].querySelector('h3').textContent;
                    if (currentH4 === textContentModule) {
                        existingModule = modules[i];
                    }
                }
                let existingUl=existingModule.querySelector('ul');
                let existinLiElements=Array.from(existingUl.querySelectorAll('li'));
                let liEl = document.createElement('li');
                liEl.classList.add('flex');
                let h4El = document.createElement('h4');
                let date = dateInput.substring(0, 4) + "/" + dateInput.substring(5, 7) + '/' + dateInput.substring(8, 10) + ' - ' + dateInput.substring(11, dateInput.length);
                h4El.textContent = `${lectureInput} - ${date}`;
                liEl.appendChild(h4El);
                let button = document.createElement('button');
                button.addEventListener('click',deleteEl);
                button.textContent = 'Del';
                button.classList.add('red');
                liEl.appendChild(button);
                existinLiElements.push(liEl);
                existinLiElements.sort((li1,li2)=> {
                    let one=li1.querySelector('h4').textContent;
                    let indexStart=one.indexOf('-')+2;
                    one=one.slice(indexStart,one.length);
                    //2021/02/11 - 16:57
                    //let birthday = new Date('1995-12-17T03:24:00')
                    let year=one.slice(0,4);
                    let month=one.slice(5,7);
                    let day=one.slice(8,10);
                    let hours=one.slice(13,15);
                    let minutes=one.slice(16,18);
                    let dateOne=new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`)
                    
                    
                    let two=li2.querySelector('h4').textContent;
                    let indexStart2=two.indexOf('-')+2;
                    two=two.slice(indexStart2,two.length);
                    let year2=two.slice(0,4);
                    let month2=two.slice(5,7);
                    let day2=two.slice(8,10);
                    let hours2=two.slice(13,15);
                    let minutes2=two.slice(16,18);
                    let dateTwo=new Date(`${year2}-${month2}-${day2}T${hours2}:${minutes2}:00`)
                    
                    return dateOne.getTime()-dateTwo.getTime();
                })
                existinLiElements.forEach(e=>console.log(e.textContent))
                existinLiElements.forEach(e=>existingUl.appendChild(e));
            }
        }
    }

    function deleteEl (e) {
       
        let ulList=Array.from(e.target.parentNode.parentNode.querySelectorAll('li'));
       
        
        
        if (ulList.length===1) {
            e.target.parentNode.parentNode.parentNode.remove();
        } else {
            e.target.parentNode.remove();
        }
    }
};