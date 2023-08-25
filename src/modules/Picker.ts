import { Common } from "./Common";
import { Visualizer } from "./Visualizer";

export class Picker extends Common {
  newArrBtn: HTMLButtonElement;
  visualizer: Visualizer;
  constructor(n: number) {
    super();
    this.newArrBtn = this.bindElementByClass("newArr") as HTMLButtonElement;
    this.visualizer = new Visualizer(n);
    this.addGenNewArrListener();
  }
  addGenNewArrListener() {
    this.newArrBtn.addEventListener("click", () => {
      this.visualizer.createNewArr();
    });
  }
}
