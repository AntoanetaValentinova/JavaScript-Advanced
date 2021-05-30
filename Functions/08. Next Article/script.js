function getArticleGenerator(articles) {
    let div=document.querySelector('#content');
    
    function showNext() {
        if (articles.length>0) {
        let articleEl=document.createElement('article');
        articleEl.textContent=articles.shift();
        div.appendChild(articleEl);}
    }

    return showNext;
}
