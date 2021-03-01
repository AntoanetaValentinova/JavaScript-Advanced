function solve (x1,y1,x2,y2) {
let validityOne=checkValidity(x1,y1,0,0);
let validityTwo =checkValidity(x2,y2,0,0);
let validityThree=checkValidity(x1,y1,x2,y2);

function checkValidity(x1,y1,x2,y2) {
    const result=Math.sqrt(((x2-x1)**2)+((y2-y1)**2));
    return Number.isInteger(result)?'valid':'invalid';
}

return `{${x1}, ${y1}} to {0, 0} is ${validityOne}\n{${x2}, ${y2}} to {0, 0} is ${validityTwo}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${validityThree}`
}


console.log(solve(2, 1, 1, 1));
console.log(solve(3, 0, 0, 4));