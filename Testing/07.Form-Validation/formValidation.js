function validate() {
    let companyInfo = document.querySelector('#companyInfo');
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let passwordConfirm = document.querySelector('#confirm-password');
    let email = document.querySelector('#email');
    let companyNum = document.querySelector('#companyNumber');
    let validDiv = document.querySelector('#valid');

    let usernameRegex = /^[a-zA-Z0-9]{3,20}$/gm;
    let passRegex = /^[a-zA-Z0-9_]{5,15}$/gm;
    let emailRegex = /[\w]+@[\w]*[\w]*[\.]+/gm;

    document.querySelector('#company').addEventListener('change', (e) => {
        if (e.target.checked) {
            isCompany = true;
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }

    });

    let isCompany = false;

    document.querySelector('#submit').addEventListener('click', (event) => {
        event.preventDefault();

        let isValid = true;
        if (!usernameRegex.test(username.value)) {
            username.style.borderColor = 'Red';
            isValid = false;
        } else {
            username.style.borderColor = 'none';
        }
        
        if (!passRegex.test(password.value) || password.value !== passwordConfirm.value) {
            password.style.borderColor = 'Red';
            passwordConfirm.style.borderColor = 'Red';
            isValid = false;
        } else if (passRegex.test(password.value) && password.value === passwordConfirm.value) {
            password.style.borderColor = 'none';
            passwordConfirm.style.borderColor = 'none';
        }
        
        if (!emailRegex.test(email.value)) {
            email.style.borderColor = 'Red';
            isValid = false;
        } else {
            email.style.borderColor = 'none';
        }

        if (isCompany) {
            if (Number(companyNum.value) < 1000 || Number(companyNum.value) > 9999) {
                companyNum.style.borderColor = 'Red';
                isValid = false;
            }
        }

        if (isValid) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    })
}
