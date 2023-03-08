import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        width: 100%;
        height: min-content;
        min-height: 100vh;
        padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md} ${({ theme }) =>
    theme.spacing.xxxxl}; 
        display: flex;
        flex-direction: column;
        row-gap: ${({ theme }) => theme.spacing.xl};
        align-items: center;
        background-color: ${({ theme }) => theme.colors.main};
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;
