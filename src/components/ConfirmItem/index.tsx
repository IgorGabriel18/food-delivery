import { ConfirmItemContainer } from "./styles";

interface IProps {
    title: string;
    value: number | string;
}

export function ConfirmItem(props: IProps) {
    return (
        <ConfirmItemContainer>
            <h5 className="confirm-item__title">{props.title}</h5>
            <span className="confirm-item__value">{props.value}</span>
        </ConfirmItemContainer>
    );
}
