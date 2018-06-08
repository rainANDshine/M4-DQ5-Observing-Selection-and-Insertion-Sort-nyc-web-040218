function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    const temp = i;
    let smallest = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        smallest = arr[j]
        i = j
      }
    }

    [arr[temp], arr[i]] = [arr[i], arr[temp]]
    i = temp;
  }
}
