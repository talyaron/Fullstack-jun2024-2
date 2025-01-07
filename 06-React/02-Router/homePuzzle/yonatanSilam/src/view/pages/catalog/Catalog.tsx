import { NavLink, Outlet } from "react-router";
import styles from "./Catalog.module.scss";
const Catalog = () => {
  return (
    <div className={styles.catalogPage}>
      <div className={styles.navBar}>
        <NavLink className={styles.btn} to="">
          cats
        </NavLink>
        <NavLink className="btn" to="dogs">
          dogs
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Catalog;
