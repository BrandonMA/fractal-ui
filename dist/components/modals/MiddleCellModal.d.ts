import { ReactNode } from 'react';
import { DimmedModalProps } from './DimmedModal';
export interface MiddleCellModalProps extends DimmedModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
}
export declare function MiddleCellModal({ children, onDismiss, disableStateResetOnDismiss, visible, ...others }: MiddleCellModalProps): JSX.Element;
