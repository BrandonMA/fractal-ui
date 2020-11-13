import React from 'react';
import { sharedTabBarItemStyles } from './SharedTabBarItemStyles';
import { SizeGroup } from '../../../../../SizeClass/types';
import { getValueForLargeSize } from '../../../../../SizeClass/util';
import { Dimensions, Pressable } from 'react-native';
import { TabBarConfig } from '../../TabBarConfigProvider/types';

export interface BasicTabBarItemProps extends TabBarConfig {
    sizeGroup: SizeGroup;
    highlightColor?: string;
    children: JSX.Element;
}

export function BasicTabBarItem(props: BasicTabBarItemProps): JSX.Element {
    return (
        <Pressable
            {...props}
            style={{
                ...sharedTabBarItemStyles,
                flexGrow: 1,
                flexDirection: getValueForLargeSize(props.sizeGroup[0], 'row', 'column')
            }}
            android_ripple={{
                color: props.highlightColor,
                borderless: true,
                radius: Dimensions.get('window').width / 10
            }}
        />
    );
}
