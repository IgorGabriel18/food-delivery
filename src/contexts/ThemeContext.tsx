import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import { colors } from "~styles/colors";
import { variables } from "~styles/variables";
import { IChildren } from "~types/globalTypes";

interface IThemeContext {
    theme: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContext);

export function ThemeContextProvider(props: IChildren) {
    const [theme, setTheme] = useState(true);
    const toggleTheme = () => setTheme(!theme);

    const currentTheme = {
        colors: {
            brand: colors.brand,
            ...(theme ? colors.dark : colors.light)
        },
        ...variables
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>
        </ThemeContext.Provider>
    );
}
