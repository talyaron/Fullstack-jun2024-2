import { useState } from "react";

interface Props {
    changeInput: (value: number, key: "P" | "R" | "T") => void;
}


export default function InitialSum({ changeInput }: Props) {
    const [value, setValue] = useState<number>(0);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = Math.max(0, parseFloat(e.target.value) || 0);
        setValue(newValue);
        changeInput(newValue, "P");
    }

    return (
        <div>
            <label htmlFor="initial-sum">Initial Sum (Principal):</label>
            <input 
                id="initial-sum"
                type="number"
                min="0"
                value={value}
                onChange={handleChange}
                aria-label="Enter the initial sum"
            />
        </div>
    );
}
