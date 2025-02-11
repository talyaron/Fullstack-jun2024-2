import { FC } from 'react';
import styles from './MainImage.module.scss'

interface MainImageProps {
  image: string;
  alt: string;
}

const MainImage: FC<MainImageProps> = ({ image, alt }) => {
  return (
    <div>
      <img src={image} alt={alt} className={styles.MainImage} />
    </div>
  );
};

export default MainImage;
