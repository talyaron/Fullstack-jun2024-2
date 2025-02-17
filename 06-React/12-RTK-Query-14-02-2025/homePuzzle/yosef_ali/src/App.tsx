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
      <h2>Dogs:</h2>
      <div>
      <Link to="dogs/husky">husky</Link>
      <br />
      <Link to="dogs/puggle">puggle</Link>
      <br />
      <Link to="dogs/appenzeller">appenzeller</Link>
      </div>
    </div>
  )
}

export default App
