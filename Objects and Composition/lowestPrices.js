function solve(input) {
    let sales = {};
    for (let i = 0; i < input.length; i++) {
        let sale = input[i].split(' | ');
        const townName = sale[0];
        const productName = sale[1];
        const productPrice = Number(sale[2]);
        if (!sales[productName]) {
            sales[productName] = { townName, productPrice };
        } else {
            if (sales[productName].townName === townName) {
                sales[productName].productPrice = productPrice;
            } else if (sales[productName].productPrice > productPrice) {
                sales[productName].productPrice = productPrice;
                sales[productName].townName = townName;
            }
        }
    }

    let result=[];
    for (const product in sales) {
        result.push(`${product} -> ${sales[product].productPrice} (${sales[product].townName})`)
    }

    return result.join(`\n`);
}

console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']))