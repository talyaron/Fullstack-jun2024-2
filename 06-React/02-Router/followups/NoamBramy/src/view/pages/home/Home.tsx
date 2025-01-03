import React from 'react'
import { Outlet, NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Home it testing to me</h1>
      <NavLink to="/about">About</NavLink>
      <br />
    </div>
  )
}

export default Home
