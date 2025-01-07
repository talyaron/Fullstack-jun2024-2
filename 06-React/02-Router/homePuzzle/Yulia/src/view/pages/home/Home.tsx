import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to the Pet Catalog</h1>
      <p>Explore our collection of adorable cats and dogs.</p>
      <Link to="/catalog" className={styles.catalogLink}>
        Go to Catalog
      </Link>
    </div>
  );
};

export default Home;
