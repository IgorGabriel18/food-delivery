import { Trash } from "phosphor-react";
import { useState } from "react";

import { useCart } from "~hooks/useCart";
import { IProduct } from "~types/globalTypes";

import { CardContainer, Heading, Figure, Quantity, StateButton } from "./styles";

export function CartCard(props: IProduct) {
    const { handleClickUpdateProductQuantity, handleClickRemoveProductFromCart } = useCart();
    const [currentQuantity, setCurrentQuantity] = useState(props.quantity!);

    const handleClickDecreaseQuantity = () => {
        const newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;
        setCurrentQuantity(newQuantity);

        handleClickUpdateProductQuantity(props.id, newQuantity);
    };
    const handleClickIncreaseQuantity = () => {
        const newQuantity = currentQuantity + 1;
        setCurrentQuantity(newQuantity);

        handleClickUpdateProductQuantity(props.id, newQuantity);
    };

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
                <button onClick={handleClickDecreaseQuantity} className="quantity__button">
                    -
                </button>
                <span className="quantity__value">{props.quantity}</span>
                <button onClick={handleClickIncreaseQuantity} className="quantity__button">
                    +
                </button>
            </Quantity>
            <StateButton type="button" onClick={() => handleClickRemoveProductFromCart(props.id)}>
                <Trash className="state-button__icon" />
            </StateButton>
        </CardContainer>
    );
}
