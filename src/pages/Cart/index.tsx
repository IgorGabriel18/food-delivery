import { Link } from "react-router-dom";

import { CartCard } from "~components/CartCard";
import { ConfirmItem } from "~components/ConfirmItem";
import { List } from "~components/List";
import { PageBanner } from "~components/PageBanner";
import { useCart } from "~hooks/useCart";
import { calculateTotalPrice } from "~utils/helpers";

import { ConfirmOrder, Message } from "./styles";

export function Cart() {
    const { products, totalProducts, handleClickPurchase } = useCart();

    return (
        <>
            <PageBanner title="Your Foods" />
            {products.length <= 0 ? (
                <Message>
                    <h3 className="message__title">No products found</h3>
                </Message>
            ) : (
                <>
                    <List>
                        {products.map((item) => (
                            <CartCard key={item.id} {...item} />
                        ))}
                    </List>
                    <ConfirmOrder>
                        <ConfirmItem title="Total products" value={totalProducts} />
                        <ConfirmItem title="Freight" value={`$${3.5}`} />
                        <ConfirmItem title="Total" value={`$${3.5 + calculateTotalPrice(products)}`} />
                        <Link to="/" onClick={handleClickPurchase} className="confirm-order__purchase">
                            CONFIRM ORDER
                        </Link>
                    </ConfirmOrder>
                </>
            )}
        </>
    );
}
