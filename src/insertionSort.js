function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    const temp = i;

    while ( i >= 0) {
      if (arr[i] < arr[i-1]) {
        [arr[i-1], arr[i]] = [arr[i], arr[i-1]]
      }
      i--;
    }

    i = temp;
  }
}
