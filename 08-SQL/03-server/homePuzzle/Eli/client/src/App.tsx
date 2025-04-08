import { useEffect } from 'react';
import './App.css'
import MainPage from './pages/main/MainPage';
import Auth from './pages/auth/Auth';
import { useNavigate } from 'react-router';

function App() {
  const {userLogged,loading} = Auth();
  const navigate = useNavigate();

useEffect(()=>{
  if(!userLogged&&!loading)
  {navigate("/login")}
},[userLogged,navigate,loading])

  return (
    <MainPage />
  )
}

export default App
