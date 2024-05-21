import { FunctionComponent } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
};

const Button: FunctionComponent<ButtonType> = ({ className = "" }) => {
  return (
    <button className={[styles.button, className].join(" ")}>
      <div className={styles.text}>Search</div>
    </button>
  );
};

export default Button;
