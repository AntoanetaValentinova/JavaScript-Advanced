function sumTable()  {
    let rows=Array.from(document.querySelectorAll('table tr')).slice(1,-1);
    document.getElementById('sum').textContent=rows.reduce((sum,row)=> {
        return sum+=Number(row.lastElementChild.textContent)
    },0);
}


console.log(10+20);
