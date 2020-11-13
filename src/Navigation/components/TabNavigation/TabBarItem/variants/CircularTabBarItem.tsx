import React, { useCallback } from 'react';
import { TabBarConfig } from '../../TabBarConfigProvider/types';
import { Pressable, PressableStateCallbackType, StyleProp, ViewStyle } from 'react-native';
import { sharedTabBarItemStyles } from './SharedTabBarItemStyles';

export interface CircularTabBarItemProps extends TabBarConfig {
    bg?: string;
    highlightColor?: string;
    children: JSX.Element;
}

export function CircularTabBarItem(props: CircularTabBarItemProps): JSX.Element {
    const { highlightColor, bg, ...others } = props;

    const handleHighlightPress = useCallback(
        (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
            const sharedStyles = {
                ...sharedTabBarItemStyles,
                backgroundColor: bg,
                borderRadius: 24
            };

            if (state.pressed && highlightColor != null) {
                return { ...sharedStyles, backgroundColor: highlightColor };
            }

            return { ...sharedStyles };
        },
        [highlightColor]
    );

    return <Pressable {...others} style={handleHighlightPress} />;
}
