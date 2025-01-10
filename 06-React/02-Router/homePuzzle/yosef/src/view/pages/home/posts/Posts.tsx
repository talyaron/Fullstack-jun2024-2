import React, { useEffect, useState } from 'react';
import styles from './Posts.module.scss';
import { NavLink, Outlet } from 'react-router-dom';

interface Cat {
  imgUrl: string;
  origin: string;
  life: string;
}

function Posts() {
  const [count, setCount] = useState(0);
  const [allPosts, setAllPosts] = useState<Cat[]>([]);
  let counter = 0;

  const posts = [
    { id: "0XYvRd7oD", title: 'Akita' },
  ];

  const fetchImage = async () => {
    for (const post of posts) {
      if (counter >= 4) break;
  
      const response = await fetch(`https://api.thecatapi.com/v1/images/${post.id}`);
      const data = await response.json();
      counter++;
      const newCat: Cat = {
        imgUrl: data.url,
        origin: data.breeds[0].origin,
        life: data.breeds[0].life_span
      };     
      setAllPosts(prevPosts => [...prevPosts, newCat]);
    }
  };

  const pictureClicked = (index: number) => {
    // ניתן להשתמש ב-navigate במקום NavLink לניווט פרוגרמטי
    // navigate(`/home/post/${index}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchImage();
      setCount(prevCount => prevCount + 1); 
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.postsContainer}>
      <h3>Timer: {count} seconds</h3>
      <h1>Cats pictures:</h1>
      
      <div className={styles.catsGrid}>
        {allPosts.map((post, index) => (
          <div key={index} className={styles.catCard}>
            <NavLink to={`/home/post/${post.origin}`}>
              <img 
                src={post.imgUrl} 
                alt={`cat-${index}`} 
                className={styles.pics} 
                onClick={() => pictureClicked(index)}
              />
            </NavLink>
            <p>Origin: {post.origin}</p>
            <p>Life Span: {post.life}</p>
          </div>
        ))}
      </div>
      
      <Outlet />
    </div>
  );
}

export default Posts;