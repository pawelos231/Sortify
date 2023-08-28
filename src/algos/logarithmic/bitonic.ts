import { MoveType } from "../../constants/enums";
import { Move } from "../types";

export function bitonicSort(arr: number[]): Move[] {
  const n = arr.length;
  const moves: Move[] = [];

  // Ensure the length of the array is a power of 2
  if (!Number.isInteger(Math.log2(n))) {
    throw new Error("Array length must be a power of 2");
  }

  // Perform bitonic sort
  for (let k = 2; k <= n; k *= 2) {
    for (let j = k / 2; j > 0; j /= 2) {
      for (let i = 0; i < n; i++) {
        const l = i ^ j;
        if (l > i) {
          const descending = (i & k) === 0; // Determine the sorting direction
          if (
            (descending && arr[i] > arr[l]) ||
            (!descending && arr[i] < arr[l])
          ) {
            moves.push({
              indices: [i, l],
            });
            const temp = arr[i];
            arr[i] = arr[l];
            arr[l] = temp;
          }
        }
      }
    }
  }

  return moves;
}
