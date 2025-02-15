import React from "react";

interface InterestRateProps {
  value: number;
  onChange: (value: number) => void;
}

const InterestRate: React.FC<InterestRateProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value) || 0;
    onChange(newValue);
  };

  return (
    <div className="input-container">
      <label>Percent:</label>
      <input type="number" value={value} onChange={handleChange} min="0" step="0.01" />
    </div>
  );
};

export default InterestRate;
