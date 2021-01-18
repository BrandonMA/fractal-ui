/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents';
export interface TopSlideAnimationProps extends Partial<BaseBoxProps> {
    onHide?: () => void;
}
export declare function TopSlideAnimation({ onHide, style, ...others }: TopSlideAnimationProps): JSX.Element;
