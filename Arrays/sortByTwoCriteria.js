function solve (array) {
array.sort((a,b)=> {
    let result=a.length-b.length;
    if (result==0) {
        result=a.localeCompare(b)
    }
    return result;
});
return array.join('\n');
}

console.log(solve(['alpha', 
'beta', 
'gamma']));
console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));
console.log(solve(['test', 
'Deny', 
'omen', 
'Default']));