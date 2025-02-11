import { FC } from "react";
import styles from "./InitialSum.module.scss";

interface Props {
  principal: number;
  setPrincipal: (value: number) => void;
}

const InitialSum:FC<Props> = ({ principal, setPrincipal }) => {
  return (
    <div className={styles.container}>
      <label>Initial Sum:</label>
      <input
        type="number"
        value={principal}
        min="0"
        onChange={(e) => setPrincipal(parseFloat(e.target.value) || 0)}
      />
    </div>
  );
};

export default InitialSum;
