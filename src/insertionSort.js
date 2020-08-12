function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i = 1; i < arr.length; i++) {
    let n = i - 1
    let item = arr[i]
    console.log('item', item)
    while (n >= 0 && item < arr[n]) {
      console.log('inside while', arr[n])
      arr[n+1] = arr[n]
      console.log('array inside while', arr)
      n--
    }
    arr[n+1] = item
    console.log('array', arr)
  }
  return arr
}

console.log(insertionSort([3,5,1,2,4,6]))
