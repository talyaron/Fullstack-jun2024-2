import React, { useState } from 'react'
import style from "./Login.module.scss"
import { infoValidation } from '../Model/formCheck';

const textToUser = {
  userNameInv: "",
  emailInv: "",
  passwordInv: "",
};

function Login() {
    const [userText, setUserText] = useState(textToUser);
  
    function checkForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
        const form = new FormData(e.currentTarget);
    
        const userName = form.get("userName") as string;
        const email = form.get("email") as string;
        const password = form.get("password") as string;
    
        setUserText({
          ...userText,
          userNameInv: infoValidation.isNameValid(userName),
          emailInv: infoValidation.isEmailValid(email),
          passwordInv: infoValidation.isPasswordValid(password)
         
        });
      }
  return (
    <form onSubmit={checkForm} className={style.form}>
        <h1>Login</h1>
        <input type="text" name='userName' placeholder='Enter username' className={style.input}/>
        <p className={style.redText}>{userText.userNameInv}</p>

        <input type="text" name='email' placeholder='Enter email' className={style.input}/>
        <p className={style.redText}>{userText.emailInv}</p>

        <input type="text" name='password' placeholder='Enter password' className={style.input}/>
        <p className={style.redText}>{userText.passwordInv}</p>

        <input type="submit" value="Log In" className={style.submit}/>
    </form>
  )
}

export default Login
