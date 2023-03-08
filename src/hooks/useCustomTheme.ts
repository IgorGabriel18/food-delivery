import { useContext } from "react";
import { useTheme } from "styled-components";

import { ThemeContext } from "~contexts/ThemeContext";
import { convertRemToPx } from "~utils/helpers";

export const useCustomTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const themeValues = useTheme();

    const BREAKPOINT_XS_PX = convertRemToPx(themeValues.screen.breakpoints.xs);
    const BREAKPOINT_MD_PX = convertRemToPx(themeValues.screen.breakpoints.md);

    return { theme, toggleTheme, themeValues, BREAKPOINT_XS_PX, BREAKPOINT_MD_PX };
};
