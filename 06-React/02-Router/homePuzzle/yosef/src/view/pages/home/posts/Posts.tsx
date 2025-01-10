import React, { useEffect, useState } from 'react';
import styles from './Posts.module.scss';
import { NavLink, Outlet } from 'react-router-dom';

interface Cat {
  id: string;
  imgUrl: string;
  origin: string;
  life: string;
}

function Posts() {
  const [allPosts, setAllPosts] = useState<Cat[]>([]);
  const isRun = React.useRef(false);

  const posts = [
    { id: "0XYvRd7oD"},
    { id: "neW1xzZv4"},
    { id: "qzmA6FAUs"},
    { id: "dTlqinfQA"},
    { id: "kkBIQnncT"},
    { id: "2xlxL0oI_"}
  ];

  const fetchImage = async () => {
    try{
      if (isRun.current) return;
      isRun.current = true;
  
       for (const post of posts) {
  
      const response = await fetch(`https://api.thecatapi.com/v1/images/${post.id}`);
      const data = await response.json();
      const newCat: Cat = {
        id: post.id,  
        imgUrl: data.url,
        origin: data.breeds[0].origin,
        life: data.breeds[0].life_span
      };     
      setAllPosts(prevPosts => [...prevPosts, newCat]);
    }
  }
  catch (error) {
    console.error("Error fetching cat image", error);
  }
}

  useEffect(() => {
      fetchImage();
    },[]
  )

  return (
    <div className={styles.postsContainer}>
      <h1>Cats pictures:</h1>
      
      <div className={styles.catsGrid}>
        {allPosts.map((post, index) => (
          <div key={index} className={styles.catCard}>
            <NavLink to={`/home/post/${post.id}`}>
              <img 
                src={post.imgUrl} 
                alt={`cat-${index}`} 
                className={styles.pics} 
              />
            </NavLink>
          </div>
        ))}
      </div >
      <Outlet  />
    </div>
  );
}

export default Posts;