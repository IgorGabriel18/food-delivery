import { useState } from "react";

import { IProduct } from "~types/globalTypes";

export const useSearchAndFilter = (items: IProduct[]) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const filteredItemsBySearch = items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredItemsByCategory =
        selectedCategory !== "ALL"
            ? filteredItemsBySearch.filter((item) => item.category === selectedCategory)
            : filteredItemsBySearch;

    return {
        filteredItems: filteredItemsByCategory,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory
    };
};
