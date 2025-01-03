import React from 'react'
import { Outlet, NavLink } from "react-router";

const About = () => {
  return (
    <div>
      <h1>About Me, testing</h1>
      <NavLink to="/home">Home</NavLink>
      <br />
      <NavLink to="contact">Contact Us</NavLink>{" "}
      <NavLink to="">Details</NavLink>
          <Outlet />
    </div>
  )
}

export default About
