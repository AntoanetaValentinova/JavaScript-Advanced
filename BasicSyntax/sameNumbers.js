function solve (num) {
   const numStr=num+"";
   let isSame=true;
   let sum=Number(numStr[0]);
   for (let index = 0; index < numStr.length-1; index++) {
    if (numStr[index]!==numStr[index+1]) {
        isSame=false;
    }
    sum+=Number(numStr[index+1]);
   }
   return `${isSame}\n${sum}`
}

console.log(solve(2222222));
console.log(solve(1234));