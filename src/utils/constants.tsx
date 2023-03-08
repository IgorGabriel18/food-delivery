import { Clock, Target, Lock, HeartStraight, Stack, ForkKnife, Hamburger, Pizza } from "phosphor-react";

import { Cart } from "~pages/Cart";
import { Catalog } from "~pages/Catalog";
import { Home } from "~pages/Home";
import { colors } from "~styles/colors";
import { variables } from "~styles/variables";

export const MyCustomTheme = {
    colors: {
        brand: colors.brand,
        ...colors.dark
    },
    ...variables
};

export const pages = [
    {
        path: "/",
        title: "Home",
        element: <Home />
    },
    {
        path: "/catalog",
        title: "Catalog",
        element: <Catalog />
    },
    {
        path: "/cart",
        title: "Cart",
        element: <Cart />
    }
];

export const services = [
    {
        icon: <Clock className="services__icon" />,
        label: "Fast delivery guaranteed"
    },
    {
        icon: <Target className="services__icon" />,
        label: "Real-time tracking"
    },
    {
        icon: <Lock className="services__icon" />,
        label: "Easy and secure payment"
    },
    {
        icon: <HeartStraight className="services__icon" />,
        label: "Satisfaction guaranteed"
    }
];

export const categories = [
    {
        icon: <Stack className="filter-field__icon" />,
        label: "ALL"
    },
    {
        icon: <Hamburger className="filter-field__icon" />,
        label: "BURGER"
    },
    {
        icon: <ForkKnife className="filter-field__icon" />,
        label: "SIDE DISH"
    },
    {
        icon: <Pizza className="filter-field__icon" />,
        label: "PIZZA"
    }
];
