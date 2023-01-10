const fs = require("fs");

let file = fs.readFileSync("./steps/labirint.txt", "utf-8");

matrix = [];
file.split("\r\n").forEach((row) => {
    matrix.push(row.split(","));
});
// matrix.forEach((e) => console.log(e.toString()));

let posX = 0,
    posY = 0,
    stopPosX = matrix[0].length,
    stopPosY = matrix.length,
    minStepsMatrix = [],
    weightMatrix = [];

for (let i = 0; i < matrix.length; i++) {
    minStepsMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
        minStepsMatrix[i][j] = i + j;
    }
}
let minPathLen = minStepsMatrix[matrix.length - 1][matrix[0].length - 1];
console.log("Наименьшее кол-во шагов до конца:", minPathLen);

for (let i = 0; i < matrix.length; i++) {
    weightMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
        weightMatrix[i][j] = 0;
    }
}
for (let iter = 0; iter < minPathLen + 1; iter++) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (minStepsMatrix[i][j] === iter) {
                weightMatrix[i][j] = Number(matrix[i][j]);
                if (i === 0 && matrix[i][j - 1]) {
                    weightMatrix[i][j] += weightMatrix[i][j - 1];
                } else if (j === 0 && matrix[i - 1]) {
                    weightMatrix[i][j] += weightMatrix[i - 1][j];
                } else if (matrix[i - 1]) {
                    w1 = weightMatrix[i][j - 1];
                    w2 = weightMatrix[i - 1][j];
                    weightMatrix[i][j] += w1 < w2 ? w1 : w2;
                }
            }
        }
    }
}
let minPathWeight = weightMatrix[matrix.length - 1][matrix[0].length - 1];
console.log("Наименьшее расстояние до конца:", minPathWeight);
