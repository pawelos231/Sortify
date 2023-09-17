import { Move } from "../types";

export const selectionSort = (arr: number[]): Move[] => {
  const n = arr.length - 1;
  const moves = [];
  for (let i = 0; i <= n; i++) {
    let min = i;
    for (let j = i + 1; j <= n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      moves.push({
        indices: [min, i],
      });
      const temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return moves;
};
