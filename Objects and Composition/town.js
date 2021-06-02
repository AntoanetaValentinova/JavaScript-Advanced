function solve(arr) {
    let town = {};
    for (let i = 0; i < arr.length; i++) {
        const townName = arr[i].split(' <-> ')[0];
        let population = Number(arr[i].split(' <-> ')[1]);
        if (town[townName] != undefined) {
            population += town[townName];
        }
        town[townName] = population;
    }

    for (const key in town) {
        console.log(`${key} : ${town[key]}`)
    }
}

console.log(solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']));
console.log(solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']));