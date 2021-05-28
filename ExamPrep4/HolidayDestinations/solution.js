function addDestination () {
    let inputs=Array.from(document.querySelectorAll('.inputData'));
    let inputCity=inputs[0].value;
    let inputCounty=inputs[1].value;
    let season=document.querySelector('#seasons').value;
    let selects=document.querySelector(`option[value=${season}]`)
    let selectSeason=selects.textContent;
    let isInputValid=true;
    if (inputCity===''||inputCounty===''){
        isInputValid=false;
    }
    if (isInputValid) {
        let tbody=document.querySelector('#destinationsList');
        let tr=document.createElement('tr');
        let th1=document.createElement('td');
        th1.textContent=`${inputCity}, ${inputCounty}`;
        let th2=document.createElement('td');
        th2.textContent=selectSeason;
        tr.appendChild(th1);
        tr.appendChild(th2);
        tbody.appendChild(tr);
        if (selectSeason==='Summer') {
            let summerSummary=document.querySelector('#summer');
            let summerSummaryInitialValue=summerSummary.value;
            summerSummary.value=Number(summerSummaryInitialValue)+1;
        } else if (selectSeason==='Autumn') {
            let autSummary=document.querySelector('#autumn');
            let autSummaryInitialValue=autSummary.value;
            autSummary.value=Number(autSummaryInitialValue)+1;
        }else if (selectSeason==='Winter') {
            let winterSummary=document.querySelector('#winter');
            let winterSummaryInitialValue=winterSummary.value;
            winterSummary.value=Number(winterSummaryInitialValue)+1;
        }else if (selectSeason==='Spring') {
            let springSummary=document.querySelector('#spring');
            let springSummaryInitialValue=springSummary.value;
            springSummary.value=Number(springSummaryInitialValue)+1;
        }
       inputs[0].value=''; 
       inputs[1].value=''; 
   
    }
   
}