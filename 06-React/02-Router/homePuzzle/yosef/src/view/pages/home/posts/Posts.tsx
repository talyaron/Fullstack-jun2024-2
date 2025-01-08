import React, { useEffect, useState } from 'react';
import styles from './Posts.module.scss';

function Posts() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [count, setCount] = useState(0);
  const [allPosts, setAllPosts] = useState<string[]>([]); // שינוי כאן למערך סטייט
  let counter = 0;

  const posts = [
    { id: "0XYvRd7oD", title: 'Akita' },
  ];

  // הפונקציה שמבצעת את הבקשה
  const fetchImage = async () => {
    for (const post of posts) {
      if (counter >=12) break; // show me only 10 pics
  
      // const response = await fetch(`https://dog.ceo/api/ breed/${post.id}/images/random`);
      const response = await fetch(`https://api.thecatapi.com/v1/images/${post.id}`);
      const data = await response.json();
      counter++;
      console.log(data.breeds[0].origin);
      setImageUrl(data.url);
      setAllPosts(prevPosts => [...prevPosts, data.url, data.breeds[0].origin]);

    }
    console.log("all the post is: " + allPosts)
  };

  // שימוש ב-useEffect כדי להפעיל את fetchImage כל 5 שניות
  useEffect(() => {
    const interval = setInterval(() => {
      fetchImage();
      setCount(prevCount => prevCount + 1); 
    },1000); // fetch pics in 1 second

    // ניקוי ה-interval כשהקומפוננטה מתפרקת
    return () => clearInterval(interval);
  }, []); // הרצה פעם אחת אחרי הרינדור הראשון

  return (
    <div>
      <h3>Timer: {count} seconds</h3>
      <h1>Cats pictures:</h1>
      {/* שימוש ב-map להציג את התמונות */}
      <div>
        {allPosts.map((post, index) => (
          <img key={index} src={post} alt={`cat-${index}`} className={styles.pics}/>
        ))}
      </div>
    </div>
  );
}

export default Posts;
