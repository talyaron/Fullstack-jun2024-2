import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
      <h1>Home</h1>
      <NavLink to="/about">About</NavLink>
      <br />
      <NavLink to="profile">Profile</NavLink>{""}
      <br />
      <NavLink to="">Posts</NavLink>
    </div>
    <div>
        <br />
        <Outlet />
    </div>
    </>
  )
}

export default Home
