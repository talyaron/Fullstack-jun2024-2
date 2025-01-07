
import { NavLink } from 'react-router'
import './app.scss'

function App() {

  return (
    <>
    
    <div className='page'>
    <h1 className='title'>WELCOME</h1>
    <NavLink className='btn' to="/catalog">go to catalog</NavLink>
    </div>
    </>
  )
}

export default App
