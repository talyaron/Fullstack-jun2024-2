import { useState } from "react";

interface Props {
    changeInput: (value: number, type: "T") => void;
}

export default function Years({ changeInput }: Props) {
    const [years, setYears] = useState<number>(0);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = Math.max(0, parseFloat(e.target.value) || 0);
        setYears(newValue);
        changeInput(newValue, "T");
    }

    return (
        <div>
            <label htmlFor="years">Years:</label>
            <input
                id="years"
                type="number"
                min="0"
                value={years}
                onChange={handleChange}
                aria-label="Enter the number of years"
            />
        </div>
    );
}
