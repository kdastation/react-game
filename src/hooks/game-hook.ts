import { useDispatch, useSelector } from "react-redux";
import { GameSelector } from "../redux/selectors/game-selector";
import { ISettingsGame } from "../types/settings-game";
import { SettingsGame } from "../settings/settings-game";
import { startGame } from "../redux/reducers/game-reducer";
import { useEffect } from "react";

export const useGame = () => {
  const dispatch = useDispatch();
  const { startCell, cells, selectedCell, winningCell, isRunGame, directions } =
    useSelector(GameSelector.getFullState);

  useEffect(() => {
    runGame();
  }, []);

  const runGame = () => {
    const settingsGame: ISettingsGame = {
      sizeX: SettingsGame.defaultSizeX,
      sizeY: SettingsGame.defaultSizeY,
      countDirections: SettingsGame.defaultCountDirections,
    };
    dispatch(startGame(settingsGame));
  };
  return {
    startCell,
    cells,
    selectedCell,
    winningCell,
    isRunGame,
    directions,
    runGame,
  };
};
