function solve(matrix) {
    let numberOfPairs = 0;
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            let current = matrix[r][c];
            if (c + 1 < matrix.length) {
                numberOfPairs = isItEqual(current, matrix[r][c + 1], numberOfPairs);
            }
            if (r + 1 < matrix.length) {
                numberOfPairs = isItEqual(current, matrix[r + 1][c], numberOfPairs);
            }
        }
    }

    function isItEqual(current, neighbor, numberOfPairs) {
        if (current == neighbor) {
            numberOfPairs += 1;
        }
        return numberOfPairs;
    }
    return numberOfPairs;
}

console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));
console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));
console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));