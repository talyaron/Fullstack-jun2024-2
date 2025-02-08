import React from 'react';

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

    return <img src={src} alt={alt} style={imageStyle} className={`${theme}`} />;
};

export default Image;