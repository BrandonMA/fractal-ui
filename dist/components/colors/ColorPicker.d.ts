import { LayerProps } from '../containers/Layer/types';
export interface ColorPickerProps extends Partial<Omit<LayerProps, 'children'>> {
    colors: Array<string>;
    onColorChange: (color: string) => void;
}
export declare function ColorPicker({ colors, onColorChange, ...others }: ColorPickerProps): JSX.Element;
