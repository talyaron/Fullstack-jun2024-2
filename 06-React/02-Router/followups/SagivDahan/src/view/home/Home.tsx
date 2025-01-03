import React from 'react'
import styles from './home.module.scss'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <>
    <h1>Hello!</h1>
    <NavLink to="/">main</NavLink>
    </>
    
  )
}

export default Home