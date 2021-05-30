function solve (number) {
    return function solution (numToAdd) {
        return number+numToAdd;     
    }; 
}

let add5 = solve(5);

console.log(add5(2));
console.log(add5(3));