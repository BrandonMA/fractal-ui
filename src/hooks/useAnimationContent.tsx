import { AnimationContent, emptyAnimationContent, isAnimationContent, Variants } from '../styles/AnimationProps';

export function useAnimationContent(value?: AnimationContent | string, variants?: Variants): AnimationContent {
    if (typeof value === 'string' && variants != null) {
        return variants[value] ?? emptyAnimationContent;
    } else if (isAnimationContent(value)) {
        return value;
    } else {
        return emptyAnimationContent;
    }
}
