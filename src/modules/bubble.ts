export const bubbleSort = (arr: number[]): number[][] => {
  const n = arr.length;
  const swaps = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps.push([j + 1, j]);
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return swaps;
};
