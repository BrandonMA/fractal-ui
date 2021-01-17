/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents';
export interface FadeAnimationProps extends Partial<BaseBoxProps> {
    activeOpacity?: number;
}
export declare function FadeAnimation({ activeOpacity, ...others }: FadeAnimationProps): JSX.Element;
