import React from 'react'
import style from "./Login.module.scss"
function Login() {
     function checkForm(e: React.FormEvent<HTMLFormElement>){
          e.preventDefault();
          console.log("hhhh");
      }
  return (
    <form onSubmit={checkForm} className={style.form}>
        <h1>Login</h1>
        <input type="text" name='userName' placeholder='Enter username' className={style.input}/>
        <input type="text" name='email' placeholder='Enter email' className={style.input}/>
        <input type="text" name='password' placeholder='Enter password' className={style.input}/>
        <input type="submit" value="Log In" className={style.submit}/>
    </form>
  )
}

export default Login
