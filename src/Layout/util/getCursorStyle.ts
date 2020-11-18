import { Platform } from 'react-native';

export function getCursorStyle(): string | null {
    return Platform.OS === 'web' ? 'cursor: pointer' : null;
}
