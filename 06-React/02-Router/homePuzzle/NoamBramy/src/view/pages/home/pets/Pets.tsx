import {NavLink } from "react-router";

const Pets = () => {
  return (
    <div>
      <NavLink to="dogs">Our dogs</NavLink>
      <br />
      <NavLink to="cats">Our cats</NavLink>
    </div>
  )
}

export default Pets
