import { FC } from 'react';
import styles from './Background.module.scss'

interface BackgroundProps {
  children: React.ReactNode;
  text:string
}

const Background:FC<BackgroundProps> = ({children, text}) => {
  return (
    <div className={styles.background}>{children}</div>
  )
}

export default Background;