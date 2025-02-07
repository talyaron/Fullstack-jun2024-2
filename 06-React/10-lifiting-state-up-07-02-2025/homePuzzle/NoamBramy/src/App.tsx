import { FC, useState } from "react";

import styles from "./app.module.scss"
import InitialSum from "./view/components/initialsum/InitialSum";
import InterestRate from "./view/components/interestrate/InterestRate";
import Years from "./view/components/years/Years";
import Calculator from "./view/components/calculator/Calculator";
import StatusMessage from "./view/components/statusmessage/StatusMessage";

const App:FC = () => {
  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [years, setYears] = useState<number>(0);

  return (
    <div className={styles.container}>
      <h1>Compound Interest Calculator</h1>
      <div className={styles.inputs}>
        <InitialSum principal={principal} setPrincipal={setPrincipal} />
        <InterestRate rate={rate} setRate={setRate} />
        <Years years={years} setYears={setYears} />
      </div>
      <Calculator principal={principal} rate={rate} years={years} />
      <StatusMessage principal={principal} rate={rate} years={years} />
    </div>
  );
};

export default App;
