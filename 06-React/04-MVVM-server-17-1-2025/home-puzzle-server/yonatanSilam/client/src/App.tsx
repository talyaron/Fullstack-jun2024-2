
import styles from "./app.module.scss";
import { Link } from "react-router";
import Todo from "./view/todo/Todo";

function App() {

  return (
    <>
      {/* <div className={styles.container}>
        <Link className={styles.btnSecondary} to="/login">
        login
        </Link>
        <Link className={styles.btnSecondary} to="/register">
         register
        </Link>
      </div> */}
      <Todo/>
    </>
  );
}

export default App;
