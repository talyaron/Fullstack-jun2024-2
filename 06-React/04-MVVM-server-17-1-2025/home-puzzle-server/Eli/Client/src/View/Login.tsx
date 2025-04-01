import React, { useState } from "react";
import style from "./Login.module.scss";
import { infoValidation } from "../Model/formCheck";
import {  useNavigate } from "react-router";

const textToUser = {
  emailInv: "",
  passwordInv: "",
};

function Login() {

  const [userText, setUserText] = useState(textToUser);
  const navigate = useNavigate();


    async function loginUser(email: string, password: string) {
      const response = await fetch("http://localhost:3000/api/users/login-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include', 
    body: JSON.stringify({ email, password }),
  });
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      setUserText({ ...userText, emailInv: data.message });
      return;
    }
    console.log("success")
  setTimeout(() => {
    navigate('/todo'); 
  }, 1000); 
  }

  function checkForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    setUserText({
      ...userText,
      emailInv: infoValidation.isEmailValid(email),
      passwordInv: infoValidation.isPasswordValid(password),
    });

    loginUser(email, password);
  }
  return (
    <form onSubmit={checkForm} className={style.form}>
      <h1>Login</h1>

      <input
        type="text"
        name="email"
        placeholder="Enter email"
        className={style.input}
      />
      <p className={style.redText}>{userText.emailInv}</p>

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        className={style.input}
      />
      <p className={style.redText}>{userText.passwordInv}</p>

      <input type="submit" value="Log In" className={style.submit} />
    </form>
  );
}

export default Login;
