import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router'

function DogInformation() {

  const {id} = useParams();
  const [imageUrl, setImageUrl] = useState<string>('');
  const isRun = React.useRef(false);

  useEffect(() => {
    if (isRun.current) return
    isRun.current = true;
    fetch(`https://dog.ceo/api/breed/${id}/images/random`)
     .then(res => res.json())
     .then(data => {
       console.log(data)
       setImageUrl(data.message)
     })
  }, [id])


  return (
    <div>
      <h1>Information about this spsifc dog:</h1>
      <img src={imageUrl} alt="dog"/>
    </div>
  )
}

export default DogInformation



