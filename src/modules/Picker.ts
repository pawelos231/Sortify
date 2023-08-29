import { VisualizationSpeed } from "../constants/enums";
import { Common } from "./Common";
import { Visualizer } from "./Visualizer";
import { Move } from "../algos/types";
import { Logger, Algorithms } from "../constants/enums";
import { insertionSort } from "../algos/quadratic/insertion";
import { bubbleSort } from "../algos/quadratic/bubble";
import { selectionSort } from "../algos/quadratic/selection";
import { bitonicSort } from "../algos/logarithmic/bitonic";

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
  speed: VisualizationSpeed;
  n: number;

  constructor(n?: number) {
    super();
    this.newArrBtn = this.bindElementByClass("newArr") as HTMLButtonElement;
    this.playBtn = this.bindElementByClass("play") as HTMLButtonElement;
    this.speed = VisualizationSpeed.FAST;
    this.n = n ?? DEFAULT_ARRAY_SIZE;

    this.visualizer = new Visualizer(this.n, this.speed);
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
    this.addSpeedSelectionListener();
  }

  private addSpeedSelectionListener() {
    const select = this.bindElementByClass("speed");
    select.addEventListener(
      "change",
      this.handleSpeedSelectionChange.bind(this)
    );
  }

  private handleSpeedSelectionChange(event: any) {
    const speed = Number(VisualizationSpeed[event.target.value]);
    this.speed = speed;
    this.visualizer.setSpeed = speed;
  }

  private addRangeListener() {
    const range = this.bindElementByClass("range") as HTMLInputElement;
    const rangeP = this.bindElementByClass("rangeInputDescription");
    const danger = this.bindElementByClass("danger");
    range.addEventListener("input", (e) => {
      if (this.algorithm.AlgorithmName == Algorithms.BITONIC) {
        this.n = Math.pow(2, Number(range.value));
        rangeP.textContent = String(this.n);
        this.handleRangeInputChangeBitonic(danger);
      } else {
        this.handleRangeInputChange(rangeP, danger, e);
      }
    });
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

  private handleRangeInputChangeBitonic(danger: HTMLElement) {
    this.resetVisualizer();
    if (this.n >= DANGER_ZONE) {
      danger.textContent = DANGER_ZONE_MESSAGE;
    } else {
      danger.textContent = "";
    }
    this.visualizer.setNumbersCount = this.n;
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
    this.visualizer.runSortedArray = function () {};
    this.visualizer = new Visualizer(this.n, this.speed);
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

  private handleBitonicSortSelect() {
    const range = this.bindElementByClass("range") as HTMLInputElement;
    const rangeP = this.bindElementByClass("rangeInputDescription");

    range.max = "10";
    range.min = "4";
    range.value = "4";
    range.step = range.value !== "4" ? String(Number(range.value) * 2) : "1";
    this.n = Number(range.value) * 4;
    this.resetVisualizer();
    rangeP.textContent = String(Number(range.value) * 4);
  }

  private resetRangeValuesToDefault() {
    const range = this.bindElementByClass("range") as HTMLInputElement;
    const rangeP = this.bindElementByClass("rangeInputDescription");

    range.max = "2000";
    range.min = "10";
    range.value = "100";
    range.step = "5";

    this.n = Number(range.value);
    this.resetVisualizer();

    rangeP.textContent = range.value;
  }

  private handleSortSelectionChange(event: Event) {
    const sortType = (event.target as HTMLSelectElement).value as Algorithms;

    this.resetRangeValuesToDefault();
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
      case Algorithms.BITONIC:
        this.setAlgorithmAndName(bitonicSort, Algorithms.BITONIC);
        this.handleBitonicSortSelect();
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
