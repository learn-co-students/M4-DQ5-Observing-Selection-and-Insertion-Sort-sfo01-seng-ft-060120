function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (arr[min] > arr[j]) {
              min = j;
          }
      }
      if (min !== i) {
          let tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
      }
  }
  return arr;
}

array = [5, 6, 4, 8, 9, 3, 1, 2, 7]
selectionSort(array)
