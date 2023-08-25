import { Common } from "./Common";

export class Visualizer extends Common<true> {
  arr: number[];
  n: number;
  constructor(n: number) {
    super("visualization");
    this.arr = [];
    this.n = n;
    this.populateRandomArray();
    this.bubbleSort();
    this.createArrayView();
  }
  private populateRandomArray() {
    for (let i = 0; i < this.n; i++) {
      this.arr[i] = Math.random();
    }
  }
  private createArrayView() {
    for (const num of this.arr) {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      this.elementId.appendChild(bar);
      bar.style.height = `${num * 100}%`;
    }
  }
  bubbleSort() {
    let arr = this.arr;
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
}
