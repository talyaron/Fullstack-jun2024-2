import './App.css'
import {Link, Outlet} from "react-router";




function App() {

 

  return (
    <div>
      <Outlet /> 
      <Link to="germanshepherd">German Shepherd</Link>
      <br></br>
      <Link to="malinois">Malinois</Link>
    </div>
  )
}

export default App
