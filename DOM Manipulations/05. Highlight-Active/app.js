function focus() {
    let sections = [...document.querySelectorAll('input[type="text"]')].forEach(divEl=>{
        divEl.addEventListener('focus',(ev)=>{
            ev.target.parentNode.className='focused';
        });
        divEl.addEventListener('blur',(ev)=> {
            ev.target.parentNode.className='';
        })
    })

}