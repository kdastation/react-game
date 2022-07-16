import { rootState } from "../store";

export class GameSelector {
  static getFullState(state: rootState) {
    return state.game;
  }
  static getDirections(state: rootState) {
    return state.game.directions;
  }
  static getSelectedCell(state: rootState) {
    return state.game.selectedCell;
  }
  static getWinningCell(state: rootState) {
    return state.game.winningCell;
  }
  static getCells(state: rootState) {
    return state.game.cells;
  }
  static getStatusGame(state: rootState) {
    return state.game.isRunGame;
  }
  static getStartCell(state: rootState) {
    return state.game.startCell;
  }
}
