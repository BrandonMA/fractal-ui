import { EdgeInsets } from 'react-native-safe-area-context';

export function applyFullscreenInsets(insets: EdgeInsets): string {
    return `margin: 0px ${insets.right}px ${insets.top + insets.bottom}px ${insets.left}px`;
}
