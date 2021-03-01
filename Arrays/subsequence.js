function solve (arr) {
    let max = Number.NEGATIVE_INFINITY;
    let newarr = arr.filter(num => {
        if (num >= max) {
            max = num;
            return true;
        } else {
            return false;
        }
    });

    return newarr;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));
console.log(solve([1, 
    2, 
    3,
    4]));
console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]));