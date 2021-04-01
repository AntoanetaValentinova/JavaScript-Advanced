function attachGradientEvents() {
    let gradient=document.getElementById('gradient');
    gradient.addEventListener('mousemove',percent);
    let result=document.getElementById('result');

    function percent(event) {
        result.textContent=Math.floor(event.offsetX/event.target.clientWidth*100)+"%";
        console.log(result);
    }
    
}