import { ReactNode } from 'react';
import { ModalProps as NativeModalProps } from 'react-native';
export interface ModalProps extends NativeModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
    alignItems?: 'flex-start' | 'center' | 'flex-end';
}
export declare function ModalCell(props: ModalProps): JSX.Element;
