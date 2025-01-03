import React from 'react'
import { NavLink, Outlet } from 'react-router'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.nav}>
                <h1>Home</h1>
                <NavLink to="/about">About</NavLink>
                <br />
                <NavLink to="profile">Profile</NavLink>{" "}
                <NavLink to="">Home</NavLink>
            </div>
            <div className={styles.content}>
            <Outlet />
            </div>
        </div>
    )
}

export default Home