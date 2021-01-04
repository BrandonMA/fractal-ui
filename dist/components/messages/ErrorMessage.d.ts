import { ReactNode, Component } from 'react';
import { BaseBoxProps } from '../baseComponents/BaseBox';
interface State {
    hasError: boolean;
    errorMessage: string;
    errorTitle: string;
}
export declare class ErrorMessage extends Component<BaseBoxProps, State> {
    constructor(props: BaseBoxProps);
    static getDerivedStateFromError(error: Error): State;
    renderErrorIcon: (color: string) => JSX.Element;
    render(): ReactNode;
}
export {};
