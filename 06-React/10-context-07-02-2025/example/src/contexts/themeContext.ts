import { createContext } from 'react';

export enum Theme {
    dark = 'dark',
    light = 'light'
}

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const theme: Theme = Theme.light;

const ThemeContext = createContext<ThemeContextType>({
    theme,
    setTheme: () => { }
});

export default ThemeContext;