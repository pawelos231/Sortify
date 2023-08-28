import { VisualizationSpeed } from "../constants/enums";
import { Common } from "./Common";
import { Visualizer } from "./Visualizer";
import { Move } from "../algos/types";
import { Logger, Algorithms } from "../constants/enums";
import { insertionSort } from "../algos/quadratic/insertion";
import { bubbleSort } from "../algos/quadratic/bubble";
import { selectionSort } from "../algos/quadratic/selection";

const DEFAULT_ARRAY_SIZE = 100;

type AlgorithmType = {
  AlgorithmFunction: (arr: number[]) => Move[];
  AlgorithmName: Algorithms;
};

//beyond that size of array it may impact performance
const DANGER_ZONE = 1000;
const DANGER_ZONE_MESSAGE = "Caution: This action may impact performance.";

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
    this.visualizer = new Visualizer(this.n, VisualizationSpeed.FAST);
    this.algorithm = {
      AlgorithmFunction: bubbleSort,
      AlgorithmName: Algorithms.BUBBLE,
    };

    this.addEventListeners();
    this.resetVisualizer();
  }

  private addEventListeners() {
    this.addGenNewArrListener();
    this.addPlayBtnListener();
    this.addSortSelectionListener();
    this.addRangeListener();
    this.addResetListener();
  }

  private addRangeListener() {
    const range = this.bindElementByClass("range");
    const rangeP = this.bindElementByClass("rangeInputDescription");
    const danger = this.bindElementByClass("danger");
    range.addEventListener(
      "input",
      this.handleRangeInputChange.bind(this, rangeP, danger)
    );
  }

  private handleRangeInputChange(
    rangeP: HTMLElement,
    danger: HTMLElement,
    event: any
  ) {
    this.resetVisualizer();
    if (this.n >= DANGER_ZONE) {
      danger.textContent = DANGER_ZONE_MESSAGE;
    } else {
      danger.textContent = "";
    }
    const val = event.target.value;
    this.n = val;
    rangeP.textContent = val;
    this.visualizer.setNumbersCount = val as number;
  }

  private addGenNewArrListener() {
    this.newArrBtn.addEventListener(
      "click",
      this.handleNewArrButtonClick.bind(this)
    );
  }

  private handleNewArrButtonClick() {
    if (!this.visualizer.isAlgoRunning) {
      this.visualizer.initializeNewArr();
    } else {
      this.displayMessageAtTheTopOfTheScreen(
        `${this.algorithm.AlgorithmName} sort is currently running`,
        Logger.Error
      );
    }
  }

  private resetVisualizer() {
    this.visualizer.animate = function () {};
    this.visualizer = new Visualizer(this.n, VisualizationSpeed.FAST);
  }

  private addResetListener() {
    const reset = this.bindElementByClass("reset");
    reset.addEventListener("click", this.handleResetButtonClick.bind(this));
  }

  private handleResetButtonClick() {
    this.resetVisualizer();
  }

  private addPlayBtnListener() {
    this.playBtn.addEventListener(
      "click",
      this.handlePlayButtonClick.bind(this)
    );
  }

  private handlePlayButtonClick() {
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
  }

  private addSortSelectionListener() {
    const select = this.bindElementByClass("sorting-algo");
    select.addEventListener(
      "change",
      this.handleSortSelectionChange.bind(this)
    );
  }

  private handleSortSelectionChange(event: Event) {
    const sortType = (event.target as HTMLSelectElement).value as Algorithms;

    this.resetVisualizer();

    switch (sortType) {
      case Algorithms.BUBBLE:
        this.setAlgorithmAndName(bubbleSort, Algorithms.BUBBLE);
        break;
      case Algorithms.SELECTION:
        this.setAlgorithmAndName(selectionSort, Algorithms.SELECTION);
        break;
      case Algorithms.INSERTION:
        this.setAlgorithmAndName(insertionSort, Algorithms.INSERTION);
        break;
      default:
        this.setAlgorithmAndName(bubbleSort, Algorithms.BUBBLE);
    }
  }

  private setAlgorithmAndName(
    algorithmFunction: (arr: number[]) => Move[],
    algorithmName: Algorithms
  ) {
    this.algorithm = {
      AlgorithmFunction: algorithmFunction,
      AlgorithmName: algorithmName,
    };
  }
}
