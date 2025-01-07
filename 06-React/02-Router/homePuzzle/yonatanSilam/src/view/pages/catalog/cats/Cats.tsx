import { NavLink } from "react-router";
import styles from "./Cats.module.scss";

const Cats = () => {
  const posts = [
    {
      id: "s",
      url: "https://28.media.tumblr.com/tumblr_krvvxawUd81qa9hjso1_1280.jpg",
      width: 378,
      height: 500,
    },
    {
      id: "66l",
      url: "https://cdn2.thecatapi.com/images/66l.jpg",
      width: 500,
      height: 375,
    },
    {
      id: "6ss",
      url: "https://cdn2.thecatapi.com/images/6ss.jpg",
      width: 1200,
      height: 800,
    },
    {
      id: "70f",
      url: "https://cdn2.thecatapi.com/images/70f.jpg",
      width: 4468,
      height: 2616,
    },
    {
      id: "a3b",
      url: "https://cdn2.thecatapi.com/images/a3b.jpg",
      width: 510,
      height: 383,
    },
    {
      id: "c24",
      url: "https://cdn2.thecatapi.com/images/c24.jpg",
      width: 850,
      height: 850,
    },
    {
      id: "c3k",
      url: "https://cdn2.thecatapi.com/images/c3k.jpg",
      width: 538,
      height: 527,
    },
    {
      id: "ctb",
      url: "https://cdn2.thecatapi.com/images/ctb.jpg",
      width: 1435,
      height: 1435,
    },
    {
      id: "MTk5NTM1NQ",
      url: "https://cdn2.thecatapi.com/images/MTk5NTM1NQ.jpg",
      width: 350,
      height: 525,
    },
  ];
  return (
    <div className={styles.posts}>
      <h2>Posts</h2>
      <div className={styles.postsList}>
        {posts.map((post) => (
          <NavLink to={`/catalog/catPost/${post.id}`} key={post.id}>
            <img
              className={styles.imageBtn}
              src={`https://cdn2.thecatapi.com/images/${post.id}.jpg`}
              alt={post.id}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Cats;
