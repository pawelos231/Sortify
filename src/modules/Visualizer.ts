import { MoveType, VisualizationSpeed } from "../constants/enums";
import { Common } from "./Common";
import { Move } from "./bubble";
type SortFunc = (arr: number[]) => number[][];
type Check = {
  check: true;
  index: number;
};

export class Visualizer extends Common<true> {
  arr: number[];
  n: number;
  speed: number;
  audioContext: AudioContext;
  constructor(n: number, speed: VisualizationSpeed) {
    super("visualization");
    this.audioContext = new AudioContext();
    this.arr = [];
    this.n = n;
    this.speed = speed;
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

  private runSortedArray(i: number) {
    if (i > this.arr.length) return;
    this.playSound(200 + this.arr[i] * 500);
    this.createArrayView(undefined, { check: true, index: i });

    setTimeout(() => {
      this.runSortedArray(i + 1);
    }, this.speed);
  }

  public animate(moves: Move[]) {
    if (moves.length === 0) {
      this.runSortedArray(0);
      this.createArrayView();
      return;
    }
    const move = moves.shift();

    const [i, j] = move?.indices as number[];

    if (move?.type == MoveType.swap) {
      [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
    }
    if (i % 5 == 0) this.playSound(200 + this.arr[i] * 500);

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

  private createArrayView(move?: Move, check?: Check) {
    this.elementId.innerHTML = "";
    for (let i = 0; i < this.arr.length; i++) {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${this.arr[i] * 100}%`;
      if (move && move.indices.includes(i)) {
        bar.style.backgroundColor = move.type == MoveType.swap ? "red" : "blue";
      }
      if (check?.check && check.index == i) {
        if (check.index !== this.arr.length - 1)
          bar.style.backgroundColor = "red";
      }
      this.elementId.appendChild(bar);
    }
  }

  private playSound(freq: number) {
    const duration = 5 / this.n;
    const osc = this.audioContext.createOscillator();
    osc.frequency.value = freq;
    osc.type = "sine";
    osc.start();
    osc.stop(this.audioContext.currentTime + duration);
    osc.connect(this.audioContext.destination);
  }
}
