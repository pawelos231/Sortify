import { Move } from "../types";

function isSorted(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

function shuffleArray(arr: number[], moves: Move[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    moves.push({
      indices: [i, j],
    });
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

export function bogosort(arr: number[]) {
  const moves: Move[] = [];
  while (!isSorted(arr)) {
    shuffleArray(arr, moves);
  }
  return moves;
}
