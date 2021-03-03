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

export function isAnimationContent(value: unknown): value is AnimationContent {
    const casted = value as AnimationContent;
    return (
        casted != null &&
        (casted.opacity != null ||
            casted.width != null ||
            casted.height != null ||
            casted.scale != null ||
            casted.rotate != null ||
            casted.backgroundColor != null ||
            casted.translateY != null)
    );
}

export const emptyAnimationContent: AnimationContent = {
    opacity: 1,
    width: undefined,
    height: undefined,
    scale: 1,
    rotate: undefined,
    backgroundColor: undefined,
    translateY: undefined
};

export type Variants = { [key: string]: AnimationContent };

export interface AnimationProps {
    initial?: AnimationContent | string;
    animate?: AnimationContent | string;
    variants?: Variants;
    transition?: Transition;
    exit?: AnimationContent;
}
