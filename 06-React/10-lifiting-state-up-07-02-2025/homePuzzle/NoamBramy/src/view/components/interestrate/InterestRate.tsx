import { FC } from "react";
import styles from "./InterestRate.module.scss";

interface Props {
  rate: number;
  setRate: (value: number) => void;
}

const InterestRate:FC<Props> = ({ rate, setRate }) => {
  return (
    <div className={styles.container}>
      <label>Interest Rate (%):</label>
      <input
        type="number"
        value={rate}
        min="0"
        onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
      />
    </div>
  );
};

export default InterestRate;
