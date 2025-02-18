import { Link, Outlet } from "react-router";
import styles from "./Dog.module.scss";
const Dogs = () => {
  return (
    <div>
      <h1>Dog</h1>
      <div className={styles.linkContainer}>
        <Link className={styles.link} to="beagle">
          <h1>Beagle</h1>
        </Link>
        <Link className={styles.link} to="hound">
          <h1>Hound</h1>
        </Link>
        <Link className={styles.link} to="bulldog">
          <h1>Bulldog</h1>
        </Link>
        <Link className={styles.link} to="poodle">
          <h1>Poodle</h1>
        </Link>
        <Link className={styles.link} to="boxer">
          <h1>Boxer</h1>
        </Link>
        <Link className={styles.link} to="terrier">
          <h1>Terrier</h1>
        </Link>
        <Link className={styles.link} to="dalmatian">
          <h1>Dalmatian</h1>
        </Link>
        <Link className={styles.link} to="rottweiler">
          <h1>Rottweiler</h1>
        </Link>
        <Link className={styles.link} to="collie">
          <h1>Collie</h1>
        </Link>
        <Link className={styles.link} to="husky">
          <h1>Husky</h1>
        </Link>
        <Link className={styles.link} to="chihuahua">
          <h1>Chihuahua</h1>
        </Link>
        <Link className={styles.link} to="pomeranian">
          <h1>Pomeranian</h1>
        </Link>
        <Link className={styles.link} to="dachshund">
          <h1>Dachshund</h1>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Dogs;
