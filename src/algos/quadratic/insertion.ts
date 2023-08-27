import { MoveType } from "../../constants/enums";
import { Move } from "../types";

export const insertionSort = (arr: number[]): Move[] => {
  const n = arr.length;
  const moves = [];

  for (let i = 1; i < n; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      moves.push({
        indices: [j + 1, j],
      });
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return moves;
};
