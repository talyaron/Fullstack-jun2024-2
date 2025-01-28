import { FormEvent } from "react";
import styles from "./Home.module.scss";
import { Link, useNavigate } from "react-router";
import { useHomeVM } from "./HomeVM";

function Home() {
    const { user } = useHomeVM();
    const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <h1>{user?.userName}</h1>
        <Link className={styles.btnSecondary} to="/register">
          go to register
        </Link>
      </div>
    </>
  );
}

export default Home;
