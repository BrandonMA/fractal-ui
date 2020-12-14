import { InteractiveColors } from '../../../types/FractalTheme';
import { RequiredKeys } from 'utility-types';
import { PressableProps } from 'react-native';

export interface BaseButtonProps extends PressableProps {
    text?: string;
    removeShadow?: boolean;
    colorStyle: RequiredKeys<InteractiveColors>;
}
