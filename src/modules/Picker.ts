import { VisualizationSpeed } from "../constants/enums";
import { Common } from "./Common";
import { Visualizer } from "./Visualizer";
import { Move } from "../algos/types";
import { Logger } from "../constants/enums";
import { Algorithms } from "../constants/enums";
import { insertionSort } from "../algos/quadratic/insertion";
import { bubbleSort } from "../algos/quadratic/bubble";
import { selectionSort } from "../algos/quadratic/selection";

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
    this.addRangeListener();
    this.addResetListener();
  }

  private addRangeListener() {
    const range = this.bindElementByClass("range");
    const rangeP = this.bindElementByClass("rangeInputDescription");
    range.addEventListener("input", (e: any) => {
      this.resetVisualizer();
      const val = e.target.value;
      this.n = val;
      rangeP.textContent = val;
      this.visualizer.setNumbersCount = val as number;
    });
  }

  private addGenNewArrListener() {
    this.newArrBtn.addEventListener("click", () => {
      if (!this.visualizer.isAlgoRunning) {
        this.visualizer.createNewArr();
      } else {
        this.displayMessageAtTheTopOfTheScreen(
          `${this.algorithm.AlgorithmName} sort is currently running`,
          Logger.Error
        );
      }
    });
  }

  private resetVisualizer() {
    this.visualizer.animate = function () {};
    this.visualizer = new Visualizer(this.n, VisualizationSpeed.ULTRA_FAST);
  }

  private addResetListener() {
    const reset = this.bindElementByClass("reset");
    reset.addEventListener("click", () => {
      this.resetVisualizer();
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

      this.resetVisualizer();

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
            AlgorithmFunction: selectionSort,
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
