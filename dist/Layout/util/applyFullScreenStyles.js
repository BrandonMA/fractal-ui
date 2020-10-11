import { Platform } from 'react-native';
export function applyFullScreenStyles() {
    return Platform.OS === 'web' ? 'height: 100vh' : 'flex-grow: 1';
}
//# sourceMappingURL=applyFullScreenStyles.js.map