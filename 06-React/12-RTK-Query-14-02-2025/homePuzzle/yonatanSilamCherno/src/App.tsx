import './App.css'
import {Link, Outlet} from "react-router";




function App() {

 

  return (
    <div>
      <h1>Hi</h1>
      <Link to="affenpinscher">affenpinscher ---</Link>
      <Link to="akita">akita ---</Link> 
      <Link to="appenzeller">appenzeller ---</Link>

      <Outlet /> 

    </div>
  )
}

export default App
