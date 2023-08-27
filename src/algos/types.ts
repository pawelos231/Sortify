import { MoveType } from "../constants/enums";

export type Move = {
  indices: number[];
  type?: MoveType;
};
