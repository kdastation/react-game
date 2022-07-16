import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./button.module.scss";

const Button: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  const { children } = props;
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export { Button };
