import React, { FC } from 'react'
import styles from "./InputStyle.module.scss"

interface InterestRateProps
{
    rate:number;
    setRate:(rate:number)=>void;
}

const InterestRate:FC<InterestRateProps> =  ({rate,setRate}) => {
   function handleChange(e:React.ChangeEvent<HTMLInputElement>)
    {
        setRate(parseFloat(e.currentTarget.value)||0)
    }
  return (
    <div className={styles.card}>
        <h4>intrest rate:</h4>
      <input className={styles.input} type="number" value={rate} onChange={handleChange}  min={0}/>
      <h4>{rate}%</h4>
    </div>
  )
}

export default InterestRate
