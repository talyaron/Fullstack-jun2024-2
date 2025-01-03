import React from 'react';
import styles from './Posts.module.scss';

const Posts = () => {
  const boxes = Array.from({ length: 12 }, (_, index) => (
    <div key={index} className={styles.box}>
      Box {index + 1}
    </div>
  ));

  return (
    <>
      <div className={styles.posts}>Posts</div>
      <div className={styles.allPosts}>{boxes}</div>
    </>
  );
};

export default Posts;
