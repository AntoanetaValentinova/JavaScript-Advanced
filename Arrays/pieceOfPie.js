function solve (arrOfPie,firstFlavor,secondFlavor) {
let startIndex=arrOfPie.indexOf(firstFlavor);
let endIndex=arrOfPie.indexOf(secondFlavor);
let newArr=arrOfPie.slice(startIndex,endIndex+1);
return newArr;
}

console.log (solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));
console.log('------------')
console.log (solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));