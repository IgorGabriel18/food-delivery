import { useDispatch, useSelector } from "react-redux";

import { addProductToCart, purchase, removeProductFromCart, updateProductQuantity } from "~store/slice/cartSlice";
import { RootState } from "~store/store";
import { IProduct } from "~types/globalTypes";

export const useCart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.cart.products);
    const totalProducts = products.length;

    const handleClickAddToCart = (product: IProduct) => dispatch(addProductToCart(product));
    const handleClickUpdateProductQuantity = (productId: number, quantity: number) => {
        dispatch(updateProductQuantity({ productId, quantity }));
    };
    const handleClickRemoveProductFromCart = (productId: number) => {
        dispatch(removeProductFromCart(productId));
    };
    const handleClickPurchase = () => dispatch(purchase());

    return {
        products,
        totalProducts,
        handleClickAddToCart,
        handleClickUpdateProductQuantity,
        handleClickRemoveProductFromCart,
        handleClickPurchase
    };
};
