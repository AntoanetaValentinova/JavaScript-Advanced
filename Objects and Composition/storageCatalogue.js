function solve(arr) {
    let products = {};
    for (let i = 0; i < arr.length; i++) {
        let [name, price] = arr[i].split(" : ");
        price = Number(price);
        let firstLetter = name[0];
        if (!products[firstLetter]) {
            products[firstLetter] = [];
        }
        products[firstLetter].push({ name, price })
        products[firstLetter].sort((a, b) => a.name.localeCompare(b));

    }

    let output = [];
 
    let result = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let string = `${entry[0]}\n`;
        let values = entry[1].sort((a, b) => a.name.localeCompare(b.name)).map(value => { 
            string += `  ${value.name}: ${value.price}\n` 
        })
        output.push(string.trim());
    })
    return output.join('\n'
    );
}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));