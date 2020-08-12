function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i = 0; i < arr.length; i++ ){
    let min = arr[i]
      for (let j = 1 + i; j < arr.length; j++) {
        if (arr[j] < min) {
          let temp = arr[j]
          arr[j] = min
          min = temp
        }
      }
    arr[i] = min
  }
  return arr
}

console.log(selectionSort([3,5,1,2,4,6]))