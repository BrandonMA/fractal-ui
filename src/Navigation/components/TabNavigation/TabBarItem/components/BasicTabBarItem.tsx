import React, { memo, useMemo } from 'react';
import { sharedTabBarItemStyles } from './SharedTabBarItemStyles';
import { SizeGroup } from '../../../../../SizeGroup/types';
import { getValueForLargeSize } from '../../../../../SizeGroup/util';
import { Dimensions, Pressable } from 'react-native';
import { useRecoilValue } from 'recoil';
import { tabBarPositionAtom } from '../../../../recoil/atoms/tabBarPositionAtom';

export interface BasicTabBarItemProps {
    widthSizeGroup: SizeGroup;
    highlightColor?: string;
    children: React.ReactNode;
}

export const BasicTabBarItem = memo(
    (props: BasicTabBarItemProps): JSX.Element => {
        const { widthSizeGroup, highlightColor } = props;
        const tabBarPosition = useRecoilValue(tabBarPositionAtom);

        const ripple = useMemo(() => {
            return {
                color: highlightColor,
                borderless: true,
                radius: Dimensions.get('window').width / 10
            };
        }, [highlightColor]);

        const style = useMemo(() => {
            return {
                ...sharedTabBarItemStyles,
                flexGrow: 1,
                flexDirection: tabBarPosition !== 'bottom' ? 'column' : getValueForLargeSize(widthSizeGroup[0], 'row', 'column')
            };
        }, [widthSizeGroup]);

        return <Pressable {...props} style={style} android_ripple={ripple} />;
    }
);
