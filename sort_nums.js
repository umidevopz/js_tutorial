function getMaxSum(array) {
  let num = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] > 0){
      console.log(array[i])
      num += array[i] 
    }
  }
  return num;
}
let arr = [1,-2,3, 0]
console.log('Result: ' + getMaxSum(arr))


// Bubble code algorithm to sort numbers in array 

function sortByNum(array) {
  const n = array.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        // Swap array[i] and array[i + 1]
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

// Example usage:
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers = sortByNum(numbers);
console.log(sortedNumbers); // Output should be [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]


