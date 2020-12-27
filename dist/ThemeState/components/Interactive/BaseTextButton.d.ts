import { BaseColorTextProps } from '../Text/BaseColorText';
export interface BaseTextButtonProps extends BaseColorTextProps {
    onPress?: () => void;
}
export declare function BaseTextButton(props: BaseTextButtonProps): JSX.Element;
