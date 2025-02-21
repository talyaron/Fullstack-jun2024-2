import './App.css'
import {Link, Outlet} from "react-router";




function App() {

 

  return (
    <div>
      <h1>Hi from yosef</h1>
      <Outlet /> 
      <h2>Pokemons:</h2>
      <Link to="charizard">Char</Link>
      <br />
      <Link to="bulbasaur">Bulba</Link>
      <br />
      <Link to="squirtle">Squirtle</Link>
      <br />
      <Link to="pikachu">Pikachu</Link>
      <br />
      <Link to="ditto">Mewtwo</Link>
      <Link to="dogs"><h1>Join Dogs</h1></Link>
    </div>
  )
}

export default App
