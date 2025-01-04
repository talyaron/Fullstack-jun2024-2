import React from 'react';
import { Link } from 'react-router';
import styles from './Posts.module.scss';

const Posts = () => {
  const posts = [
    { id: "J2PmlIizw", title: 'Cat 1' },
    { id: "LSaDk6OjY", title: 'Cat 2' },
    { id: "8pCFG7gCV", title: 'Cat 3' },
    { id: "byQhFO7iV", title: 'Cat 4' },
    { id: "O3btzLlsO", title: 'Cat 5' },
    { id: "udZiLDG_E", title: 'Cat 6' } 
  ];

  return (
    <>
      <div className={styles.posts}>Posts</div>
      <div className={styles.postList}>
        {posts.map(post => (
          <Link to={`/home/post/${post.id}`} key={post.id} className={styles.postLink}>
            {post.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Posts;
