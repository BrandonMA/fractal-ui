import { ReactNode } from 'react';
import { DimmedModalProps } from './DimmedModal';
export interface BottomCellModalProps extends DimmedModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
}
export declare function BottomCellModal(props: BottomCellModalProps): JSX.Element;
