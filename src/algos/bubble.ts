import { MoveType } from "../constants/enums";
import { Move } from "./types";

export const bubbleSort = (arr: number[]): Move[] => {
  const n = arr.length;
  const moves = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        moves.push({
          indices: [j + 1, j],
          type: MoveType.swap,
        });
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return moves;
};
