function extractText() {
    let collectionLi= [...document.getElementsByTagName('li')].map(e=>e.textContent);
    let result=document.getElementById('result');
    result.value = collectionLi.join('\n');
}