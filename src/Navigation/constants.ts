import { Platform } from 'react-native';

export const constants = {
    tabBarHeight: Platform.OS === 'ios' ? 49 : 61,
    tabBarWidth: 61,
    tabBarButtonSize: 48,
    tabBarCircularButtonOffset: 32,
    tabBarCircularButtonOffsetBottom: Platform.OS === 'ios' ? 20 : 32,
    tabBarItemCompactSpacerSize: { width: 0, height: 0 },
    tabBarItemLargeSpacerSize: { width: 8, height: 1 },
    navigationBarHeightForWeb: 50,
    navigationBarBackButtonSize: 22,
    insetsZero: { top: 0, right: 0, bottom: 0, left: 0 },
    shadowBottom: '0 1px 4px rgba(0, 0, 0, 0.08)',
    fontSizeNormal: 17,
    fontSizeTitle: 17,
    basePaddingSize: 16
};
