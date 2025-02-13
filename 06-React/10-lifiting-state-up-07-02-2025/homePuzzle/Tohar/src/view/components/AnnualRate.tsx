import React from 'react'
import styles from "./InputBox.module.scss"

interface Props {
    rate: number;
    setRate: (rate: number) => void;
}

function AnnualRate({ rate, setRate }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRate(parseFloat(e.currentTarget.value) || 0)
    }

    return (
        <div className={styles.box}>
            <h3 className={styles.header}>Annual Rate: </h3>
            <input
                className={styles.input}
                type="number"
                value={rate}
                onChange={handleChange}
                min={0} />
            <h4 className={styles.value}>{rate}%</h4>
        </div>
    )
}

export default AnnualRate
