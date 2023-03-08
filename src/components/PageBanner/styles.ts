import styled from "styled-components";

export const PageBannerContainer = styled.div`
    width: min(100%, 56rem);
    height: min-content;
    display: grid;
    grid-template: min-content / 1fr max-content 1fr;
    column-gap: ${({ theme }) => theme.spacing.xl};
    align-items: center;

    .page-banner-container__title {
        font: ${({ theme }) => theme.typography.xxl};
        color: ${({ theme }) => theme.colors.primary};
    }

    ::before,
    ::after {
        content: "";
        width: 1fr;
        height: ${({ theme }) => theme.border.size};
        background-color: ${({ theme }) => theme.colors.brand};
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.breakpoints.sm}) {
        grid-template: min-content / max-content 1fr;

        ::before {
            display: none;
        }
    }
`;
