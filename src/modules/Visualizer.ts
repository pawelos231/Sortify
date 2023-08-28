import { MoveType, VisualizationSpeed } from "../constants/enums";
import { Common } from "./Common";
import { Move } from "../algos/types";
import { calculateDuration } from "../helpers/calulateDur";

type SortFunc = (arr: number[]) => Move[];

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
    this.clearArrayView();
    this.createArrayView();
  }

  public initializeNewArr() {
    this.clearArrayView();
    this.populateRandomArray();
    this.initializeArrayView();
  }

  public createNewArr() {
    this.clearArrayView();
    this.populateRandomArray();
    this.createArrayView();
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

    if (!move?.type || move?.type === MoveType.swap) {
      [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
    }
    this.playSoundOnStep(i);
    this.playSoundOnStep(j);

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

  private clearArrayView() {
    this.elementId.innerHTML = "";
  }

  private runSortedArray(i: number) {
    if (i > this.arr.length) return;
    this.playSoundOnStep(i);
    this.iterateOverSortedArray(i);

    setTimeout(() => {
      this.runSortedArray(i + 1);
    }, this.speed);
  }

  private iterateOverSortedArray(i: number) {
    const bar = this.bindElementByClass(`bar${i}`);
    bar.style.backgroundColor = "green";
    if (i === this.arr.length - 1) this.createArrayView();
  }

  private playSoundOnStep(step: number) {
    if (step % 5 === 0) {
      this.playSound(200 + this.arr[step] * 1500);
    }
  }

  private initializeArrayView() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < this.arr.length; i++) {
      const bar = document.createElement("div");
      bar.classList.add(`bar`, `bar${i}`);
      this.styleArrayBar(bar, i);
      fragment.appendChild(bar);
    }

    this.elementId.appendChild(fragment);
  }

  private styleArrayBar(bar: HTMLElement, i: number) {
    bar.style.height = `${this.arr[i] * 100}%`;
    bar.style.width = `${100 / this.n}%`;
    if (this.n > 200 && this.n < 300) {
      bar.style.margin = "0.5px";
    }
    if (this.n > 300) {
      bar.style.margin = "0px";
    }
  }

  private createArrayView(move?: Move) {
    for (let i = 0; i < this.arr.length; i++) {
      const bar = this.bindElementByClass(`bar${i}`);
      this.styleArrayBar(bar, i);
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
