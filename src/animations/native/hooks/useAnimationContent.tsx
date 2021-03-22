import { AnimationContent, emptyAnimationContent, isAnimationContent, Variants } from '../../../sharedProps/AnimationProps';

export function useAnimationContent(value: AnimationContent | string | undefined, variants: Variants | undefined): AnimationContent {
    if (typeof value === 'string' && variants != null) {
        return variants[value] ?? emptyAnimationContent;
    } else if (isAnimationContent(value)) {
        return value;
    } else {
        return emptyAnimationContent;
    }
}
