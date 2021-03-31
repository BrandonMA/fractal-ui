import { LayerProps } from '../containers/Layer/types';

export interface BaseCheckBoxProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
    label?: string;
}

export interface CheckBoxProps extends BaseCheckBoxProps, Omit<LayerProps, 'children'> {}
