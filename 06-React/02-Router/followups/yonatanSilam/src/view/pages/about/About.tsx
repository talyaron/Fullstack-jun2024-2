
import { NavLink, Outlet } from 'react-router'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <NavLink to="/home">home</NavLink>
      <br />
      <NavLink to="">yonatan</NavLink><div></div>
      <NavLink to="project">about the project</NavLink>
      <Outlet/>
    </div>
  )
}

export default About
