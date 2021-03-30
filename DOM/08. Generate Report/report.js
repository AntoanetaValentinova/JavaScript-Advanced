function generateReport() {
    const outputElement=document.querySelector('#output');
    let tableHead=document.querySelectorAll('tr th');
    let tableBody=document.querySelectorAll('tbody tr');

    let output=[];

    for (const row of tableBody) {
        let rowObject={};
        for (let i = 0; i < row.children.length; i++) {
            let key=tableHead[i].lastChild.name;
            let cell=row.children[i].textContent;
            if(tableHead[i].lastChild.checked) {
                rowObject[key]=cell;
            }
            
        }
        output.push(rowObject);
    }

    outputElement.textContent=JSON.stringify(output);
}