import React, { useState } from "react";
import "./App.css";
import StatusMessage from "./view/components/StatusMessage";
import Calculator from "./view/components/Calculator";

const App: React.FC = () => {
  const [finalAmount, setFinalAmount] = useState<number>(0);
  const [initialInvestment, setInitialInvestment] = useState<number>(0);

  const earnedAmount = finalAmount - initialInvestment;

  return (
    <div className={`app-container ${earnedAmount > 1000 ? "rich" : "income"}`}>
      <StatusMessage earned={earnedAmount} />
      <Calculator setFinalAmount={setFinalAmount} setInitialInvestment={setInitialInvestment} />
    </div>
  );
};

export default App;
