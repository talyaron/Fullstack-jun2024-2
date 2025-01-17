import React from 'react'
import { Dogs } from './Dogs';


function DogsComp() {
   
    const {dogs, SetNewDogs} = Dogs();
  return (
    <div>
  {dogs?.message.map(msg=>{
    return <img src={msg} alt="dog" className='dog' />
  })}
  <button onClick={SetNewDogs} className='btn'>refresh</button>
    </div>
  )
}

export default DogsComp
