function solve (matrix) {
    let sumMainDiagonal=0;
    let sumSecondDiagonal=0;
    for (let r = 0; r < matrix.length; r++) {
        sumMainDiagonal+=Number(matrix[r][r]);
        sumSecondDiagonal+=Number(matrix[r][matrix.length-1-r]);
    }
    return `${sumMainDiagonal} ${sumSecondDiagonal}`
}

console.log(solve([[20, 40],
    [10, 60]]));
console.log(solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));