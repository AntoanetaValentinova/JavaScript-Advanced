function validate() {
   let email= document.querySelector('#email');
   email.addEventListener('change',(e)=>{
        let regex=/^[a-z]+@[a-z]+\.[a-z]+$/gm;
        if (!regex.test(email.value)) {
            email.classList.add('error');
        } else {
            email.removeAttribute('class');
        }
    })
}