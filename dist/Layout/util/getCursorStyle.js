import { Platform } from 'react-native';
export function getCursorStyle() {
    return Platform.OS === 'web' ? 'cursor: pointer' : null;
}
//# sourceMappingURL=getCursorStyle.js.map