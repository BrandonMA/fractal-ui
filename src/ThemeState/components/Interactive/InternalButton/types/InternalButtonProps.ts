import { PressableProps } from 'react-native';

export interface InternalButtonProps extends PressableProps {
    text?: string;
    backgroundColor: string;
    shadow: string;
    textColor: string;
    removeShadow?: boolean;
}
