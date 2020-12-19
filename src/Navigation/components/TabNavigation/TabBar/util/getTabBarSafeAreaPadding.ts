import { EdgeInsets } from 'react-native-safe-area-context';
import { TabBarPosition } from '../types/TabBarPosition';

interface SafeAreaProps {
    safeAreaInsets: EdgeInsets;
    tabBarPosition: TabBarPosition;
}

export function getTabBarSafeAreaPadding(props: SafeAreaProps): string {
    const { safeAreaInsets, tabBarPosition } = props;
    switch (tabBarPosition) {
        case 'bottom':
            return `padding-bottom: ${safeAreaInsets.bottom}px`;
        case 'left':
            return `padding-left: ${safeAreaInsets.left}px`;
        case 'right':
            return `padding-right: ${safeAreaInsets.right}px`;
    }
}
