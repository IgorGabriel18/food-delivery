import { ReactNode } from "react";

import { ListContainer } from "./styles";

interface IProps {
    currentPage?: number;
    children: ReactNode;
}

export function List(props: IProps) {
    return <ListContainer key={`page-${props.currentPage ?? 1}`}>{props.children}</ListContainer>;
}
