import React, { ReactNode, Component, ErrorInfo } from 'react';
import { Message } from './Message';
import { BugIcon } from '../../assets/BugIcon';
import { Layer } from '../containers/Layer';
import { LayerProps } from '../containers/Layer/types';

interface State {
    hasError: boolean;
    errorMessage: string;
    errorTitle: string;
}

interface ErrorMessageProps extends LayerProps {
    onError?: (error: Error, componentStack: string) => void;
}

export class ErrorMessage extends Component<ErrorMessageProps, State> {
    constructor(props: LayerProps) {
        super(props);
        this.state = { hasError: false, errorMessage: '', errorTitle: '' };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, errorMessage: error.message, errorTitle: error.name };
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        const { onError } = this.props;
        if (onError) onError(error, info.componentStack);
    }

    renderErrorIcon = (color: string): JSX.Element => <BugIcon width={20} fill={color} />;

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <Message
                    messageType={'danger'}
                    title={this.state.errorTitle}
                    description={this.state.errorMessage}
                    icon={this.renderErrorIcon}
                    {...this.props}
                />
            );
        }

        return <Layer {...this.props}>{this.props.children}</Layer>;
    }
}
