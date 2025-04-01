import { FormEvent } from "react";
import styles from "./Home.module.scss";
import { Link, useNavigate } from "react-router";
import { useHomeVM } from "./HomeVM";
import Todo from "../todo/Todo";

function Home() {
    const { user } = useHomeVM();
    const navigate = useNavigate();
    console.log("user", user?.username);

  return (
    <>
      <div className={styles.container}>
        <h1>{user?.username}</h1>
        <Todo/>
      </div>
    </>
  );
}

export default Home;
