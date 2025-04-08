import { FC, useState } from 'react'
import Login from './Login';
import Register from './Register';
interface AuthProps{
  setIsLoggedIn:(IsLoggedIn:boolean)=>void
}
const Auth:FC<AuthProps> = ({setIsLoggedIn}) => {
    const [isLogin,setIsLogin] =useState(true);

  return (
    <div>
      {isLogin?<Login setIsLogin={setIsLogin} setIsLoggedIn={setIsLoggedIn} />:<Register setIsLogin={setIsLogin}/>}
    </div>
  )
}

export default Auth
