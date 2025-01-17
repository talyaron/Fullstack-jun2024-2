import React from 'react'
import { useDogsVM } from './DogsVM';
import styles from "./Dogs.module.scss";

const Dogs = () => {

    const {dogs, getNewDogs} = useDogsVM();

  return (
    <div className={styles.container}>
    <h1>Random Dogs</h1>
    <div className={styles.images}>
      {dogs?.message.map((dogUrl, index) => (
        <img
          key={index}
          src={dogUrl}
          alt={`random-dog-${index}`}
          className={styles.image}
        />
      ))}
    </div>
    <button className={styles.button} onClick={getNewDogs}>
      Get New Dogs
    </button>
  </div>
  )
}

export default Dogs