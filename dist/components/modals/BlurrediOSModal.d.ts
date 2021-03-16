import { ReactNode } from 'react';
import { ModalProps } from './Modal/types';
export interface BlurrediOSModalProps extends ModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
    disableStateResetOnDismiss?: boolean;
    dismissText: string;
}
export declare function BlurrediOSModal({ children, onDismiss, dismissText, visible, ...others }: BlurrediOSModalProps): JSX.Element;
