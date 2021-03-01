function solve (fruit,weightGr,priceKg) {
let weight=weightGr/1000;
let money=weight*priceKg;
return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`;
}

console.log(solve('orange', 2500, 1.80));
console.log(solve('apple', 1563, 2.35));