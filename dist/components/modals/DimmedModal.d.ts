import { ReactNode } from 'react';
import { ModalProps as NativeModalProps } from 'react-native';
export interface DimmedModalProps extends NativeModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}
export declare function DimmedModal(props: DimmedModalProps): JSX.Element;
