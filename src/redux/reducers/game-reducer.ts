import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IDirection } from "../../types/direction";
import { GameService } from "../../services/game-service/game-service";
import { ICell } from "../../types/cell";
import { ISettingsGame } from "../../types/settings-game";

interface initialStateGame {
  selectedCell: ICell | null;
  startCell: ICell | null;
  winningCell: ICell | null;
  directions: IDirection[] | null;
  cells: ICell[] | null;
  isRunGame: boolean;
  isWin: boolean;
}

const initialState: initialStateGame = {
  directions: null,
  selectedCell: null,
  winningCell: null,
  startCell: null,
  cells: null,
  isRunGame: false,
  isWin: false,
};

export const gameReducer = createSlice({
  initialState: initialState,
  name: "game",
  reducers: {
    startGame(state, action: PayloadAction<ISettingsGame>) {
      const settingsGame = action.payload;
      const gameService = new GameService(
        settingsGame.sizeX,
        settingsGame.sizeY
      );
      const { directions, winningCell, gameField, startCell } = gameService.run(
        settingsGame.countDirections
      );
      state.directions = directions;
      state.winningCell = winningCell;
      state.cells = gameField;
      state.startCell = startCell;
      state.isWin = false;
      state.selectedCell = null;
      state.isRunGame = true;
    },
    selectCell(state, action: PayloadAction<ICell>) {
      if (state.isRunGame && state.winningCell) {
        state.selectedCell = action.payload;
        state.isWin =
          state.selectedCell.x === state.winningCell.x &&
          state.selectedCell.y === state.winningCell.y;
        state.isRunGame = false;
      }
    },
  },
});

export const { startGame, selectCell } = gameReducer.actions;
