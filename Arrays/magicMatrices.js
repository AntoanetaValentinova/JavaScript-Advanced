function solve (matrix) {
    let arrWithSums=[];
    let isEqual=true;
    
    for (let r = 0; r < matrix.length; r++) {
        let currentSumRow=0;
        for (let c = 0; c < matrix[r].length; c++) {
          currentSumRow+=matrix[r][c];
        } 
        arrWithSums.push(currentSumRow);
    }
    for (let c = 0; c < matrix.length; c++) {
        let currentSumCol=0;
        for (let r = 0; r < matrix.length; r++) {
          currentSumCol+=matrix[r][c];
        } 
        arrWithSums.push(currentSumCol);
    }

    for (let i = 0; i < arrWithSums.length-1; i++) {
        if (arrWithSums[i]!=arrWithSums[i+1]) {
            isEqual=false;
        }
    }

    return isEqual;
}

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));
console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));
console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));
    console.log(solve([[4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]]));