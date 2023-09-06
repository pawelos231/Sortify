import { Move } from "../types";

export const quickSortWrapper = (arr: number[]) => {
  const moves: Move[] = [];
  function quickSort(arr: number[], low = 0, high = arr.length - 1) {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);

      quickSort(arr, low, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, high);
    }
  }

  function partition(arr: number[], low: number, high: number) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        moves.push({
          indices: [i, j],
        });
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    moves.push({
      indices: [i + 1, high],
    });
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
  }
  quickSort(arr);
  console.log(arr);
  return moves;
};
