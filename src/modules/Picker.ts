import { VisualizationSpeed } from "../constants/enums";
import { Common } from "./Common";
import { Visualizer } from "./Visualizer";
import { bubbleSort } from "../algos/bubble";
import { Move } from "../algos/types";
import { Logger } from "../constants/enums";
import { Algorithms } from "../constants/enums";
import { insertionSort } from "../algos/insertion";

const DEFAULT_ARRAY_SIZE = 100;

type AlgorithmType = {
  AlgorithmFunction: (arr: number[]) => Move[];
  AlgorithmName: Algorithms;
};

export class Picker extends Common {
  newArrBtn: HTMLButtonElement;
  playBtn: HTMLButtonElement;
  algorithm: AlgorithmType;
  visualizer: Visualizer;
  n: number;
  constructor(n?: number) {
    super();
    this.newArrBtn = this.bindElementByClass("newArr") as HTMLButtonElement;
    this.playBtn = this.bindElementByClass("play") as HTMLButtonElement;

    this.n = n ?? DEFAULT_ARRAY_SIZE;
    this.visualizer = new Visualizer(this.n, VisualizationSpeed.ULTRA_FAST);

    this.algorithm = {
      AlgorithmFunction: bubbleSort,
      AlgorithmName: Algorithms.BUBBLE,
    };

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
      const moves = this.algorithm.AlgorithmFunction(copy);
      if (!this.visualizer.isAlgoRunning) {
        this.visualizer.animate(moves);
      } else {
        this.displayMessageAtTheTopOfTheScreen(
          `${this.algorithm.AlgorithmName} sort is currently running`,
          Logger.Error
        );
      }
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
          this.algorithm = {
            AlgorithmFunction: bubbleSort,
            AlgorithmName: Algorithms.BUBBLE,
          };
          break;
        }
        case Algorithms.SELECTION: {
          this.algorithm = {
            AlgorithmFunction: insertionSort,
            AlgorithmName: Algorithms.SELECTION,
          };
          break;
        }
        case Algorithms.INSERTION: {
          this.algorithm = {
            AlgorithmFunction: insertionSort,
            AlgorithmName: Algorithms.INSERTION,
          };
          break;
        }
        default: {
          this.algorithm = {
            AlgorithmFunction: bubbleSort,
            AlgorithmName: Algorithms.BUBBLE,
          };
        }
      }
    });
  }
}
