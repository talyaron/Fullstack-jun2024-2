import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import styles from './Post.module.scss'
const Post = () => {

  const {id} = useParams();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [lifeSpan, setLifeSpan] = useState<string>('');
  const [origin, setOrigin] = useState<string>('');

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setImageUrl(data.url)
      setLifeSpan(data.breeds[0].life_span)
      setOrigin(data.breeds[0].origin)
    })
  }, [id])
  return (
    <div className={styles.content}>
      <h1>My cat picture </h1>
      <img src={imageUrl} alt="dog"/>
      <p>Life Span: {lifeSpan}</p>
      <p>Origin: {origin}</p>
    </div>
  )
}

export default Post

