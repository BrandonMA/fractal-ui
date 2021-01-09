/// <reference types="react" />
import { BoxProps } from '../baseComponents/BaseBox';
export interface ColorPickerProps extends Partial<Omit<BoxProps, 'children'>> {
    colors: Array<string>;
    onColorChange: (color: string) => void;
}
export declare function ColorPicker({ colors, onColorChange, ...others }: ColorPickerProps): JSX.Element;
