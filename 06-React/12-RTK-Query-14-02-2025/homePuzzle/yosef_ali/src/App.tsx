import './App.css'
import {Link, Outlet} from "react-router";




function App() {

 

  return (
    <div>
      <h1>Hi</h1>
      <Outlet /> 
      <Link to="charizard">Char</Link>
      <Link to="bulbasaur">Bulba</Link>
    </div>
  )
}

export default App
