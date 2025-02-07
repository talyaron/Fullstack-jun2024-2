import React, { FC } from 'react'

interface MainImage {
  image: string,
  alt: string,
}

const MainImage:FC<MainImage> = ({image, alt}) => {
  return (
    <div>
      <img src={`${image}`} alt={alt}/>
    </div>
  )
}

export default MainImage
