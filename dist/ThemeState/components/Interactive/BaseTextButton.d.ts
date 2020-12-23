import { TextProps } from 'react-native';
import { RequiredKeys } from 'utility-types';
import { InteractiveColors } from '../../types';
import { TextSize } from '../types/TextSize';
export declare const StyledText: any;
interface BaseTextButtonProps extends TextProps {
    onPress?: () => void;
    colorStyle: RequiredKeys<InteractiveColors>;
    textSize: TextSize;
    children: string;
}
export declare function BaseTextButton(props: BaseTextButtonProps): JSX.Element;
export {};
