import React, { FC } from 'react'
import styles from "./InputStyle.module.scss"

interface SumProps
{
    sum:number;
    setSum:(sum:number)=>void;
}

const InitialSum:FC<SumProps> = ({sum,setSum}) => {
    function handleChange(e:React.ChangeEvent<HTMLInputElement>)
    {
        setSum(parseFloat(e.currentTarget.value)||0)
    }
  return (
    <div className={styles.card}>
          <h4>Initial Sum</h4>
      <input className={styles.input} type="number" value={sum} onChange={handleChange}  min={0}/>
      <h4>{sum}</h4>
    </div>
  )
}

export default InitialSum
