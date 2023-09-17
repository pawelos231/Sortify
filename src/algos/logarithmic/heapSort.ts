import { Move } from "../types";

const heapify = (arr: number[], n: number, i: number, moves: Move[]) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    moves.push({
      indices: [largest, i],
    });

    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapify(arr, n, largest, moves);
  }
};

export const heapSort = (arr: number[]) => {
  const n = arr.length;
  let moves: Move[] = [];
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i, moves);
  }
  for (var i = n - 1; i > 0; i--) {
    moves.push({
      indices: [i, 0],
    });
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0, moves);
  }
  return moves;
};
