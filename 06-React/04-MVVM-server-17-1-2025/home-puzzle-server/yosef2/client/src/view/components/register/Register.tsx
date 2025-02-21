import React from 'react'

function Register() {
  return (
    <div>
      <h1>register:</h1>
      <form>
        <label>Email: </label>
        <input type="text" placeholder="username" />
        <br />
        <label>Password: </label>
        <input type="password" placeholder="password" />
        <br />
        <input type="email" placeholder="email" />
        <br />
        <input type="checkbox" id="terms" name="terms" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register
