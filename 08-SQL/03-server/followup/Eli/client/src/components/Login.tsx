import  { FC } from 'react'

interface LoginProps{
    setIsLogin:(isLogin: boolean)=>void;
    setIsLoggedIn:(isLoggedIn: boolean)=>void;
}
const Login:FC<LoginProps> = ({setIsLogin,setIsLoggedIn}) => {
   async function login(e: React.FormEvent){
        e.preventDefault(); 
    
        // Get form data
        const form = new FormData(e.target as HTMLFormElement);
        const email = form.get("email") as string;
        const password = form.get("password") as string;
    
        // Send request to server
        const response = await fetch("http://localhost:3000/api/users/login", {
          method: "POST",
          credentials:"include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
    
        if (response.ok) {
          setIsLoggedIn(true)      
          } else {
          alert("login error");
    
          console.error("Registration failed");
        }
      }
    
  return (
    <div>
    <h1>Login</h1>
        <form onSubmit={login}>
            <input type="text" placeholder='enter email'name='email' />
            <input type="text" placeholder='enter password' name='password' />
            <input type="submit" placeholder='submit' name='submit' />
        </form>
        <button onClick={()=>setIsLogin(false)}> to register</button>
    </div>
  )
}

export default Login
