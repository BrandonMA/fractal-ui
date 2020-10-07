import { Platform } from 'react-native';

export function applyFullScreenStyles(): string {
    return Platform.OS === 'web' ? 'height: 100vh' : 'flex-grow: 1';
}
