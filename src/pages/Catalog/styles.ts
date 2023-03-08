import styled, { css } from "styled-components";

interface ISelected {
    selected: boolean;
}

export const SearchField = styled.div`
    width: min(100%, 44rem);
    height: min-content;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    display: grid;
    grid-template: min-content / max-content 1fr;
    column-gap: ${({ theme }) => theme.spacing.lg};
    align-items: center;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: ${({ theme }) => theme.border.radius.secondary};

    .search-field__icon {
        font-size: ${({ theme }) => theme.icon.primary};
        color: ${({ theme }) => theme.colors.brand};
    }

    .search-field__input {
        width: 100%;
        height: min-content;
        background-color: transparent;
        border: none;
        outline: none;
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};

        ::placeholder {
            color: ${({ theme }) => theme.colors.brand};
        }
    }
`;

export const FilterField = styled.div`
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
    justify-items: center;

    @media (min-width: ${({ theme }) => theme.screen.breakpoints.xs}) {
        grid-template: min-content / repeat(4, max-content);
        column-gap: ${({ theme }) => theme.spacing.xl};
        justify-content: center;
    }
`;

export const FilterButton = styled.button<ISelected>`
    width: 6rem;
    height: 6rem;
    padding: ${({ theme }) => theme.spacing.md};
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.sm};
    justify-items: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.brand};
    border: none;
    border-radius: ${({ theme }) => theme.border.radius.circle};
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};

    .filter-field__icon {
        font-size: ${({ theme }) => theme.icon.primary};
        color: ${({ theme }) => theme.colors.main};
    }

    .filter-field__label {
        white-space: nowrap;
        font: ${({ theme }) => theme.typography.sm};
        color: ${({ theme }) => theme.colors.main};
    }

    ${({ selected }) =>
        selected &&
        css`
            background-color: transparent;
            border: ${({ theme }) => theme.border.size} solid ${({ theme }) => theme.colors.brand};

            .filter-field__icon,
            .filter-field__label {
                color: ${({ theme }) => theme.colors.primary};
            }
        `}

    :hover {
        padding-top: ${({ theme }) => theme.spacing.lg};
        scale: ${({ theme }) => theme.scale};
    }
`;

export const PaginationControls = styled.div`
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;
    display: flex;
    column-gap: ${({ theme }) => theme.spacing.md};
    justify-content: center;
`;
