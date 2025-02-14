import { useState } from "react";

interface YearsProps {
    handleSetState: (year: number) => void;
}

const Years: React.FC<YearsProps> = ({ handleSetState }) => {
    const [years, setYears] = useState<number>(0); // הגדרת 0 כברירת מחדל

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(e.target.value, 10) || 0; // אם לא תקין, נקבע ל-0
        if (value >= 0 && value <= 100) {
            setYears(value);
            handleSetState(value);
        }
    }

    return (
        <>
            <p>הכנס מספר שנות הפקדה:</p>
            <input
                type="number"
                min="0"
                max="80"
                value={years}
                onChange={handleChange}
            />
            <h2>שנות הפקדה: {years} שנים</h2>
        </>
    );
};

export default Years;
