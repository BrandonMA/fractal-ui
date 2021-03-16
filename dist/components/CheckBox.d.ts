/// <reference types="react" />
import { LayerProps } from './containers/Layer/types';
interface CheckBoxProps extends Omit<LayerProps, 'children'> {
    value: boolean;
    onValueChange: (value: boolean) => void;
    label: string;
}
export declare function CheckBox({ value, onValueChange, label, ...others }: CheckBoxProps): JSX.Element;
export {};
