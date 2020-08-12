function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for(let x = 0; x < arr.length - 1; x++){
    let yMin = x 
    for(let y = x + 1; y < arr.length; y++){
      if(arr[y] < arr[yMin]){
        yMin = y
      }
    }
    let temp = arr[x]
    arr[x] = arr[yMin]
    arr[y] = temp
  }
}
