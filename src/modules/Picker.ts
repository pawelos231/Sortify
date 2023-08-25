import { VisualizationSpeed } from "../constants/enums";
import { Common } from "./Common";
import { Visualizer } from "./Visualizer";
import { bubbleSort } from "../algos/bubble";

const DEFAULT_ARRAY_SIZE = 100;

export class Picker extends Common {
  newArrBtn: HTMLButtonElement;
  playBtn: HTMLButtonElement;
  visualizer: Visualizer;
  n: number;
  constructor(n?: number) {
    super();
    this.newArrBtn = this.bindElementByClass("newArr") as HTMLButtonElement;
    this.playBtn = this.bindElementByClass("play") as HTMLButtonElement;
    this.n = n ?? DEFAULT_ARRAY_SIZE;
    this.visualizer = new Visualizer(this.n, VisualizationSpeed.ULTRA_FAST);
    this.addGenNewArrListener();
    this.addPlayBtnListener();
  }
  addGenNewArrListener() {
    this.newArrBtn.addEventListener("click", () => {
      this.visualizer.createNewArr();
    });
  }
  addPlayBtnListener() {
    this.playBtn.addEventListener("click", () => {
      const copy = [...this.visualizer.getArr];
      const moves = bubbleSort(copy);
      this.visualizer.animate(moves);
    });
  }
}
