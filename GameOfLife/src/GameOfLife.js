const originState1 = [[0, 0, 0], [1, 1, 1], [0, 0, 0]];
const originState2 = [[1, 0, 1], [0, 1, 0], [1, 0, 1]];
const originState3 = [[0, 1, 0], [1, 1, 1], [0, 1, 0]];
const bigbigbig = [
    [1, 0, 1, 0, 0, 0, 0, 0, 0,0, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 1, 0, 1,0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0,1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,0, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 1, 1, 1,0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 1,0, 0, 1, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 1, 1, 1,0, 1, 0, 1, 0, 0, 0, 0, 1]];

function getCountNeighborLife(originState, r, c) {
    let rows = originState.length;
    let cols = originState[0].length;
    let countNeiLife = 0;
    for (let i = Math.max(0, r - 1); i <= Math.min(rows - 1, r + 1); i++) {
        for (let j = Math.max(0, c - 1); j <= Math.min(cols - 1, c + 1); j++) {
            countNeiLife += originState[i][j] & 1;
        }
    }
    countNeiLife -= originState[r][c] & 1;
    return countNeiLife;
}

function getRandom() {
    let rows = bigbigbig.length;
    let cols = bigbigbig[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            bigbigbig[i][j] = Math.floor(Math.random() * 2);
        }
    }
    DisplayCanvas(bigbigbig);
}

function gameOfLife(originState) {
    let rows = originState.length;
    let cols = originState[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const neighbors = getCountNeighborLife(originState, i, j);
            if ((originState[i][j] & 1) === 1) {
                if (neighbors === 2 || neighbors === 3) {
                    originState[i][j] = 3;
                }
            } else {
                if (neighbors === 3) {
                    originState[i][j] = 2;
                }
            }
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            originState[i][j] = originState[i][j] >> 1;
        }
    }
    console.log(originState);
    return originState;

}

let canvas = document.getElementById('canvas');
let lifeFrame = canvas.getContext('2d');
let deathFrame = canvas.getContext('2d');

function DisplayCanvas(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                lifeFrame.fillStyle = '#F4A7B9';
                lifeFrame.fillRect(j * 40, i * 40, 40, 40);
            }
            else {
                deathFrame.fillStyle = 'black';
                deathFrame.fillRect(j * 40, i * 40, 40, 40);
            }
        }
    }
}
let time=document.getElementById("time");
DisplayCanvas(bigbigbig);
function beginGame() {

    DisplayCanvas(gameOfLife(bigbigbig));
    setTimeout("beginGame()", time.value);
}
