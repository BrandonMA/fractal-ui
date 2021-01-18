/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents';
export interface BottomSlideAnimationProps extends Partial<BaseBoxProps> {
    onHide?: () => void;
}
export declare function BottomSlideAnimation({ onHide, style, ...others }: BottomSlideAnimationProps): JSX.Element;
