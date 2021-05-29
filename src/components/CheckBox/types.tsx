import { LayerProps } from '../containers/Layer/types';

export interface CheckProps {
    value: boolean;
    label?: string;
}

export interface BaseCheckBoxProps extends CheckProps {
    onValueChange?: (value: boolean) => void;
}

export interface CheckBoxProps extends BaseCheckBoxProps, Omit<LayerProps, 'children'> {}
