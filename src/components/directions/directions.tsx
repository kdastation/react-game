import { FC } from "react";
import { IDirection } from "../../types/direction";
import { Direction } from "../direction/direction";
import styles from "./directions.module.scss";

interface DirectionsProps {
  directions: IDirection[];
}

const Directions: FC<DirectionsProps> = (props) => {
  const { directions } = props;
  return (
    <div className={styles.directions}>
      {directions.map((direction, index) => {
        return <Direction key={index} direction={direction} />;
      })}
    </div>
  );
};

export { Directions };
