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

    for(let i = 0; i < rows; i++) {
        let output = "";
        for(let j = 0; j < cols; j++) {
            output += matrix[i][j] + " ";
        }   

        let grid = document.getElementById("grid");
        let p = document.createElement("p");
        p.textContent = output;
        grid.appendChild(p);
    }
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
                matrix[i - k][j - l] = '1';
            }

            if(isInside(matrix, i - k, j + l)) {
                matrix[i - k][j + l] = '1';
            }

            if(isInside(matrix, i + k, j - l)) {
                matrix[i + k][j - l] = '1';
            }

            if(isInside(matrix, i + k, j + l)) {
                matrix[i + k][j + l] = '1';
            }
        }
    }
}

function printCount(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let count = rows * cols;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(matrix[i][j] == '1') {
                count--;
            }
        }   
    }
    
    //console.log(count);
    document.getElementById("count").value = count;
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

//solve(100, 100, [[1, 1], [100, 100]], 60, false);

function generate() {
    let rows = Number(document.getElementById("rows").value);
    let cols = Number(document.getElementById("cols").value);
    let days = Number(document.getElementById("days").value);
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);

    let coordinates = [];
    let c1 = [];
    let c2 = [];

    c1[0] = x1;
    c1[1] = y1;

    c2[0] = x2;
    c2[1] = y2;

    coordinates[0] = c1;
    
    if(x2 && y2) {
        coordinates[1] = c2;
    }

    solve(rows, cols, coordinates, days, true);
}