import { FC, useMemo, useState } from 'react';
import ThemeContext, { theme } from './themeContext';
import { type ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
    const [themeState, setThemeState] = useState(theme);

    const value = useMemo(() => ({ theme: themeState, setTheme: setThemeState }), [themeState]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}