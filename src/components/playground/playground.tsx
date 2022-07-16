import { FC } from "react";
import { GameSelector } from "../../redux/selectors/game-selector";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../../redux/reducers/game-reducer";
import { Cells } from "../cells/cells";
import { Directions } from "../directions/directions";
import { ISettingsGame } from "../../types/settings-game";
import { SettingsGame } from "../../settings/settings-game";
import styles from "./playground.module.scss";
import { Button } from "../../ui-components/button/button";
import { useGame } from "../../hooks/game-hook";

const Playground: FC = () => {
  const {
    runGame,
    isRunGame,
    startCell,
    cells,
    winningCell,
    selectedCell,
    directions,
  } = useGame();
  return (
    <div>
      {cells && startCell && (
        <Cells
          startCell={startCell}
          isRunGame={isRunGame}
          cells={cells}
          selectedCell={selectedCell}
          winningCell={winningCell}
        />
      )}
      {!isRunGame && (
        <div className={styles.direction_wrapper}>
          <Button onClick={runGame}>Начать игру</Button>
        </div>
      )}
      {directions && (
        <div className={styles.direction_wrapper}>
          <Directions directions={directions} />
        </div>
      )}
    </div>
  );
};

export { Playground };
