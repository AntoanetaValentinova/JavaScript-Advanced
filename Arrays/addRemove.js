function solve (arr) {
    let newArr=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=='add'){
            newArr.push(i+1);
        } else if (arr[i]=='remove') {
            newArr.pop();
        }   
    }
    return newArr.length==0? 'Empty':newArr.join('\n');
}

console.log(solve(['add', 
'add', 
'add', 
'add']
));
console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']));
console.log(solve(['remove', 
'remove', 
'remove']));