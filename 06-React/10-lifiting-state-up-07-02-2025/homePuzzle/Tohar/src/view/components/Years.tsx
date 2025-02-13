import React from 'react'
import styles from "./InputBox.module.scss"

interface Props {
    year: number;
    setYear: (year: number) => void;
}

function Years({ year, setYear }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(parseFloat(e.currentTarget.value) || 0)
    }

    return (
        <div className={styles.box}>
            <h3 className={styles.header}>Years: </h3>
            <input
                className={styles.input}
                type="number"
                value={year}
                onChange={handleChange}
                min={1}
                max={2} />
            <h4 className={styles.value}>{year}</h4>
        </div>
    )
}

export default Years
