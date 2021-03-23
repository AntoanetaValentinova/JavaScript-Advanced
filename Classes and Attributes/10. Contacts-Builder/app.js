function solve() {

    class Contact {
        constructor(firstName, lastName, phone, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this.online = false;
        }
        render(id) {
            let article = document.createElement('article');
            let divTitle = document.createElement('div');
            divTitle.classList.add('title');
            divTitle.textContent = `${this.firstName} ${this.lastName}`
            let btn = document.createElement('button');
            btn.textContent = `ℹ`
            btn.addEventListener('click',()=>{
                divInfo.style.display='block'
            })
            divTitle.appendChild(btn);
            article.appendChild(divTitle);
            let divInfo = document.createElement('div');
            divInfo.classList.add('info');
            let span1 = document.createElement('span');
            span1.textContent = `☎ ${this.phone}`
            let span2 = document.createElement('span');
            span2.textContent = `✉ ${this.email}`
            divInfo.appendChild(span1);
            divInfo.appendChild(span2);
            divInfo.style.display='none'
            article.appendChild(divInfo);
            let main = document.getElementById(id);
            main.appendChild(article);
        }
    }
    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];
    contacts.forEach(c => c.render('main'));
    setTimeout(() => contacts[1].online = true, 2000);
    console.log('hi')
}