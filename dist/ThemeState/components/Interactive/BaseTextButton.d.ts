import { TextProps } from 'react-native';
import { RequiredKeys } from 'utility-types';
import { InteractiveColors } from '../../types';
import { TextSize } from '../types/TextSize';
interface StyledTextProps {
    color: string;
    textSize: TextSize;
}
export declare const StyledText: import("styled-components").StyledComponent<typeof import("react-native").Text, import("styled-components").DefaultTheme, StyledTextProps, never>;
interface BaseTextButtonProps extends TextProps {
    onPress?: () => void;
    colorStyle: RequiredKeys<InteractiveColors>;
    textSize: TextSize;
    children: string;
}
export declare function BaseTextButton(props: BaseTextButtonProps): JSX.Element;
export {};
