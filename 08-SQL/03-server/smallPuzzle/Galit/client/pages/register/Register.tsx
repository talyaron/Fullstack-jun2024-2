import styles from "./Register.module.scss";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  async function register(e: React.FormEvent) {
    e.preventDefault();

    // Get form data
    const form = new FormData(e.target as HTMLFormElement);
    const username = form.get("username") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    // Send request to server
    const response = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      alert("user registered");
      navigate("/login");
    } else {
      alert("register error");

      console.error("Registration failed");
    }
  }
  return (
    <div className={styles.background}>
      <h1>Register</h1>
      <form onSubmit={register} className={styles.form}>
        <input type="text" placeholder="enter username" name="username" />
        <input type="text" placeholder="enter email" name="email" />
        <input type="text" placeholder="enter password" name="password" />
        <input type="submit" placeholder="submit" name="submit" />
      </form>
      <Link to={"/login"}>
        <button>To login</button>
      </Link>
    </div>
  );
};

export default Register;
