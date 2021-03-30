function solve() {
  let textArr=document.getElementById('input').value.split('.').filter(s=>s!=='');
  let result='';
  for (let i = 0; i < textArr.length; i+=3) {
    let output=`<p>`;
    if (textArr[i]!=undefined){
      output+=textArr[i].trim()+'.';
    }
    if (textArr[i+1]!=undefined){
      output+=textArr[i+1]+'.';
    }
    if (textArr[i+2]!=undefined){
      output+=textArr[i+2]+'.';
    }
    output+=`</p>`; 
    result+=output;
  }
 

  document.getElementById('output').innerHTML=result;
}