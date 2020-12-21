import { useSpringAnimation } from './useSpringAnimation';
export function useHideAnimation(animatedValue, callback) {
    return useSpringAnimation(animatedValue, 0, callback);
}
//# sourceMappingURL=useHideAnimation.js.map