import { useSpringAnimation } from './useSpringAnimation';
export function useHideAnimation(animatedValue, callback) {
    return useSpringAnimation(animatedValue, 0, undefined, undefined, callback);
}
//# sourceMappingURL=useHideAnimation.js.map