function deleteByEmail() {
    let input=document.querySelector('input[name="email"]').value;
    let rows=document.querySelectorAll('tbody tr');
    let result=document.getElementById('result');

    let isFound=false;
    for (const row of rows) {
        if (row.textContent.includes(input)) {
            row.remove();
            result.textContent='Deleted.'
            isFound=true;
        }
    }
    if (!isFound) {
        result.textContent='Not found.';
    }
}