function solve(arr) {
    let result = [];
    arr.map((a, i) => {
        if (i % 2 != 0) {
            result.unshift(a * 2);
        }
    })
    return result.join(' ');
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));