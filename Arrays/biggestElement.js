function solve(matrix) {
    let biggestElement = Number.NEGATIVE_INFINITY;
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            let current=matrix[r][c];
            if (current>biggestElement) {
                biggestElement=current;
            }
        }
    }
    return biggestElement;
}

console.log(solve([[20, 50, 10],
[8, 33, 145]]));
console.log(solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]));