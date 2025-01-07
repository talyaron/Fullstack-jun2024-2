import { NavLink } from "react-router";
import styles from "./Dogs.module.scss";

const Dogs = () => {
  const posts = [
    { id: "affenpinscher", title: "affenpinscher" },
    { id: "african", title: "african" },
    { id: "airedale", title: "airedale" },
    { id: "akita", title: "akita" },
    { id: "appenzeller", title: "appenzeller" },
    { id: "collie", title: "Border Collie" },
  ];
  return (
    <div className={styles.posts}>
      <h2>choose a breed</h2>
      <div className={styles.postsList}>
        {posts.map((post) => (
          <NavLink to={`/catalog/dogPost/${post.id}`} key={post.id}>
            <h2>{post.title}</h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Dogs;
