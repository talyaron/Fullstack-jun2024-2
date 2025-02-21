import React, { FC } from 'react';
import styles from './image.module.scss'
interface ImageProps {
  setImage: (image: string) => void;
}

const Image: FC<ImageProps> = ({ setImage }) => {
  const dogs = [
    { src: 'https://images.dog.ceo/breeds/waterdog-spanish/20180723_185559.jpg', alt: 'Dog Image' },
    { src: 'https://images.dog.ceo/breeds/african/n02116738_8489.jpg', alt: 'Dog 2 Image' },
    { src: 'https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg', alt: 'Dog 3 Image' },
  ];

  return (
    <div>
      {dogs.map((img) => (
        <button className={styles.Button} key={img.src} onClick={() => setImage(img.src)}>
          <img src={img.src} alt={img.alt} className={styles.image} />
        </button>
      ))}
    </div>
  );
};

export default Image;
