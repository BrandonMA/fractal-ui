import React, { useCallback, useMemo } from 'react';
import { TabBarConfig } from '../../TabBarConfigProvider/types';
import { Pressable, PressableStateCallbackType, StyleProp, ViewStyle } from 'react-native';
import { sharedTabBarItemStyles } from './SharedTabBarItemStyles';
import { constants } from '../../../../constants';

export interface CircularTabBarItemProps extends TabBarConfig {
    bg?: string;
    highlightColor?: string;
    children: React.ReactNode;
}

export function CircularTabBarItem(props: CircularTabBarItemProps): JSX.Element {
    const { highlightColor, bg, ...others } = props;

    const sharedStyles = useMemo(() => {
        return {
            ...sharedTabBarItemStyles,
            backgroundColor: bg,
            borderRadius: constants.tabBarButtonSize / 2
        };
    }, [bg]);

    const handleHighlightPress = useCallback(
        (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
            if (state.pressed && highlightColor != null) {
                return { ...sharedStyles, backgroundColor: highlightColor };
            }
            return sharedStyles;
        },
        [highlightColor]
    );

    return <Pressable {...others} style={handleHighlightPress} />;
}
