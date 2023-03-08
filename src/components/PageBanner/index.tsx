import { PageBannerContainer } from "./styles";

interface IProps {
    title: string;
}

export function PageBanner(props: IProps) {
    return (
        <PageBannerContainer>
            <h1 className="page-banner-container__title">{props.title}</h1>
        </PageBannerContainer>
    );
}
