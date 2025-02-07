import React from 'react';

interface BoxProps {
    picture: string;
    name: string; // הוספת שם לכל תמונה
    width: number;
    height: number;
    onSelect: (image: { src: string, name: string }) => void; // שינוי כדי להעביר גם שם וגם תמונה
}

const Box: React.FC<BoxProps> = ({ picture, name, width, height, onSelect }) => {
    const boxStyle = {
        backgroundImage: `url(${picture})`,
        width: `${width}px`,
        height: `${height}px`,
        border: "1px solid gray",
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer"
    };

    return (
        <div style={boxStyle}  onClick={() => onSelect({ src: picture, name })}>
        </div>
    );
};

export default Box;
