import React from "react";

interface InitialSumProps {
  value: number;
  onChange: (value: number) => void;
  setInitialInvestment: (value: number) => void;
}

const InitialSum: React.FC<InitialSumProps> = ({ value, onChange, setInitialInvestment }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value) || 0;
    onChange(newValue);
    setInitialInvestment(newValue);
  };

  return (
    <div className="input-container">
      <label>Sum:</label>
      <input type="number" value={value} onChange={handleChange} min="0" />
    </div>
  );
};

export default InitialSum;
