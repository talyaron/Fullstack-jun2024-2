import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Posts.module.scss'
import  { useState } from 'react'
function Posts() {

  const posts= [
    { id: "akita", title: 'Akita' },
    { id: "boxer", title: 'Boxer' },
    { id: "chow", title: 'Chow' }
  ];

  return (
    <div className={styles.posts}>
      <h1>Posts</h1>
      <div className={styles.postsList}>
        {posts.map(post => (<Link to={`/home/post/${post.id}`} key={post.id} className={styles.postLink}>{post.title} </Link>))}
      </div>
    </div>
  )
}

export default Posts
