import { ReactNode, Component } from 'react';
import { BaseBoxProps } from '../baseComponents/BaseBox';
interface Props extends BaseBoxProps {
    children: ReactNode;
}
interface State {
    hasError: boolean;
    errorMessage: string;
    errorTitle: string;
}
export declare class ErrorMessage extends Component<Props, State> {
    constructor(props: Props);
    static getDerivedStateFromError(error: Error): State;
    renderErrorIcon: (color: string) => JSX.Element;
    render(): ReactNode;
}
export {};
