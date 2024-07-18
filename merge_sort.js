
// Arrage the elements in the array in a sorted order
function mergeSort(array) {
if(array.length <= 1) return array;

let mid = array.length / 2;
let left = mergeSort(array.slice(0,mid));
let right = mergeSort(array.slice(mid));

 return merge(left,right);



}

const mergeSortArr = mergeSort([105, 79, 100, 110])
console.log(mergeSortArr)

function merge(left,right) {

    let result = []
    let leftIndex = 0;
    let rightIndex = 0;

      // Add values into the result array in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }

    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}