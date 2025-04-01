import React, { useState } from "react";
import style from "./Login.module.scss";
import { infoValidation } from "../Model/formCheck";

const textToUser = {
  userNameInv: "",
  emailInv: "",
  passwordInv: "",
  rePasswordInv: "",
};

function Register() {
  const [userText, setUserText] = useState(textToUser);


  async function registerUser(userName:string,email:string,password:string,rePassword:string) {
    const response = await fetch('http://localhost:3000/api/users/register-user', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName, email, password, rePassword })
  });
  const data = await response.json();
  console.log(data);
  }
  function checkForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const userName = form.get("userName") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const rePassword = form.get("rePassword") as string;

    setUserText({
      ...userText,
      userNameInv: infoValidation.isNameValid(userName),
      emailInv: infoValidation.isEmailValid(email),
      passwordInv: infoValidation.isPasswordValid(password),
      rePasswordInv: infoValidation.isRePasswordValid(rePassword, password),
    });

  

    console.log(userText);
    registerUser(userName,email,password,rePassword)
    // if(!nameInValid&&!emailInValid&&!passwordInValid&&!rePasswordInValid)
    // {
    //   console.log("OK!")
    // }else console.log(nameInValid,emailInValid,passwordInValid,rePasswordInValid);
  }
  return (
    <form onSubmit={checkForm} className={style.form}>
      <h1>Register</h1>
      <input
        type="text"
        name="userName"
        placeholder="Enter username"
        className={style.input}
        required
      />
      <p className={style.redText}>{userText.userNameInv}</p>

      <input
        type="text"
        name="email"
        placeholder="Enter email"
        className={style.input}
        required
      />
      <p className={style.redText}>{userText.emailInv}</p>

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        className={style.input}
        required
      />
      <p className={style.redText}>{userText.passwordInv}</p>

      <input
        type="password"
        name="rePassword"
        placeholder="Enter password again"
        className={style.input}
        required
      />
      <p className={style.redText}>{userText.rePasswordInv}</p>

      <input type="submit" value="Register" className={style.submit} />
    </form>
  );
}

export default Register;
