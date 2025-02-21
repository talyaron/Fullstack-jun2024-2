import { FC } from "react"
import styles from "./Display.module.scss"
import { SelectStarProps } from "./SelectStarButton"


const DisplayStar:FC<SelectStarProps> = ({img,name})  => {
  return (
    <div className={styles.display}>
        <h1>{name}</h1>
        {img? <img src={img} alt="" />:""}
     
    </div>
  )
}

export default DisplayStar
