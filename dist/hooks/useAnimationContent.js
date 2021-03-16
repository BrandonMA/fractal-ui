import { emptyAnimationContent, isAnimationContent } from '../sharedProps/AnimationProps';
export function useAnimationContent(value, variants) {
    var _a;
    if (typeof value === 'string' && variants != null) {
        return (_a = variants[value]) !== null && _a !== void 0 ? _a : emptyAnimationContent;
    }
    else if (isAnimationContent(value)) {
        return value;
    }
    else {
        return emptyAnimationContent;
    }
}
//# sourceMappingURL=useAnimationContent.js.map