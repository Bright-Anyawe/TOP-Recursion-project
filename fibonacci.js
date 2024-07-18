#!/usr/bin/node
function fibonacci(num) {

  let firstValue = -1;
  let secondValue = 1;
  let sum = 0;
  let array = []

  for (let i = 0; i < num; i++) {

    sum = firstValue + secondValue;
    array.push(sum)
    // console.log(sum);
    firstValue = secondValue;
    secondValue = sum;
    
  }
  // console.log(array)
  return secondValue;
  
}
fibonacci(8);

console.log("This was printed recursively");
function fibsRec(num) {
  
  let newArray = [];
   if(num === 2) {
   return newArray = [0, 1]
  }

newArray = fibsRec(num - 1);
  let lastIndex = newArray.length - 1
   let fValue = newArray[lastIndex - 1];
let sValue = newArray[lastIndex] || 1;
  let sum = fValue + sValue;
    newArray.push(sum);
    return newArray;
}
const displayfibsRec = fibsRec(8);
console.log(displayfibsRec)
