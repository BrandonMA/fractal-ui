import { Transition } from 'framer-motion';

export interface AnimationContent {
    opacity?: number;
    width?: number;
    height?: number;
    scale?: number;
    rotate?: number;
    backgroundColor?: string;
    translateY?: number;
    backdropFilter?: string;
    '-webkit-backdrop-filter'?: string;
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
            casted.translateY != null ||
            casted.backdropFilter != null)
    );
}

export type Variants = { [key: string]: AnimationContent };

export interface AnimationProps {
    initial?: AnimationContent | string;
    animate?: AnimationContent | string;
    variants?: Variants;
    transition?: Transition;
    exit?: AnimationContent;
}
