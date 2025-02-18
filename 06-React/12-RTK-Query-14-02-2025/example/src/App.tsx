import './App.css'
import {Link, Outlet} from "react-router";




function App() {

 

  return (
    <div>
      <h1>Hi</h1>
      <Outlet /> 
      <Link className="btn" to="charizard">Charizard</Link>
    
      <Link className="btn"  to="bulbasaur">Bulbasaur</Link>
    </div>
  )
}

export default App
