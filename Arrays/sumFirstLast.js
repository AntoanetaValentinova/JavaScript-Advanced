function solve (arr) {
    let first=Number(arr.shift());
    let last=Number(arr.pop());
    return first+last;
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));