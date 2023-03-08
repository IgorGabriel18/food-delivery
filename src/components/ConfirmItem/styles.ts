import styled from "styled-components";

export const ConfirmItemContainer = styled.div`
    width: 50%;
    height: min-content;
    display: grid;
    grid-template: min-content / repeat(2, max-content);
    column-gap: ${({ theme }) => theme.spacing.md};
    justify-content: space-between;
    align-items: center;

    .confirm-item__title {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
    }

    .confirm-item__value {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
    }
`;
