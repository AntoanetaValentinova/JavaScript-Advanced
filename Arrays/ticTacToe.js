function solve(arrMoves) {
    let matrix = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let firstPlayerSign = 'X';
    let secondPlayerSign = 'O';

    for (let index = 0; index < arrMoves.length; index++) {
        let current = arrMoves[index];
        let currentRow = current[0];
        let currentCol = current[2];
        if (matrix[currentRow][currentCol] == false) {
            if (index % 2 == 0) {
                matrix[currentRow][currentCol] = firstPlayerSign;
                if (checkIfThePlayerWins(matrix, matrix[currentRow][currentCol], currentRow, currentCol)) {
                    let output="";
                    for (let i = 0; i < matrix.length; i++) {
                        for (let c = 0; c < matrix.length; c++) {
                           output+=matrix[i][c]+'   ';
                        }
                        output+=`\n`;
                    }
                    return `Player X wins!\n`+output;
                }
            } else {
                matrix[currentRow][currentCol] = secondPlayerSign;
                if (checkIfThePlayerWins(matrix, matrix[currentRow][currentCol], currentRow, currentCol)) {
                    let output="";
                    for (let i = 0; i < matrix.length; i++) {
                        for (let c = 0; c < matrix.length; c++) {
                           output+=matrix[i][c]+'   ';
                        }
                        output+=`\n`;
                    }
                    return `Player O wins!\n`+output;
                }
            }
        } else {
            console.log('This place is already taken. Please choose another!');
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let c = 0; c < matrix.length; c++) {
           output+=matrix[i][c]+'   ';
        }
        output+=`\n`;
    }
    return `The game ended! Nobody wins :(`+output;
}

function checkIfThePlayerWins(matrix, currenMove, currentRow, currentCol) {
    let isWin=[];
    //lookHrizontal
    matrix[currentRow].every(e=>e==currenMove);
    for (let index = 0; index < matrix[currentRow].length - 1; index++) {
        if (matrix[currentRow][index] != currenMove) {
            isWin.push(false);
            break;
        }
    }
    //lookVert
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][currentCol] != currenMove) {
            isWin.push(false);
            break;
        }
    }
    //lookD1
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][i] != currenMove) {
            isWin.push(false);
            break;
        }
    }
    //lookD2
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][matrix.length-1-i] != currenMove) {
            isWin.push(false);
            break;
        }
    }
    return isWin.length==4?false:true;
}

console.log(solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]))
    console.log(solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]))