import { FC } from 'react'
import styles from "./SelectStar.module.scss"
export interface SelectStarProps{
    img:string,
    name:string;

    setStar: (star: { img: string; name: string }) => void;
}

const SelectStarButton:FC<SelectStarProps> = ({img,name,setStar}) => {
  return (
    <button className={styles.starbutton} 
    onClick={() => setStar({ img, name })}>
      <img src={img} alt={name+"image"} className={styles.img}/>
    </button>
  )
}

export default SelectStarButton
