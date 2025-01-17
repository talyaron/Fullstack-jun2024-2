import React from 'react'
import { useDogVM } from './DogVM'

const Dog = () => {
  const {dog, fetchDog} = useDogVM()
  if (!dog) return <p>Loading...</p>;
  return (
    <div>
      {dog.message.map((dogIMG, index) => (
        <img
          key={index}
          src={dogIMG}
          alt={`Dog ${index + 1}`}
          style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        />
      ))}
      <button onClick={fetchDog}>Fetch a New Dogs</button>
    </div>
  )
}

export default Dog
