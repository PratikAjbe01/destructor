let array = [1, 3, 32, 4, 44, 34, 8];

function randomArrayValues(arr, k) {
  let n = arr.length;
  let newArray = [];

  while (k > 0) {
    let num = Math.floor(Math.random() * n);
    newArray.push(arr[num]);
    k--;
  }

  return newArray;
}

let result = randomArrayValues(array, 3);
console.log(result);
 // [4, 34, 44] (example output, will vary each time due to randomness)
