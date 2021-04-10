import { Transition } from 'framer-motion';
export interface AnimationContent {
    opacity?: number;
    width?: number;
    height?: number;
    scale?: number;
    rotate?: number;
    backgroundColor?: string;
    translateY?: number;
}
export declare function isAnimationContent(value: unknown): value is AnimationContent;
export declare const emptyAnimationContent: AnimationContent;
export declare type Variants = {
    [key: string]: AnimationContent;
};
export interface AnimationProps {
    initial?: AnimationContent | string;
    animate?: AnimationContent | string;
    variants?: Variants;
    transition?: Transition;
    exit?: AnimationContent;
}
