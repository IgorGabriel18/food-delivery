import styled from "styled-components";

export const NavbarContainer = styled.header`
    position: relative;
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;
    padding: ${({ theme }) => theme.spacing.md} 0;
    display: grid;
    grid-template: min-content / repeat(2, max-content);
    column-gap: ${({ theme }) => theme.spacing.xl};
    justify-content: space-between;
    align-items: center;

    .navbar-container__icon {
        font-size: ${({ theme }) => theme.icon.primary};
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Logo = styled.h1`
    font: ${({ theme }) => theme.typography.xl};
    color: ${({ theme }) => theme.colors.primary};

    .logo__highlight {
        color: ${({ theme }) => theme.colors.brand};
    }
`;

export const Button = styled.button`
    width: max-content;
    height: min-content;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const Menu = styled.section`
    position: absolute;
    inset: calc(100% + ${({ theme }) => theme.spacing.md}) 0 0 0;
    width: 100%;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.md};
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    gap: ${({ theme }) => theme.spacing.xl};
    justify-items: center;
    background-color: ${({ theme }) => theme.colors.main};

    .menu__navigation {
        width: 100%;
        height: min-content;
        display: grid;
        grid-template: repeat(3, min-content) / 100%;
        gap: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    }

    .menu__links {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
        transition: ${({ theme }) => theme.transition};

        :hover {
            color: ${({ theme }) => theme.colors.brand};
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.breakpoints.xs}) {
        position: relative;
        inset: 0;
        grid-template: min-content / repeat(2, min-content);
        align-items: center;

        .menu__navigation {
            grid-template: min-content / repeat(3, min-content);
        }
    }
`;
