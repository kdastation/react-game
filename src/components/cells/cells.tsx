import { FC } from "react";
import { ICell } from "../../types/cell";
import { MemoCell } from "../cell/cell";
import styles from "./cells.module.scss";

interface CellsProps {
  selectedCell: ICell | null;
  cells: ICell[];
  winningCell: ICell | null;
  isRunGame: boolean;
  startCell: ICell;
}

const Cells: FC<CellsProps> = (props) => {
  const { selectedCell, cells, winningCell, isRunGame, startCell } = props;
  return (
    <div className={styles.cells}>
      {cells.map((cell) => {
        return (
          <MemoCell
            key={`${cell.x}_${cell.y}`}
            cell={cell}
            isStart={cell.x === startCell.x && cell.y === startCell.y}
            isRunGame={isRunGame}
            isSelected={
              cell?.x === selectedCell?.x && cell?.y === selectedCell?.y
            }
            isWinning={cell?.x === winningCell?.x && cell?.y === winningCell?.y}
          />
        );
      })}
    </div>
  );
};

export { Cells };
