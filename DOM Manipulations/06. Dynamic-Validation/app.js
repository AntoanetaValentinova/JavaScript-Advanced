function validate() {
    document.getElementById('email').addEventListener('change',onChange);

    function onChange (ev) {
        let regex=new RegExp(/[a-z]+@[a-z]+\.[a-z]+/gm);
        let email=ev.target.value;
        if (/[a-z]+@[a-z]+\.[a-z]+/.test(email)) {
            ev.target.className='';
        } else {
            ev.target.className='error';
        }
    }
    
}