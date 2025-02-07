import React from 'react';

interface BoxProps {
    width: number;
    height: number;
    
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
}

const Box: React.FC<BoxProps> = ({ width, height, theme, setTheme}) => {
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,   
        border:"1px solid gray"
    };

    return <div style={boxStyle} className={`${theme}`}>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Change theme
        </button>
    </div>;
};

export default Box;