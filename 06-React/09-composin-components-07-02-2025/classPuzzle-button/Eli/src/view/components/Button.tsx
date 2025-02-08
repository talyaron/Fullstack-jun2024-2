import React, { FC } from 'react'
import styles from "./Button.module.scss"

interface ButtonProps{
children:React.ReactNode;
text:string;
link:string;
}

const Button:FC<ButtonProps>=({text,children,link}) =>{
  return (
    <a href={link}>
    <button className={styles.button}>
      {text }
      {children}
    </button>
    </a>
  )
}

export default Button
