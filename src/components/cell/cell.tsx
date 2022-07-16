import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { selectCell } from "../../redux/reducers/game-reducer";
import { ICell } from "../../types/cell";
import { Start } from "../../assets/icons-components/start";
import { SadIcon } from "../../assets/icons-components/sad-icon";
import { SmileIcon } from "../../assets/icons-components/smile-icon";
import { EmojiIcon } from "../../assets/icons-components/emoji-icon";
import styles from "./cell.module.scss";

interface CellProps {
  isWinning: boolean;
  isSelected: boolean;
  isStart: boolean;
  cell: ICell;
  isRunGame: boolean;
}

const Cell: FC<CellProps> = (props) => {
  const { isSelected, isWinning, cell, isRunGame, isStart } = props;
  const dispatch = useDispatch();
  const selectCellOnClick = () => {
    dispatch(selectCell(cell));
  };
  return (
    <div className={styles.cell} onClick={selectCellOnClick}>
      {isStart && (
        <span className={styles.cell__start}>
          <Start />
        </span>
      )}
      {isWinning && isSelected && (
        <span className={styles.cell__smile}>
          <SmileIcon />
        </span>
      )}
      {!isWinning && isSelected && (
        <span className={styles.cell__sad}>
          <SadIcon />
        </span>
      )}
      {isWinning && !isSelected && !isRunGame && (
        <span className={styles.cell__sad}>
          <EmojiIcon />
        </span>
      )}
    </div>
  );
};

const MemoCell = memo(Cell);

export { Cell, MemoCell };
