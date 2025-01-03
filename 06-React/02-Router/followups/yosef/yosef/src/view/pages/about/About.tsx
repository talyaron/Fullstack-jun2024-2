import React from 'react'
import { NavLink } from 'react-router'

const About = () => {
  return (
    <div>
      <h1>About: Here you can read about my website</h1>
      <NavLink to="/home">Go to Home</NavLink>
    </div>
  )
}

export default About
