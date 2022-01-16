
const matrixOne = [
  [4, 3, 2, 4],
  [9, 1, 5, 6],
  [2, 7, 9, 8],
  [8, 5, 2, 0],
];


for (let i = 0; i < matrixOne.length; i++) {
  for (let j = 0; j < matrixOne.length; j++) {
    document.write("  "+matrixOne[i][j]);

   
  }
  document.write("<br><br><br>");
 

}

let sum=0;
for (let i = 0; i < matrixOne.length; i++) {
  for (let j = 0; j < matrixOne.length; j++) {
    if(i==j){
      sum += matrixOne[i][j];
    }
  }
}
document.write("sum of diagonal----"+sum);

