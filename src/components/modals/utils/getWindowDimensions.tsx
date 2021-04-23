import { canUseDOM } from '../../../executionEnvironment/canUseDOM';
import { DisplayMetrics } from './DisplayMetrics';

export function getWindowDimensions(): DisplayMetrics {
    if (canUseDOM) {
        const win = window;
        const docEl = window.document.documentElement;

        return {
            fontScale: 1,
            height: docEl.clientHeight,
            scale: win.devicePixelRatio || 1,
            width: docEl.clientWidth
        };
    }

    return {
        fontScale: 1,
        height: 0,
        scale: 1,
        width: 0
    };
}
