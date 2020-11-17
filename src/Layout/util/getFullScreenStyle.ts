import { Platform } from 'react-native';

export function getFullScreenStyle(): string {
    return Platform.OS === 'web' ? 'height: 100vh' : 'flex-grow: 1';
}
