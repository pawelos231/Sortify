import { Common } from "./Common";

type SortFunc = (arr: number[]) => number[][];

export class Visualizer extends Common<true> {
  arr: number[];
  n: number;
  constructor(n: number) {
    super("visualization");
    this.arr = [];
    this.n = n;
    this.createNewArr();
  }

  get getArr(): number[] {
    return this.arr;
  }

  public visualizeNewArr(sorter: SortFunc) {
    sorter(this.arr);
    this.elementId.innerHTML = "";
    this.createArrayView();
  }

  public createNewArr() {
    this.elementId.innerHTML = "";
    this.populateRandomArray();
    this.createArrayView();
  }

  public animate(swaps: number[][]) {
    if (swaps.length === 0) {
      return;
    }
    const [i, j] = swaps.shift() as number[];
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
    this.createArrayView([i, j]);
    setTimeout(() => {
      this.animate(swaps);
    }, 50);
  }

  private populateRandomArray() {
    for (let i = 0; i < this.n; i++) {
      this.arr[i] = Math.random();
    }
  }

  private createArrayView(indices?: number[]) {
    this.elementId.innerHTML = "";
    for (let i = 0; i < this.arr.length; i++) {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${this.arr[i] * 100}%`;
      if (indices && indices.includes(i)) {
        bar.style.backgroundColor = "red";
      }
      this.elementId.appendChild(bar);
    }
  }
}
