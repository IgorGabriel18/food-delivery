import styled from "styled-components";

export const HomePageHeroSectionContainer = styled.section`
    width: min(100%, ${({ theme }) => theme.screen.max_width});
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.lg};
`;

export const Content = styled.section`
    width: 100%;
    height: min-content;

    .content__info {
        width: 100%;
        height: min-content;
        display: grid;
        grid-template: repeat(2, min-content) / 100%;
        row-gap: ${({ theme }) => theme.spacing.xxxl};
        justify-items: center;
    }

    .content__texts {
        width: 100%;
        height: min-content;
        display: grid;
        grid-template: repeat(3, min-content) / 100%;
        row-gap: ${({ theme }) => theme.spacing.md};
    }

    .content__subtitle {
        font: ${({ theme }) => theme.typography.lg};
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }

    .content__title {
        font: ${({ theme }) => theme.typography.xl};
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }

    .content__highlight {
        font: ${({ theme }) => theme.typography.xxl};
        color: ${({ theme }) => theme.colors.brand};
    }

    .content__description {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.secondary};
        text-align: center;
    }

    .content__link {
        width: max-content;
        height: min-content;
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
        font: ${({ theme }) => theme.typography.lg};
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.brand};
        border: ${({ theme }) => theme.border.size} solid ${({ theme }) => theme.colors.brand};
        border-radius: ${({ theme }) => theme.border.radius.primary};
        transition: ${({ theme }) => theme.transition};

        :hover {
            background-color: transparent;
            color: ${({ theme }) => theme.colors.brand};
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.breakpoints.md}) {
        display: grid;
        grid-template: min-content / 1.25fr 1fr;
        column-gap: ${({ theme }) => theme.spacing.xl};
        justify-items: center;
        align-items: center;

        .content__info {
            justify-items: start;
        }

        .content__subtitle,
        .content__title,
        .content__description {
            text-align: left;
        }

        .content__image {
            width: min(100%, 24rem);
            height: min-content;
        }
    }
`;

export const Services = styled.div`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(4, min-content) / max-content;
    row-gap: ${({ theme }) => theme.spacing.sm};
    justify-content: center;

    .services__item {
        width: 100%;
        max-width: max-content;
        height: min-content;
        display: grid;
        grid-template: min-content / repeat(2, max-content);
        column-gap: ${({ theme }) => theme.spacing.md};
        align-items: center;
    }

    .services__icon {
        width: max-content;
        height: min-content;
        padding: ${({ theme }) => theme.spacing.sm};
        background-color: ${({ theme }) => theme.colors.brand};
        border-radius: ${({ theme }) => theme.border.radius.circle};
        font-size: ${({ theme }) => theme.icon.secondary};
        color: ${({ theme }) => theme.colors.primary};
    }

    .services__label {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.breakpoints.sm}) {
        grid-template: repeat(2, min-content) / repeat(2, max-content);
        column-gap: ${({ theme }) => theme.spacing.xxl};
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.breakpoints.xl}) {
        grid-template: min-content / repeat(4, max-content);
    }
`;
