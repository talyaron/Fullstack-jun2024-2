import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
const Post = () => {

  const {id} = useParams();
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${id}/images/random`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setImageUrl(data.message)
    })
  }, [id])
  return (
    <div>
      <h1>My Dog 22 Picture </h1>
      <h1>the id is {id}</h1>
      <img src={imageUrl} alt="dog"/>
    </div>
  )
}

export default Post

