import styled from "styled-components";

export const Message = styled.div`
    width: max-content;
    height: min-content;
    margin: ${({ theme }) => theme.spacing.xxxxl} 0;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xxxxl};
    background-color: ${({ theme }) => theme.colors.brand};
    border-radius: ${({ theme }) => theme.border.radius.primary};

    .message__title {
        font: ${({ theme }) => theme.typography.xl};
        color: ${({ theme }) => theme.colors.main};
    }
`;

export const ConfirmOrder = styled.div`
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
    display: grid;
    grid-template: repeat(4, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.md};
    justify-items: center;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: ${({ theme }) => theme.border.radius.primary};

    .confirm-order__purchase {
        width: fit-content;
        height: min-content;
        padding: ${({ theme }) => theme.spacing.md};
        background-color: ${({ theme }) => theme.colors.brand};
        border-radius: ${({ theme }) => theme.border.radius.primary};
        font: ${({ theme }) => theme.typography.xl};
        color: ${({ theme }) => theme.colors.main};
    }
`;
