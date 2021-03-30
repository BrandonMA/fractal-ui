import { LayerProps } from '../containers/Layer/types';

export interface RadioButtonProps extends Omit<LayerProps, 'children'> {
    label: string;
    value: string;
    onPress: () => void;
    active: boolean;
}

export interface RadioItem {
    value: string;
    label: string;
}

export interface RadioGroupProps extends LayerProps {
    radioButtons: Array<RadioItem>;
    onChange: (item: RadioItem) => void;
}