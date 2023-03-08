import styled from "styled-components";

export const CardContainer = styled.li`
    width: min(100%, 16rem);
    height: min-content;
    padding: ${({ theme }) => theme.spacing.md};
    display: grid;
    grid-template: repeat(4, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.sm};
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: ${({ theme }) => theme.border.radius.primary};
`;

export const Heading = styled.div`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: min-content / repeat(2, max-content);
    column-gap: ${({ theme }) => theme.spacing.sm};
    justify-content: space-between;
    align-items: center;

    .heading__category {
        width: max-content;
        height: min-content;
        padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
        background-color: ${({ theme }) => theme.colors.brand};
        border-radius: ${({ theme }) => theme.border.radius.secondary};
        font: ${({ theme }) => theme.typography.sm};
        color: ${({ theme }) => theme.colors.main};
    }

    .heading__price {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Figure = styled.figure`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.sm};
    justify-items: center;

    .figure__image {
        width: 100%;
        height: 8rem;
    }

    .figure__title {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.secondary};
        text-align: center;
    }
`;

export const Quantity = styled.div`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: min-content / max-content 0.25fr max-content;
    column-gap: ${({ theme }) => theme.spacing.md};
    justify-content: space-evenly;
    align-items: center;

    .quantity__button {
        width: max-content;
        height: min-content;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.brand};
    }

    .quantity__value {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.secondary};
        text-align: center;
    }
`;

export const StateButton = styled.button`
    width: 100%;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.brand};
    border-radius: ${({ theme }) => theme.border.radius.primary};
    cursor: pointer;

    .state-button__icon {
        font-size: ${({ theme }) => theme.icon.secondary};
        color: ${({ theme }) => theme.colors.main};
    }
`;
