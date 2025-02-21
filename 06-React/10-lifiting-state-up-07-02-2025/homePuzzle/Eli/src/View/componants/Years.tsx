import React, { FC } from 'react'
import styles from "./InputStyle.module.scss"

interface YearProps
{
    year:number;
    setyear:(year:number)=>void;
}


const Years:FC<YearProps>  = ({year,setyear}) => {
   
    
        function handleChange(e:React.ChangeEvent<HTMLInputElement>)
        {
            setyear(parseInt(e.currentTarget.value)||0)
        }
      return (
        <div className={styles.card}>
              <h4>Year</h4>
          <input className={styles.input} type="number" value={year} onChange={handleChange}  min={0}/>
          <h4>{year}</h4>
        </div>
      )
    
  
}

export default Years
