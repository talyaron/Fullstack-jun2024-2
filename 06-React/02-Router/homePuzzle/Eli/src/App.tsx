import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./App.module.scss";
import { Outlet } from "react-router";

import "./App.css";

function App() {
  return (
    <>
      <div className={styles.wlcome}>
        <h1> welcome</h1>
      </div>
      <nav className={styles.navBar}>
        <NavLink to="Cats"> cats</NavLink>

        <NavLink to="Dogs">dogs</NavLink>
      </nav>
      <div className={styles.page}>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
