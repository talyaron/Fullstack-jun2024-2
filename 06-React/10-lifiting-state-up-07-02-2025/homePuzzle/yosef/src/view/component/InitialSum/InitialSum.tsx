import { useState } from "react";


interface InitialSumProps {
    handleSetState: (initialSum:number) => void;
}

const InitialSum: React.FC<InitialSumProps> = ({ handleSetState }) => {
    const [initialSum, setIntialSum] = useState<number>(1); // שים לב שהתחלנו מ-0 ולא מחרוזת ריקה

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(e.target.value, 10);
        if (value >= 0) { // לוודא שלא מכניסים מספר שלילי
            setIntialSum(value);
            handleSetState(value);
        }
    }

    return (
        <>
            <p>הכנס סכום התחלתי:</p>
            <input
                type="number"
                min="1"
                value={initialSum} // כדי שה-State תמיד ישלוט בערך
                onChange={handleChange} 
            />
            <h2>סכום התחלתי: {initialSum} שקל</h2>
        </>
    );
};

export default InitialSum;