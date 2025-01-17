import React from 'react'
import { useDogVM } from './DogVM';

const Dog = () => {

    const {dog, getNewDog} = useDogVM();

  return (
    <div>
        <img src={dog?.message} alt="" />
        <button onClick={getNewDog}>New Dog</button>
    </div>
  )
}

export default Dog