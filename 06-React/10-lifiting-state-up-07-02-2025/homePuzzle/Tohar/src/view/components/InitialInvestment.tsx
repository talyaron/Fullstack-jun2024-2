import React from 'react'
import styles from "./InputBox.module.scss"

interface Props {
    investment: number;
    setInvestment: (investment: number) => void;
}

function InitialInvestment({ investment, setInvestment }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvestment(parseFloat(e.currentTarget.value) || 0)
    }
    return (
        <div className={styles.box}>
            <h3 className={styles.header}>Initial Investment</h3>
            <input
                className={styles.input}
                type="number"
                value={investment}
                onChange={handleChange}
                min={0} />
            <h4 className={styles.value}>{investment}</h4>
        </div>
    )
}

export default InitialInvestment
