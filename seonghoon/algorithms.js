var fibonacciArray = [1,1,2];

for(var i = 3; i < 20; i++) {
    fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
}

function printMatrix(count) {
    var myMatrix = [];
    for (var i = 0; i < myMatrix.length; i++) { //행
        myMatrix[i] = [];
        for(var j = 0; j < myMatrix.length; j++) {
            myMatrix[i][j] = []
            for(var z = 0; z < myMatrix.length; z++) {
                myMatrix[i][j][z] = i + j + z;
            }
        }
    }

    console.log(myMatrix);
}

var myMatrix = [1,2,3];
printMatrix(myMatrix);
