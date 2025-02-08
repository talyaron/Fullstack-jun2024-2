import React from 'react'
import styles from "./Background.module.scss"

interface BackgroundProps{
    children: React.ReactNode;
}

const Background:FC<BackgroundProps> = ({children}) => {
  return (
    <div>
      <button className={styles.background}>{children}</button>
    </div>
  )
}

export default Background
