import { Link } from "react-router-dom";

import hero__img from "~assets/images/hero.svg";
import { useCustomTheme } from "~hooks/useCustomTheme";
import { useScreen } from "~hooks/useScreen";
import { services } from "~utils/constants";

import { HomePageHeroSectionContainer, Content, Services } from "./styles";

export function Home() {
    const { sizeScreen } = useScreen();
    const { BREAKPOINT_MD_PX } = useCustomTheme();

    return (
        <HomePageHeroSectionContainer>
            <Content>
                <div className="content__info">
                    <div className="content__texts">
                        <h5 className="content__subtitle">Easy way to make an order</h5>
                        <h1 className="content__title">
                            <span className="content__highlight">HUNGRY?</span> Just wait food at your door
                        </h1>
                        <p className="content__description">
                            With our delivery service, no matter how hungry you are, we guarantee that the food you
                            crave will be at your doorstep in no time.
                        </p>
                    </div>
                    <Link to="/catalog" className="content__link">
                        Order now
                    </Link>
                </div>
                {sizeScreen >= BREAKPOINT_MD_PX && <img src={hero__img} alt="Delivery" className="content__image" />}
            </Content>
            <Services>
                {services.map((item, index) => (
                    <div key={index} className="services__item">
                        {item.icon}
                        <span className="services__label">{item.label}</span>
                    </div>
                ))}
            </Services>
        </HomePageHeroSectionContainer>
    );
}
