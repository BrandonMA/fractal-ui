import { TextProps } from 'react-native';
import { TextSize } from '../types/TextSize';
interface StyledTextProps {
    color: string;
    textSize: TextSize;
    bold?: boolean;
    textAlign?: 'center' | 'left' | 'right';
}
export interface InternalTextProps extends TextProps, StyledTextProps {
    children: string;
    textAlign?: 'center' | 'left' | 'right';
}
export declare function InternalText(props: InternalTextProps): JSX.Element;
export {};
