/// <reference types="react" />
import { ButtonProps } from './Button';
export interface CircularIconButtonProps extends ButtonProps {
    children: JSX.Element;
}
declare const CircularIconButton: {
    (props: CircularIconButtonProps): JSX.Element;
    displayName: string;
};
export { CircularIconButton };
