import styled from 'styled-components/native';
import { getTabBarAbsolutePosition } from '../../TabBar/util/getTabBarAbsolutePosition';
import { SharedTabBarItemStyles } from './SharedTabBarItemStyles';
import { TabBarConfig } from '../../TabBarConfigProvider/types';
import { Platform } from 'react-native';

export interface CircularTabBarItemProps extends TabBarConfig {
    bg?: string;
}

export const CircularTabBarItem = styled(SharedTabBarItemStyles)`
    height: 44px;
    width: 44px;
    border-radius: 26px;
    align-self: center;
    background-color: ${(props: CircularTabBarItemProps) => props.bg};
    ${(props: CircularTabBarItemProps) => getTabBarAbsolutePosition(props.tabBarPosition, Platform.OS === 'ios' ? 8 : 12)};
`;
