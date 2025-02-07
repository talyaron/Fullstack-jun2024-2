import { createContext } from 'react';

interface Theme {
    color: string;
    background: string;
}

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme:Theme)=> void;
}

export const theme: Theme = {
    color: 'blue',
    background: 'white'
}

const ThemeContext = createContext<ThemeContextType>({
    theme,
    setTheme: () => { }
});

export default ThemeContext;