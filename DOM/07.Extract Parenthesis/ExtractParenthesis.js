function extract(content) {
    let text=document.getElementById(content).textContent;
    const regex=/\((.+?)\)/gm;
    let matcher=regex.exec(text);
    let result=[];
    while (matcher!=null) {
        result.push(matcher[1]);
        matcher=regex.exec(text);
    }
    return result.join("; ");
}