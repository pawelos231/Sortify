import { Common } from "./Common";

type SortFunc = (arr: number[]) => void;

export class Visualizer extends Common<true> {
  arr: number[];
  n: number;
  constructor(n: number) {
    super("visualization");
    this.arr = [];
    this.n = n;
    this.createNewArr();
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
}
