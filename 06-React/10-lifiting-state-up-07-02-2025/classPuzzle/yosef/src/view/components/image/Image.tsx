import React from "react";
import styles from "./Image.module.scss"

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  theme: "light" | "dark";
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, theme }) => {
  const imageStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className={styles.picture}>
      <img src={src} alt={alt} style={imageStyle} className={`${theme}`} />
    </div>
  );
};

export default Image;
