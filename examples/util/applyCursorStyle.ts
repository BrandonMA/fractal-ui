import { Platform } from 'react-native';

export function applyCursorStyle() {
    return Platform.OS === 'web' ? 'cursor: pointer' : null;
}
