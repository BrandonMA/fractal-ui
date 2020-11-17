import { Platform } from 'react-native';

export function getCursorStyle(): string {
    return Platform.OS === 'web' ? 'cursor: pointer' : '';
}
