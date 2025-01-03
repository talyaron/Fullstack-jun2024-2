import { NavLink } from 'react-router'

const About = () => {
    return (
        <div style={{ textAlign: 'center', height:"100%" }}>
            <h1>About</h1>
            <NavLink to="/home">Home</NavLink>
        </div>
    )
}

export default About