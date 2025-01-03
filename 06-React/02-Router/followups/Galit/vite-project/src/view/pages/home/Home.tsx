import React from 'react'
import { NavLink, Outlet } from 'react-router'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.home}>
            <div>
                <h1>Home</h1>
                <NavLink to="/login"> Login</NavLink>
                <br />
                <NavLink to="profile">Profile</NavLink>{" "}
                <NavLink to="">Posts</NavLink>
            </div>
            <div className={styles.content}>
            <Outlet />
            </div>
        </div>
    )
}

export default Home