import { FC } from "react";
import styles from "./Years.module.scss";

interface Props {
  years: number;
  setYears: (value: number) => void;
}

const Years:FC<Props> = ({ years, setYears }) => {
  return (
    <div className={styles.container}>
      <label>Years:</label>
      <input
        type="number"
        value={years}
        min="1"
        onChange={(e) => setYears(parseInt(e.target.value) || 1)}
      />
    </div>
  );
};

export default Years;
