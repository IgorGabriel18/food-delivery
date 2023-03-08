import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "~types/globalTypes";
import { findProductIndex, isProductInCart } from "~utils/helpers";

interface ICartState {
    products: IProduct[];
}

const initialState: ICartState = {
    products: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<IProduct>) {
            const cart = state.products;
            const product = action.payload;
            const index = findProductIndex(cart, product.id);

            isProductInCart(cart, product.id) ? (cart[index].quantity! += product.quantity!) : cart.push(product);
        },
        updateProductQuantity(state, action: PayloadAction<{ productId: number; quantity: number }>) {
            const cart = state.products;
            const productId = action.payload.productId;
            const index = findProductIndex(cart, productId);

            cart[index].quantity = action.payload.quantity;
        },
        removeProductFromCart(state, action: PayloadAction<number>) {
            const productId = action.payload;

            state.products = state.products.filter((product) => product.id !== productId);
        },
        purchase(state) {
            state.products = [];
        }
    }
});

export const { addProductToCart, updateProductQuantity, removeProductFromCart, purchase } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
