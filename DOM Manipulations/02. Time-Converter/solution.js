function attachEventsListeners() {
    let buttons=Array.from(document.querySelectorAll('input[type="button"]')).forEach(b=>b.addEventListener('click',onClick));
    let days=document.querySelector('#days');
    let hours=document.querySelector('#hours');
    let minutes=document.querySelector('#minutes');
    let seconds=document.querySelector('#seconds');
    
    function onClick (ev) {
       let input=Number(ev.target.parentNode.children[1].value);
       let type=ev.target.parentNode.children[0].textContent;
        
       switch(type) {
           case 'Days: ': 
           hours.value=input*24;
           minutes.value=input*1440;
           seconds.value=input*86400 ;
           break;
           case 'Hours: ': 
           days.value=input/24;
           minutes.value=input*60;
           seconds.value=input*60*60;
           break;
           case 'Minutes: ': 
           days.value=input/1440;
           hours.value=input/60;
           seconds.value=input*60;
           break;
           case 'Seconds: ': 
           days.value=input/86400;
           hours.value=input/3600;
           minutes.value=input/60;
           break;
       }
    }
   
}