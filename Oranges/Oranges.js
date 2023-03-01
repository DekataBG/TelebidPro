function createMatrix(rows, cols) {
    let matrix = [];

    for(let i = 0; i < rows; i++) {
        matrix[i] = [];
        for(let j = 0; j < rows; j++) {
            matrix[i][j] = 0;
        }   
    }

    return matrix;
}

function printMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let output = "";
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            output += matrix[i][j] + " ";
        }   
        output += "\n";
    }
    console.log(output);
}

function isInside(matrix, x, y) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    return x >= 0 && x < rows && y >= 0 && y < cols;
}

function spread(matrix, days, i, j) {
    for(let k = 0; k <= days; k++) {
        for(let l = 0; l <= days - k; l++) {
            if(isInside(matrix, i - k, j - l)) {
                matrix[i - k][j - l] = '@';
            }

            if(isInside(matrix, i - k, j + l)) {
                matrix[i - k][j + l] = '@';
            }

            if(isInside(matrix, i + k, j - l)) {
                matrix[i + k][j - l] = '@';
            }

            if(isInside(matrix, i + k, j + l)) {
                matrix[i + k][j + l] = '@';
            }
        }
    }
}

function printCount(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let count = 0;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(matrix[i][j] == '@') {
                count++;
            }
        }   
    }
    
    console.log(count);
}

function solve(rows, cols, orangesCoordinates, days, showMatrix) {
    let matrix = createMatrix(rows, cols);

    let size = orangesCoordinates.length;
    for(let i = 0; i < size; i++) {
        let coord1 = rows - orangesCoordinates[i][0];
        let coord2 = orangesCoordinates[i][1] - 1;
        spread(matrix, days, coord1, coord2);
    }

    if(showMatrix) {
        printMatrix(matrix);
    }

    printCount(matrix);
}

solve(9, 9, [[1, 1]], 3, true);