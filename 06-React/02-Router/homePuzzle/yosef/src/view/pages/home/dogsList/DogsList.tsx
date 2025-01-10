import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Dogs.module.scss'

function DogsList() {
    const dogs = [
  
      { id: "african", title: 'African' },
      { id: "boxer", title: 'Boxer' },
      { id: "chow", title: 'Chow' },
      { id: "affenpinscher", title: 'Affenpinscher' },
      { id: "airedale", title: 'Airedale' },
      { id: "pitbull", title: 'Pitbull' },
    ]

  return (
    <div className={styles.dogList}>
      <h1>Dogs Catagory:</h1>
      <div className={styles.dogsList}>
      {dogs.map(dog => <button><NavLink to={`/home/dog/${dog.id}`} key={dog.id}>{dog.title}</NavLink></button>)}
      </div>
    </div>
  )
}

export default DogsList