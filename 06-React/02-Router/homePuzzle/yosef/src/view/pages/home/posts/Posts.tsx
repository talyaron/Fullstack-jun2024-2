import React, { useEffect, useState } from 'react';
import styles from './Posts.module.scss';

function Posts() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [count, setCount] = useState(0);
  const [allPosts, setAllPosts] = useState<string[]>([]); // שינוי כאן למערך סטייט
  let counter = 0;

  const posts = [
    { id: "akita", title: 'Akita' },
    { id: "boxer", title: 'Boxer' },
    { id: "chow", title: 'Chow' },
    { id: "beagle", title: 'Beagle' }
  ];

  // הפונקציה שמבצעת את הבקשה
  const fetchImage = async () => {
    for (const post of posts) {
      if (counter >= 10) break; // show me only 10 pics
  
      const response = await fetch(`https://dog.ceo/api/breed/${post.id}/images/random`);
      const data = await response.json();
      counter++;
      console.log(data);
      setImageUrl(data.message);
      setAllPosts(prevPosts => [...prevPosts, data.message]);
    }
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
      <h1>Dogs pictures:</h1>
      {/* שימוש ב-map להציג את התמונות */}
      <div>
        {allPosts.map((post, index) => (
          <img key={index} src={post} alt={`dog-${index}`} className={styles.pics}/>
        ))}
      </div>
    </div>
  );
}

export default Posts;
