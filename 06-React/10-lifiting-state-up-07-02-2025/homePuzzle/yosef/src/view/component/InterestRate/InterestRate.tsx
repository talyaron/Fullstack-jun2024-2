import { useState } from "react";


interface RateProps {
    handleSetState: (interestRate:number) => void;
}

const InterestRate: React.FC<RateProps> = ({ handleSetState }) => {
    const [rate, setRate] = useState<number>(); // שים לב שהתחלנו מ-0 ולא מחרוזת ריקה

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(e.target.value);
        if (value >= 0 && value<=100) { // לוודא שלא מכניסים מספר שלילי
            setRate(value);
            handleSetState(value);
        }
    }

    return (
        <>
            <p>הכנס שיעור ריבית שנתית</p>
            <input
                type="number"
                value={rate} // כדי שה-State תמיד ישלוט בערך
                onChange={handleChange} 
            />
            <h2>ריבית שנתית: {rate}%</h2>
        </>
    );
};

export default InterestRate;