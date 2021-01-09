/// <reference types="react" />
import { BaseTouchableOpacityProps } from '../baseComponents/BaseTouchableOpacity';
export interface PickerButtonProps extends Partial<Omit<BaseTouchableOpacityProps, 'children'>> {
    children: string;
}
export declare function PickerButton({ children, ...others }: PickerButtonProps): JSX.Element;
