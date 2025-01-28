import { FormEvent } from "react";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router";
import { useLoginVM } from "./LoginVM";

function Login() {
    const { login } = useLoginVM();
    const navigate = useNavigate();

  function handleLogin(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const form = event.currentTarget;
    const username = form.username.value;
    const password = form.password.value;
    login(username, password);
    form.reset();
    navigate('/home')
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Log In</h1>
        <form onSubmit={handleLogin} className={styles.form}>
          <input name="username" type="text" placeholder="Username" required />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" className={styles.btn}>
            Log In
          </button>
        </form>
        <Link className={styles.btnSecondary} to="/register">
          go to register
        </Link>
      </div>
    </>
  );
}

export default Login;
