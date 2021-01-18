/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents';
export interface FadeAnimationProps extends Partial<BaseBoxProps> {
    activeOpacity?: number;
    onHide?: () => void;
}
export declare function FadeAnimation({ activeOpacity, onHide, style, ...others }: FadeAnimationProps): JSX.Element;
