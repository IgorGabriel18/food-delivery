import { useState } from "react";

import { IProduct } from "~types/globalTypes";

export const usePagination = (items: IProduct[]) => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 8;
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handleClickGoPrevPage = () => setCurrentPage((prevPage) => prevPage - 1);
    const handleClickGoNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
    const handleClickGoToPage = (pageNumber: number) => setCurrentPage(pageNumber);

    return {
        currentItems,
        currentPage,
        totalPages,
        handleClickGoPrevPage,
        handleClickGoNextPage,
        handleClickGoToPage
    };
};
