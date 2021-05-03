import React from 'react';
import { TouchableOpacityProps } from '../buttons/TouchableOpacity/types';
export interface PickerButtonProps extends Partial<Omit<TouchableOpacityProps, 'children'>> {
    children: string;
}
declare const PickerButton: React.ForwardRefExoticComponent<PickerButtonProps & React.RefAttributes<unknown>>;
export { PickerButton };
