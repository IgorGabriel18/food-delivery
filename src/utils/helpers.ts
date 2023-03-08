import { IProduct } from "~types/globalTypes";

export const isProductInCart = (products: IProduct[], productId: number) => {
    return products.some((product) => product.id === productId);
};

export const findProductIndex = (products: IProduct[], productId: number) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            return i;
        }
    }

    return -1;
};

export const convertRemToPx = (remValue: string) => {
    const removeRem = remValue.replace(/\D/g, "");
    const valueInPx = Number(removeRem) * 16;

    return valueInPx;
};

export const calculateTotalPrice = (products: IProduct[]) => {
    return products.reduce((total, product) => {
        const quantity = product.quantity ? product.quantity : 1;

        return total + product.price * quantity;
    }, 0);
};
