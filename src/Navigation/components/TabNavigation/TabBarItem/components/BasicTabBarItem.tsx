import React from 'react';
import { sharedTabBarItemStyles } from './SharedTabBarItemStyles';
import { SizeGroup } from '../../../../../SizeGroup/types';
import { getValueForLargeSize } from '../../../../../SizeGroup/util';
import { Dimensions, Pressable } from 'react-native';
import { TabBarConfig } from '../../TabBarConfigProvider/types';

export interface BasicTabBarItemProps extends TabBarConfig {
    widthSizeGroup: SizeGroup;
    highlightColor?: string;
    children: React.ReactNode;
}

export function BasicTabBarItem(props: BasicTabBarItemProps): JSX.Element {
    const { widthSizeGroup, highlightColor } = props;
    const [widthSize] = widthSizeGroup;

    return (
        <Pressable
            {...props}
            style={{
                ...sharedTabBarItemStyles,
                flexGrow: 1,
                flexDirection: getValueForLargeSize(widthSize, 'row', 'column')
            }}
            android_ripple={{
                color: highlightColor,
                borderless: true,
                radius: Dimensions.get('window').width / 10
            }}
        />
    );
}
