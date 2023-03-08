import { Container } from "./styles";

interface IProps {
    disabled: boolean;
    fn: () => void;
    title: string;
}

export function PaginationButton(props: IProps) {
    return (
        <Container disabled={props.disabled} onClick={props.fn}>
            {props.title}
        </Container>
    );
}
