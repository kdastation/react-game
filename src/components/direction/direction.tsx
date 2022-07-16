import { FC } from "react";
import arrow from "../../assets/icons/arrow.svg";
import { IDirection } from "../../types/direction";
import { DirectionService } from "../../services/direction-service/direction-service";
import styles from "./direction.module.scss";

interface DirectionProps {
  direction: IDirection;
}

const Direction: FC<DirectionProps> = (props) => {
  const { direction } = props;
  return (
    <div
      style={{
        transform: `rotate(${DirectionService.getDirectionArrow(direction)})`,
      }}
      className={styles.direction}
    >
      <img className={styles.direction__image} src={arrow} alt="arrow" />
    </div>
  );
};

export { Direction };
