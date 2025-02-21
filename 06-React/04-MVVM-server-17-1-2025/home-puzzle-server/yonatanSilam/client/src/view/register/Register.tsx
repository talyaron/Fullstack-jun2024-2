import { Link, useNavigate } from "react-router";
import styles from "./Register.module.scss";
import { FormEvent } from "react";
import { useRegisterVM } from "./RegisterVM";

const Register = () => {
    const { addNewUser } = useRegisterVM();
    const navigate = useNavigate();
  function handleRegister(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const form = event.currentTarget;
    const username = form.username.value;
    const password = form.password.value;
    addNewUser(username,password)
    form.reset();
   navigate("/login")

  }

  return (
    <div>

      <div className={styles.container}>
        <h1>register</h1>
        <form onSubmit={handleRegister} className={styles.form}>
          <input name="username" type="text" placeholder="Username" required />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" className={styles.btn}>
            register
          </button>
        </form>
        <Link className={styles.btnSecondary} to="/login">
          back to login
        </Link>
      </div>
    </div>
  );
};

export default Register;
