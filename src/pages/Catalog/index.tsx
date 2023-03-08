import { MagnifyingGlass } from "phosphor-react";

import { products } from "~assets/fake-data/products";
import { CatalogCard } from "~components/CatalogCard";
import { List } from "~components/List";
import { PageBanner } from "~components/PageBanner";
import { PaginationButton } from "~components/PaginationButton";
import { usePagination } from "~hooks/usePagination";
import { useSearchAndFilter } from "~hooks/useSearchAndFilter";
import { categories } from "~utils/constants";

import { SearchField, FilterField, FilterButton, PaginationControls } from "./styles";

export function Catalog() {
    const { filteredItems, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory } =
        useSearchAndFilter(products);
    const { currentItems, currentPage, totalPages, handleClickGoPrevPage, handleClickGoToPage, handleClickGoNextPage } =
        usePagination(filteredItems);

    return (
        <>
            <PageBanner title="All Foods" />
            <SearchField>
                <MagnifyingGlass className="search-field__icon" />
                <input
                    type="search"
                    autoComplete="off"
                    placeholder="What did you eat today?"
                    value={searchTerm}
                    onChange={(ev) => setSearchTerm(ev.target.value)}
                    className="search-field__input"
                />
            </SearchField>
            <FilterField>
                {categories.map((item, index) => (
                    <FilterButton
                        key={index}
                        selected={selectedCategory === item.label ? true : false}
                        onClick={() => setSelectedCategory(item.label)}
                    >
                        {item.icon}
                        <span className="filter-field__label">{item.label}</span>
                    </FilterButton>
                ))}
            </FilterField>
            <List currentPage={currentPage}>
                {currentItems.map((item) => (
                    <CatalogCard key={item.id} {...item} />
                ))}
            </List>
            {totalPages > 1 && (
                <PaginationControls>
                    <PaginationButton
                        disabled={currentPage === 1 ? true : false}
                        fn={handleClickGoPrevPage}
                        title="PREV"
                    />
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <PaginationButton
                            key={index}
                            disabled={index + 1 === currentPage ? true : false}
                            fn={() => handleClickGoToPage(index + 1)}
                            title={`${index + 1}`}
                        />
                    ))}
                    <PaginationButton
                        disabled={currentPage === totalPages ? true : false}
                        fn={handleClickGoNextPage}
                        title="NEXT"
                    />
                </PaginationControls>
            )}
        </>
    );
}
