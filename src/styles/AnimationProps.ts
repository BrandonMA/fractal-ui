export interface AnimationContent {
    opacity?: number;
    width?: number;
    height?: number;
}

export function isAnimationContent(value: unknown): value is AnimationContent {
    const casted = value as AnimationContent;
    return casted != null && (casted.opacity != null || casted.width != null || casted.height != null);
}

export const emptyAnimationContent: AnimationContent = {
    opacity: 1,
    width: undefined,
    height: undefined
};

export type Variants = { [key: string]: AnimationContent };
export interface AnimationProps {
    initial?: AnimationContent | string;
    animate?: AnimationContent | string;
    variants?: Variants;
}
