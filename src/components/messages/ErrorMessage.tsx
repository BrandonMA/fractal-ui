import React, { ReactNode, Component } from 'react';
import { Message } from './Message';
import { Entypo } from '@expo/vector-icons';
import { LayoutAnimation } from 'react-native';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';

interface State {
    hasError: boolean;
    errorMessage: string;
    errorTitle: string;
}

export class ErrorMessage extends Component<BaseBoxProps, State> {
    constructor(props: BaseBoxProps) {
        super(props);
        this.state = { hasError: false, errorMessage: '', errorTitle: '' };
    }

    static getDerivedStateFromError(error: Error): State {
        // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        return { hasError: true, errorMessage: error.message, errorTitle: error.name };
    }

    renderErrorIcon = (color: string): JSX.Element => <Entypo name={'bug'} size={20} color={color} />;

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

        return <BaseBox {...this.props}>{this.props.children}</BaseBox>;
    }
}
