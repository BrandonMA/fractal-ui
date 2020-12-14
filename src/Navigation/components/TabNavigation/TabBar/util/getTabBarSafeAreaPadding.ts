import { EdgeInsets } from 'react-native-safe-area-context';

interface SafeAreaProps {
    safeAreaInsets: EdgeInsets;
}

export function getTabBarSafeAreaPadding(props: SafeAreaProps): string {
    const { safeAreaInsets } = props;
    return `padding-bottom: ${safeAreaInsets.bottom}px`;
}
