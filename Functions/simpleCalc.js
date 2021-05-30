function solve () {
    let firstEl;
    let secondEl;
    let resultEl;
   
    let obj= {
        init: function (selector1,selector2,result) {
            firstEl= document.querySelector(selector1),
            secondEl= document.querySelector(selector2),
            resultEl= document.querySelector(result)
        },
       
        add: function () {
            resultEl.value= Number(firstEl.value)+Number(secondEl.value);
           
        },
        subtract: function () {
            resultEl.value= Number(firstEl.value)-Number(secondEl.value);
        }
    }

    
    return obj;
}

let newObj=solve();
newObj.init('#num1','#num2','#result');
let sumButton=document.querySelector('#sumButton').addEventListener('click', newObj.add);
let subtractButton=document.querySelector('#subtractButton').addEventListener('click', newObj.subtract);