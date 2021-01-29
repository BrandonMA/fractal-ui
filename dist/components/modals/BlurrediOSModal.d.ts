import { ReactNode } from 'react';
import { ModalProps as NativeModalProps } from 'react-native';
export interface BlurrediOSModalProps extends NativeModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
    disableStateResetOnDismiss?: boolean;
    dismissText: string;
}
export declare function BlurrediOSModal({ children, onDismiss, dismissText, visible, ...others }: BlurrediOSModalProps): JSX.Element;
