function solve(array) {
    array.sort((a, b) => a - b);
    let result = [];
    let counter=0;
    for (let i = 0; i < array.length; i++) {
        if (counter % 2 != 0) {
            result.push(array.pop());
        } else {
            result.push(array.shift());
        }
        i--;
        counter++;
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))