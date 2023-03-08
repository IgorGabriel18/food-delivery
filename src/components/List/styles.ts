import styled from "styled-components";

export const ListContainer = styled.ul`
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;
    display: grid;
    grid-template: repeat(auto-fit, minmax(0, min-content)) / repeat(auto-fill, minmax(min-content, 16rem));
    gap: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    justify-content: center;
`;
