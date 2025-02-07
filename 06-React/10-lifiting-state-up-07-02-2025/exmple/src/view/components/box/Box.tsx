import React from 'react';

interface BoxProps {
    width: number;
    height: number;

    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
    handleSetState: () => void;
}

const Box: React.FC<BoxProps> = ({ width, height, theme, setTheme, handleSetState }) => {
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        border: "1px solid gray"
    };

    return <div style={boxStyle} className={`${theme}`}>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Change Theme 1
        </button>
        <button onClick={handleSetState}>
            Change theme 2
        </button>
    </div>;
};

export default Box;