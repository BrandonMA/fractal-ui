import { Platform } from 'react-native';

export function getHeight(): number {
    return Platform.OS === 'ios' ? 132 : 44;
}
