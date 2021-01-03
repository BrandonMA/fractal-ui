/// <reference types="react" />
import { BaseTouchableOpacityProps } from '../baseComponents/BaseTouchableOpacity';
export interface PickerButtonProps extends Omit<BaseTouchableOpacityProps, 'children'> {
    children: string;
}
export declare function PickerButton(props: PickerButtonProps): JSX.Element;
