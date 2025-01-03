import './App.css';
import { NavLink } from 'react-router';

function App() {
  return (
    <div>
      <h1>Hey, click 'login' to enter the site</h1>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default App;
