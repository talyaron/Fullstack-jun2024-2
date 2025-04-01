import './App.css'
import { Link } from 'react-router'

function App() {

  return (
    <>
    <div className='card'>
     <h1>Welcome to Todo List</h1>
     <div className='btnContainer'>
     <Link to="login"><button>Log in</button></Link><br />
     <Link to="todo"><button>to list</button></Link>
     </div></div>
    </>
  )
}

export default App
