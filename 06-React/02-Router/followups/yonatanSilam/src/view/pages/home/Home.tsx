import { NavLink, Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to="/About">about</NavLink>
      <br />
      <NavLink to="profile">Post</NavLink> <div> </div>
      <NavLink to="">Profile</NavLink>
      <Outlet/>
    </div>
  )
}

export default Home
