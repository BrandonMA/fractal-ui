/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents';
export interface LeftSlideAnimationProps extends Partial<BaseBoxProps> {
    onHide?: () => void;
}
export declare function LeftSlideAnimation({ style, onHide, ...others }: LeftSlideAnimationProps): JSX.Element;
