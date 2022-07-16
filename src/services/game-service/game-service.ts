import { IDirection } from "../../types/direction";
import { ICell } from "../../types/cell";
import { SettingsGame } from "../../settings/settings-game";
import { RandomService } from "../random-service/random-service";
import { Utils } from "../../utils/utils";

export class GameService {
  readonly sizeX: number = SettingsGame.defaultSizeX;
  readonly sizeY: number = SettingsGame.defaultSizeY;

  constructor(
    sizeX: number = SettingsGame.defaultSizeX,
    sizeY: number = SettingsGame.defaultSizeY
  ) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  public run(countDirections: number) {
    const startCell = this.generateCell();
    const { directions, winningCell } = this.createDirectionsAndWinningCell(
      countDirections,
      startCell
    );
    const gameField = this.createGameField();
    return {
      directions,
      winningCell,
      gameField,
      startCell,
    };
  }

  private createDirectionsAndWinningCell(count: number = 10, startCell: ICell) {
    const directions = [];
    let winningCell = startCell;
    for (let i = 0; i < count; i++) {
      while (true) {
        const newDirection: IDirection = {
          x: this.createDirection() as 1 | -1 | 0,
          y: this.createDirection() as 1 | -1 | 0,
        };

        const isValidDirection = this.validateDirection(
          winningCell,
          newDirection
        );

        if (isValidDirection) {
          directions.push(newDirection);
          winningCell = {
            x: winningCell.x + newDirection.x,
            y: winningCell.y + newDirection.y,
          };
          break;
        }
      }
    }
    return { directions, winningCell };
  }

  private createGameField() {
    const gameField: ICell[] = [];
    for (let i = 0; i < this.sizeY; i++) {
      for (let j = 0; j < this.sizeX; j++) {
        const newCell: ICell = {
          x: j,
          y: i,
        };
        gameField.push(newCell);
      }
    }
    return gameField;
  }

  private createDirection(arr = [-1, 0, 1]): number {
    return RandomService.randomValueInArray(arr);
  }

  private validateDirection(cell: ICell, direction: IDirection) {
    const isValidDirectionX =
      cell.x + direction.x < this.sizeX && cell.x + direction.x >= 0;
    const isValidDirectionY =
      cell.y + direction.y < this.sizeY && cell.y + direction.y >= 0;
    const isNotDiagonal =
      (Math.abs(direction.x) === 1 && direction.y === 0) ||
      (Math.abs(direction.y) === 1 && direction.x == 0);
    return isValidDirectionY && isValidDirectionX && isNotDiagonal;
  }

  private generateCell() {
    const arraySizeX = Utils.createArrayFromNumber(0, this.sizeX);
    const arraySizeY = Utils.createArrayFromNumber(0, this.sizeY);
    const cell: ICell = {
      x: RandomService.randomValueInArray(arraySizeX),
      y: RandomService.randomValueInArray(arraySizeY),
    };
    return cell;
  }
}
