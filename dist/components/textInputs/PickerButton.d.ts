/// <reference types="react" />
import { TouchableOpacityProps } from '../buttons/TouchableOpacity/types';
export interface PickerButtonProps extends Partial<Omit<TouchableOpacityProps, 'children'>> {
    children: string;
}
export declare function PickerButton({ children, ...others }: PickerButtonProps): JSX.Element;
