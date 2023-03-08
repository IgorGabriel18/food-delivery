import { ReactNode } from "react";

import { MyCustomTheme } from "~utils/constants";

export type ThemeType = typeof MyCustomTheme;

export interface IChildren {
    children: ReactNode;
}

export interface IProduct {
    id: number;
    category: string;
    title: string;
    price: number;
    image: string;
    quantity?: number;
}
