import { FC } from "react";
import styles from "./Calculator.module.scss";

interface Props {
  principal: number;
  rate: number;
  years: number;
}

const Calculator:FC<Props> = ({ principal, rate, years }) => {
  const finalAmount = principal * Math.pow(1 + rate / 100, years);

  return (
    <div className={styles.result}>
      <h2>Final Amount:</h2>
      <p>${finalAmount.toFixed(2)}</p>
    </div>
  );
};

export default Calculator;
