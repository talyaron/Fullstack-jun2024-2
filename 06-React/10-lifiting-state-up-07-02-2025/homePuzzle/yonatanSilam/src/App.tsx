import { useState } from "react";
import styles from "./App.module.scss";
import { Link } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.container}>
        <h1>body fat calculator</h1>
        <Link className={styles.btnSecondary} to="/man">
          man
        </Link>
        <Link className={styles.btnSecondary} to="/woman">
          woman
        </Link>
      </div>
    </>
  );
}

export default App;
