import { NavLink, Outlet } from 'react-router-dom'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.home}>
            <div className="container">
                <h1>Home</h1>
                <NavLink to="/cats" style={{ textDecoration: 'none', color: '#333', fontWeight:'bold' }}>Cats Catalog</NavLink>
                <br />
                <NavLink to="/dogs" style={{ textDecoration: 'none', color: '#333' , fontWeight:'bold' }}>Dogs Catalog</NavLink>
            <div className={styles.content}>
            <Outlet />
            </div>
            </div>
        </div>
    )
}

export default Home