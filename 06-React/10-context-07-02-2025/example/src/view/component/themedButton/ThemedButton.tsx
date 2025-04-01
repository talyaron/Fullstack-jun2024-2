import { useContext } from "react";
import ThemeContext, { Theme } from "../../../contexts/themeContext";

const ThemedButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
    };

    return (
        <button
            onClick={toggleTheme}
            className={theme}
            style={{ padding: '10px', margin: '10px', color: 'gray', backgroundColor: "tomato" }}           
        >
            Toggle Theme
        </button>
    );
};

export default ThemedButton;