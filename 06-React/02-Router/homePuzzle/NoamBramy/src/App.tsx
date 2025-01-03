import {NavLink } from "react-router";
import './App.css'

function App() {
  return (
    <>
    <h1>Welcome to our catalog.</h1>
      <NavLink to="/home" style={{ textDecoration: 'none' }}>
        <button>Catalog</button>
      </NavLink>
    </>
  )
}

export default App
