function getFibonator() {
    let fibNumbers = [0];
    return function getNextFibNumber() {
        let nextFibNumber = 0;
        if (fibNumbers.length === 1) {
            nextFibNumber = 1;
        } else {
            nextFibNumber = fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2];
        }
        fibNumbers.push(nextFibNumber);
        return nextFibNumber;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
