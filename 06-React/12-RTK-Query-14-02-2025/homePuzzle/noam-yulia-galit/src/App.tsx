import './App.css'
import {Link, Outlet} from "react-router";




function App() {

 

  return (
    <div>
      <h1>Hi</h1>
      <Outlet /> 
      <Link to="akita">Akita</Link>
      <br></br>
      <Link to="appenzeller">Appenzeller</Link>
    </div>
  )
}

export default App
