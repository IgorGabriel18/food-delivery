import { ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";

import { useCart } from "~hooks/useCart";
import { IProduct } from "~types/globalTypes";

import { CardContainer, Heading, Figure, Quantity, StateButton } from "./styles";

export function CatalogCard(props: IProduct) {
    const { handleClickAddToCart } = useCart();
    const [currentQuantity, setCurrentQuantity] = useState(props.quantity ? props.quantity : 1);

    const handleClickIncreaseQuantity = () => currentQuantity > 1 && setCurrentQuantity(currentQuantity - 1);
    const handleClickDecreaseQuantity = () => setCurrentQuantity(currentQuantity + 1);

    return (
        <CardContainer>
            <Heading>
                <span className="heading__category">{props.category}</span>
                <span className="heading__price">${props.price}</span>
            </Heading>
            <Figure>
                <img src={props.image} alt={props.title} className="figure__image" />
                <figcaption className="figure__title">{props.title}</figcaption>
            </Figure>
            <Quantity>
                <button onClick={handleClickIncreaseQuantity} className="quantity__button">
                    -
                </button>
                <span className="quantity__value">{currentQuantity}</span>
                <button onClick={handleClickDecreaseQuantity} className="quantity__button">
                    +
                </button>
            </Quantity>
            <StateButton
                type="button"
                onClick={() =>
                    handleClickAddToCart({
                        ...props,
                        quantity: currentQuantity
                    })
                }
            >
                <ShoppingCartSimple className="state-button__icon" />
            </StateButton>
        </CardContainer>
    );
}
