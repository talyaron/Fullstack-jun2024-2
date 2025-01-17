import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Catalog.module.scss";

const Catalog: React.FC = () => {
  return (
    <div className={styles.catalog}>
      {/* Sidebar */}
      <nav className={styles.sidebar}>
        <NavLink
          to="cats"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Cats
        </NavLink>
        <NavLink
          to="dogs"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Dogs
        </NavLink>
      </nav>

      {/* Main content */}
      <div className={styles.content}>
        <Outlet /> 
      </div>
    </div>
  );
};

export default Catalog;
