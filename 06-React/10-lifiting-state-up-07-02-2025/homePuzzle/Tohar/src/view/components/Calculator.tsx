import { useEffect, useState } from "react";
import styles from "./InputBox.module.scss"

interface Props {
    investment: number;
    rate: number;
    year: number;
}
function Calculator({ investment, rate, year }: Props) {
    const [earnings, setEarnings] = useState<number>(0);
    const [finalAmount, setFinalAmount] = useState<number>(0);

    useEffect(() => {
        if (!investment || !rate || !year) return;
        const calculate = investment * (1 + (rate / 100) * year);
        setEarnings(parseFloat((calculate - investment).toFixed(2)));
        setFinalAmount(parseFloat(calculate.toFixed(2)));

    }, [investment, rate, year]);

    return (
        <>
            <h1 className={styles.calculator}>Earned amount: {earnings}</h1>
            <h1 className={styles.calculator}>Final Amount: {finalAmount} </h1>
            <div>{
                finalAmount > 1000 ?
                    <div className={styles.notifications}
                        style={{ backgroundColor: "#38ff29" }}>
                        <h4 className={styles.notificationsText}>You are reach!</h4>
                    </div>
                    :
                    <div className={styles.notifications}
                        style={{ backgroundColor: "#ff3729" }}>
                        <h4 className={styles.notificationsText}>You are gained some income</h4>
                    </div>
            }
            </div>
        </>
    )
};

export default Calculator;
