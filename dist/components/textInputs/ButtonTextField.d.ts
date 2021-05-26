import React from 'react';
import { ButtonVariant } from '../buttons';
import { IconTextFieldProps } from './IconTextField';
interface ButtonTextFieldProps extends IconTextFieldProps {
    onPress: (text: string) => void;
    image: (color: string, size: number) => JSX.Element;
    buttonVariant?: ButtonVariant;
    showButton?: boolean;
}
declare const ButtonTextField: React.ForwardRefExoticComponent<ButtonTextFieldProps & React.RefAttributes<unknown>>;
export { ButtonTextField };
