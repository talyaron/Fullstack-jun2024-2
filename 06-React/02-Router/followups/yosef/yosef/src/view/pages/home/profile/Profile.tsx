import React from 'react'
import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <span>יוסף</span>
          </div>
        </div>
        
        <div className={styles.content}>
          <h1 className={styles.name}>יוסף איברהים</h1>
          <p className={styles.title}>מפתח Full Stack</p>
          
          <div className={styles.info}>
            <p>📧 yosefib88@gmail.com</p>
            <p>📍אבו גוש</p>
          </div>
          
          <p className={styles.bio}>
            מפתח תוכנה בעל ניסיון של 5 שנים בפיתוח אפליקציות ווב.
            מתמחה ב-React, Node.js ו-TypeScript.
          </p>
          
          <div className={styles.skills}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile