import React from "react";

interface YearsProps {
  value: number;
  onChange: (value: number) => void;
}

const Years: React.FC<YearsProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || 0;
    onChange(newValue);
  };

  return (
    <div className="input-container">
      <label>Years:</label>
      <input type="number" value={value} onChange={handleChange} min="1" />
    </div>
  );
};

export default Years;
