function solve (arr) {
    arr.sort((a,b)=>a.localeCompare(b));
    let result=[];
     arr.map((value,index)=>result.push(`${index+1}.${value}`));
     return result.join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));
