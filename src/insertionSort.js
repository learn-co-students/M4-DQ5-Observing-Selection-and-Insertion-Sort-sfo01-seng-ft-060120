function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for(let x = 0; x < arr.length; x++){
    for(let y = x; y > 0 && arr[y - 1] > arr[y]; y--){
      let temp = arr[y]
      arr[y] = arr[y - 1]
      arr[y - 1] = temp
    }
  }
}
