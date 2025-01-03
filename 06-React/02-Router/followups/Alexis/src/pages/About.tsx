import { NavLink, Outlet } from "react-router";

export default function About() {
  return (
    <div>
        <h1>About</h1>
      <div>
        <h1>Home</h1>
        <NavLink to="/about">About</NavLink>
        <br />
        <NavLink to="profile">Profile</NavLink> 
        <NavLink to="">Posts</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}