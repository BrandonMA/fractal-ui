import { TextProps } from 'react-native';
import { TextSize } from '../types/TextSize';
import { TextType } from '../types/TextType';
interface BaseTextProps extends TextProps {
    textSize: TextSize;
    bold?: boolean;
    textType?: TextType;
    children: string;
}
export declare function BaseText(props: BaseTextProps): JSX.Element;
export {};
