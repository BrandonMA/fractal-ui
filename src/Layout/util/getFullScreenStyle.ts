import { Platform } from 'react-native';
import { StackPresentationTypes } from 'react-native-screens';

export interface FullScreenStyleProps {
    presentationType: StackPresentationTypes;
}

export function getFullScreenStyle(props: FullScreenStyleProps): string | null {
    const { presentationType } = props;
    return Platform.OS === 'web' ? (presentationType === 'push' ? 'height: 100vh' : 'height: 100%') : 'flex-grow: 1';
}
