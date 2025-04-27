import { Link, useNavigate } from "react-router";
import styles from "./Login.module.scss";

const Login = () => {
  const navigate = useNavigate();

  async function login(e: React.FormEvent) {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("logged in !");
      navigate("/");
    } else {
      alert("login error");

      console.error("Registration failed");
    }
  }

  return (
    <div className={styles.background}>
      <h1>Login</h1>
      <form onSubmit={login} className={styles.form}>
        <input type="text" placeholder="enter email" name="email" />
        <input type="text" placeholder="enter password" name="password" />
        <input type="submit" placeholder="submit" name="submit" />
      </form>
      <Link to={"/register"}>
        <button> to register</button>
      </Link>
    </div>
  );
};

export default Login;
