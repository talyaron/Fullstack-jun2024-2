import React from 'react'
import { NavLink } from 'react-router'
import styles from './About.module.scss'

const About = () => {
  return (
    <div>
      <h1>Yosef Ibrahim Website</h1>
      <div className={styles.text}>
      <p>אתר זה נבנה לצורך לימודי קורס
        <p>Full Stack</p>
        <p>עם המרצה - האיש והאגדה - טל ירון</p>
      </p>
      <br />
      <NavLink to="/home">Go to Home</NavLink>
      </div>
    </div>
  )
}

export default About
