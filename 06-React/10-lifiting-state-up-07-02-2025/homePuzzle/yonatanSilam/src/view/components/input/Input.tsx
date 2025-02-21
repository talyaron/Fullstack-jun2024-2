import React from 'react'
import styles from './Input.module.scss'
interface Props {
    placeholder: string;
  }

const Input: React.FC<Props> = ({placeholder}) => {
  return (
      <input  step="any" className={styles.styledInput} type="number" name={placeholder} placeholder={placeholder} />
  )
}

export default Input
