import { ReactNode, Component, ErrorInfo } from 'react';
import { LayerProps } from '../containers/Layer/types';
interface State {
    hasError: boolean;
    errorMessage: string;
    errorTitle: string;
}
interface ErrorMessageProps extends LayerProps {
    onError?: (error: Error, componentStack: string) => void;
}
export declare class ErrorMessage extends Component<ErrorMessageProps, State> {
    constructor(props: LayerProps);
    static getDerivedStateFromError(error: Error): State;
    componentDidCatch(error: Error, info: ErrorInfo): void;
    renderErrorIcon: (color: string) => JSX.Element;
    render(): ReactNode;
}
export {};
