import { useEffect, useState } from 'react';
import { useParams } from 'react-router'; 

const Post = () => {
  const { id } = useParams(); 
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/${id}`) 
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setImageUrl(data.url); 
      })
      .catch(err => console.error('Failed to fetch image:', err));
  }, [id]);

  return (
    <div>
      <h1>post: {id}</h1>
      {imageUrl ? (
        <img src={imageUrl} alt={`Cat ${id}`} style={{ maxWidth: '30rem' }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Post;
