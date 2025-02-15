import React, { useState } from "react";
import InitialSum from "./InitialSum";
import InterestRate from "./InterestRate";
import Years from "./Years";

interface CalculatorProps {
  setFinalAmount: (amount: number) => void;
  setInitialInvestment: (amount: number) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ setFinalAmount, setInitialInvestment }) => {
  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [years, setYears] = useState<number>(0);

  const calculateFinalAmount = () => {
    const r = rate / 100;
    const final = principal * Math.pow(1 + r, years);
    setFinalAmount(final);
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <InitialSum value={principal} onChange={setPrincipal} setInitialInvestment={setInitialInvestment} />
      <InterestRate value={rate} onChange={setRate} />
      <Years value={years} onChange={setYears} />
      <button onClick={calculateFinalAmount}>Calculate</button>
    </div>
  );
};

export default Calculator;
