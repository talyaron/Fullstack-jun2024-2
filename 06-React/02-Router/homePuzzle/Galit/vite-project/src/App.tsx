import { NavLink } from 'react-router-dom';


import './App.css'

function App() {

  return (
    <>
         <div className="container">
      <h1>Cats and Dogs Catalog</h1>
      <NavLink  to="/home">Tap here to see the catalog</NavLink>
     </div>
    </>
  )
}

export default App
