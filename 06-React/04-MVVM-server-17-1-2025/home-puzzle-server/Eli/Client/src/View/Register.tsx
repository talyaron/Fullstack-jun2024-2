import React from 'react'
import style from "./Login.module.scss"
import { infoValidation } from '../Model/formCheck';

function Register() {
    function checkForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
       
        const form = new FormData(e.currentTarget);

        const userName= form.get("userName")as string;
        const email= form.get("email")as string;
        const password= form.get("password")as string;
        const rePassword= form.get("rePassword")as string;

      const nameValid=  infoValidation.isNameValid(userName);
      const emailValid=  infoValidation.isEmailValid(email);
      const passwordValid=  infoValidation.isPasswordValid(password);
      const rePasswordValid=  infoValidation.isRePasswordValid(rePassword,password);

        console.log(nameValid,emailValid,passwordValid,rePasswordValid);
    }
  return (
    <form onSubmit={checkForm} className={style.form}>
    <h1>Register</h1>
    <input type="text" name='userName' placeholder='Enter username' className={style.input} required/>
    <input type="text" name='email' placeholder='Enter email' className={style.input} required/>
    <input type="text" name='password' placeholder='Enter password' className={style.input} required/>
    <input type="text" name='rePassword' placeholder='Enter password again'className={style.input}required />
    <input type="submit" value="Log In" className={style.submit}/>
</form>
  )
}

export default Register
