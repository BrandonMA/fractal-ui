/// <reference types="react" />
import { BoxProps } from '../baseComponents/BaseBox';
export interface ColorPickerProps extends Omit<BoxProps, 'children'> {
    colors: Array<string>;
    onColorChange: (color: string) => void;
}
export declare function ColorPicker(props: ColorPickerProps): JSX.Element;