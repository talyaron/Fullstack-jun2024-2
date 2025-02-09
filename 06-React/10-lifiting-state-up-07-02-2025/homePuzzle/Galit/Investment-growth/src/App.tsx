import { useState } from "react";
import "./App.css";
import Calculator from "./view/components/Calculator/Calculator";

function App() {
  const [years, setYears] = useState<number>(1);
  const [principal, setPrincipal] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);

  const initialInvestment = principal;
  const finalAmount = principal * Math.pow(1 + interestRate / 100, years);

  return (
    <div className="container">
      <header className="header">
        <h1>Investment Growth Calculator</h1>
      </header>

      <div className="card">
        <Calculator
          years={years}
          setYears={setYears}
          principal={principal}
          setPrincipal={setPrincipal}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          initialInvestment={initialInvestment}
          finalAmount={finalAmount}
        />
      </div>

      <div className="result-card">
        <h2>Investment Results</h2>
        <p><strong>Initial Investment:</strong> ${initialInvestment.toFixed(2)}</p>
        <p><strong>Final Amount After {years} Years:</strong> ${finalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
