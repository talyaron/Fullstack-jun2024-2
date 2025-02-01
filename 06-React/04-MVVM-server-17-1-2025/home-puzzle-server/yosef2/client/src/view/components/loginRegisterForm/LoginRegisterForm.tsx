import React, { useState } from 'react'
import {  useNavigate } from "react-router";


function LoginRegisterForm() {

    const navigate = useNavigate();
    
    function checkLogin(){
        navigate("/todo")
    }

    function checkRegister(){
      alert("עובדים על זה")
    }

  return (
    <div>
        <h1>Lets Connect</h1>
      <form>
        <input type="text" placeholder="Username" />
        <br /><br />
        <input type="password" placeholder="Password" />
        <br /><br />
        <h2 style={{backgroundColor:"yellow"}}>** תמשיך האלה - אין צורך להרשם בינתיים **</h2>
        <button type='button' onClick={checkLogin}>Login</button>
        <button type='button' onClick={checkRegister}>Register</button>
      </form>
    </div>
  )
}

export default LoginRegisterForm
