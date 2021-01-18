/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents';
export interface RightSlideAnimationProps extends Partial<BaseBoxProps> {
    onHide?: () => void;
}
export declare function RightSlideAnimation({ onHide, style, ...others }: RightSlideAnimationProps): JSX.Element;
