import { MoveType, VisualizationSpeed } from "../constants/enums";
import { Common } from "./Common";
import { Move } from "../algos/types";
import { calculateDuration } from "../helpers/calulateDur";
type SortFunc = (arr: number[]) => Move[];
type Check = {
  check: true;
  index: number;
};

export class Visualizer extends Common<true> {
  arr: number[];
  n: number;
  speed: number;
  audioContext: AudioContext;
  isRunningAlgorithm: boolean;
  constructor(n: number, speed: VisualizationSpeed) {
    super("visualization");
    this.audioContext = new AudioContext();
    this.arr = [];
    this.n = n;
    this.speed = speed;
    this.isRunningAlgorithm = false;
    this.initializeNewArr();
  }

  get getArr(): number[] {
    return this.arr;
  }

  get isAlgoRunning(): boolean {
    return this.isRunningAlgorithm;
  }

  set setNumbersCount(value: number) {
    this.n = value;
    this.arr = [];
    this.initializeNewArr();
  }

  public visualizeNewArr(sorter: SortFunc) {
    sorter(this.arr);
    this.elementId.innerHTML = "";
    this.createArrayView();
  }

  public initializeNewArr() {
    this.elementId.innerHTML = "";
    this.populateRandomArray();
    this.initializeArrayView();
  }

  public createNewArr() {
    this.elementId.innerHTML = "";
    this.populateRandomArray();
    this.createArrayView();
  }

  private runSortedArray(i: number) {
    if (i > this.arr.length) return;
    this.playSound(200 + this.arr[i] * 2000);
    this.iterateOverSortedArray(i);

    setTimeout(() => {
      this.runSortedArray(i + 1);
    }, this.speed);
  }

  public animate(moves: Move[]) {
    if (moves.length === 0) {
      this.createArrayView();
      this.runSortedArray(0);
      this.isRunningAlgorithm = false;
      return;
    }

    this.isRunningAlgorithm = true;
    const move = moves.shift();

    const [i, j] = move?.indices as number[];

    if (!move?.type || move?.type == MoveType.swap) {
      [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
    }
    if (i % 5 == 0) this.playSound(200 + this.arr[i] * 1500);
    if (j % 5 == 0) this.playSound(200 + this.arr[j] * 1500);

    this.createArrayView(move);
    setTimeout(() => {
      this.animate(moves);
    }, this.speed);
  }

  private populateRandomArray() {
    for (let i = 0; i < this.n; i++) {
      this.arr[i] = Math.random();
    }
  }

  private iterateOverSortedArray(i: number) {
    const bar = this.bindElementByClass(`bar${i}`);
    bar.style.backgroundColor = "green";
    if (i === this.arr.length - 1) this.createArrayView();
  }

  private initializeArrayView() {
    this.elementId.innerHTML = "";

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < this.arr.length; i++) {
      const bar = document.createElement("div");
      bar.classList.add(`bar`, `bar${i}`);
      bar.style.height = `${this.arr[i] * 100}%`;
      bar.style.width = `${100 / this.n}%`;
      if (this.n > 200) {
        bar.style.margin = "0px";
      }
      fragment.appendChild(bar);
    }

    this.elementId.appendChild(fragment);
  }

  private createArrayView(move?: Move) {
    for (let i = 0; i < this.arr.length; i++) {
      const bar = this.bindElementByClass(`bar${i}`);
      bar.style.height = `${this.arr[i] * 100}%`;
      bar.style.width = `${100 / this.n}%`;
      if (this.n > 200) {
        bar.style.margin = "0px";
      }
      bar.style.backgroundColor = "#3498db";

      if (move && move.indices.includes(i)) {
        bar.style.backgroundColor =
          !move.type || move.type === MoveType.swap ? "red" : "blue";
      }
    }
  }

  private playSound(freq: number) {
    const duration = calculateDuration(this.speed);
    const osc = this.audioContext.createOscillator();
    osc.frequency.value = isNaN(freq) ? 1500 : freq;
    osc.type = "sine";
    osc.start();
    osc.stop(this.audioContext.currentTime + duration);
    const node = this.audioContext.createGain();
    node.gain.value = 0.1;
    node.gain.linearRampToValueAtTime(
      0,
      this.audioContext.currentTime + duration
    );
    osc.connect(node);

    node.connect(this.audioContext.destination);
  }
}
