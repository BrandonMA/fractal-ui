import { LayerProps } from '../containers/Layer/types';

export interface BaseRadioButtonProps {
    label?: string;
    value: string;
    onPress: () => void;
    active: boolean;
}

export interface RadioButtonProps extends BaseRadioButtonProps, Omit<LayerProps, 'children'> {}

export interface RadioItem {
    value: string;
    label: string;
}

export interface RadioGroupProps extends LayerProps {
    radioButtons: Array<RadioItem>;
    onChange: (item: RadioItem) => void;
}
