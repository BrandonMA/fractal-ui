import { EdgeInsets } from 'react-native-safe-area-context';

export function applyFullscreenInsets(insets: EdgeInsets): string {
    return `padding: ${insets.top}px ${insets.right}px ${insets.bottom}px ${insets.left}px`;
}
