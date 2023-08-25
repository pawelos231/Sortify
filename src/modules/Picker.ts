import { VisualizationSpeed } from "../constants/enums";
import { Common } from "./Common";
import { Visualizer } from "./Visualizer";
import { bubbleSort } from "../algos/bubble";
import { Move } from "../algos/types";
import { Logger } from "../constants/enums";
import { Algorithms } from "../constants/enums";
import { insertionSort } from "../algos/insertion";

const DEFAULT_ARRAY_SIZE = 100;
type SortFunc = (arr: number[]) => Move[];

export class Picker extends Common {
  newArrBtn: HTMLButtonElement;
  playBtn: HTMLButtonElement;
  algorithm: SortFunc;
  visualizer: Visualizer;
  n: number;
  constructor(n?: number) {
    super();
    this.newArrBtn = this.bindElementByClass("newArr") as HTMLButtonElement;
    this.playBtn = this.bindElementByClass("play") as HTMLButtonElement;

    this.n = n ?? DEFAULT_ARRAY_SIZE;
    this.visualizer = new Visualizer(this.n, VisualizationSpeed.ULTRA_FAST);

    this.algorithm = bubbleSort;
    this.addGenNewArrListener();
    this.addPlayBtnListener();
    this.addSortSelectionListener();
  }
  private addGenNewArrListener() {
    this.newArrBtn.addEventListener("click", () => {
      this.visualizer.createNewArr();
    });
  }

  private addPlayBtnListener() {
    this.playBtn.addEventListener("click", () => {
      const copy = [...this.visualizer.getArr];
      const moves = this.algorithm(copy);
      this.visualizer.animate(moves);
    });
  }

  private addSortSelectionListener() {
    const select = this.bindElementByClass("sorting-algo");
    select.addEventListener("change", (e: any) => {
      const sortType = e.target.value as Algorithms;

      this.visualizer.createNewArr();
      this.displayMessageAtTheTopOfTheScreen(
        `selected ${sortType} sort`,
        Logger.Message
      );

      switch (e.target.value) {
        case Algorithms.BUBBLE: {
          this.algorithm = bubbleSort;
          break;
        }
        case Algorithms.SELECTION: {
          this.algorithm = insertionSort;
          break;
        }
        case Algorithms.INSERTION: {
          this.algorithm = insertionSort;
          break;
        }
        default: {
          this.algorithm = bubbleSort;
        }
      }
    });
  }
}
