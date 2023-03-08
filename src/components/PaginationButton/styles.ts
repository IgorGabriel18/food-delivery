import styled from "styled-components";

export const Container = styled.button`
    width: max-content;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.brand};
    border: none;
    border-radius: ${({ theme }) => theme.border.radius.secondary};
    cursor: pointer;
    font: ${({ theme }) => theme.typography.sm};
    color: ${({ theme }) => theme.colors.main};

    :disabled {
        opacity: ${({ theme }) => theme.opacity};
    }
`;
