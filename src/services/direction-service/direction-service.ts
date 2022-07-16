import { IDirection } from "../../types/direction";
import {
  DirectionArrowX,
  DirectionArrowY,
} from "../../data-components/data-direction";

export class DirectionService {
  static getDirectionArrow(direction: IDirection) {
    if (direction.x) {
      return DirectionArrowX[direction.x];
    }
    if (direction.y) {
      return DirectionArrowY[direction.y];
    }
  }
}
