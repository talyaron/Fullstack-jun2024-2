import  { useState } from 'react'
import styles from './Posts.module.scss'
import { Link } from 'react-router'

const Posts = () => {
  const posts= [
    { id: "akita", title: 'Akita' },
    { id: "boxer", title: 'Boxer' },
    { id: "chow", title: 'Chow' }
  ];

  return (
    <div className={styles.posts}>
      <h2>Posts</h2>
      <div className={styles.postsList}>
        {posts.map(post => (<Link to={`/home/post/${post.id}`} key={post.id}>{post.title}</Link>))}
      </div>
    </div>
  )
}

export default Posts