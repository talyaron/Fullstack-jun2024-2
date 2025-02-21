import { useState } from "react";

interface Props {
    changeInput: (value: number, type: "R") => void;
}

export default function InterestRate({ changeInput }: Props) {
    const [rate, setRate] = useState<number>(0);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = Math.max(0, parseFloat(e.target.value) || 0);
        setRate(newValue);
        changeInput(newValue, "R");
    }

    return (
        <div>
            <label htmlFor="interest-rate">Interest Rate:</label>
            <input
                id="interest-rate"
                type="number"
                min="0"
                value={rate}
                onChange={handleChange}
                aria-label="Enter the interest rate"
            />
        </div>
    );
}
