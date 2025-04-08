import { useState } from 'react';
import './App.css'
import Auth from './components/Auth'
import MainPage from './components/MainPage';

function App() {
  const [isLoggedIn,setIsLoggedIn] =useState(false);

  return (
    <>
    {isLoggedIn? <MainPage /> :<Auth setIsLoggedIn={setIsLoggedIn} />}
    </>
  )
}

export default App
