import { useSpringAnimation } from './useSpringAnimation';
export function useShowAnimation(animatedValue, callback) {
    return useSpringAnimation(animatedValue, 1, undefined, undefined, callback);
}
//# sourceMappingURL=useShowAnimation.js.map