import styled from 'styled-components/native';
import { TabBarConfig } from '../../TabBar/types';
import { getTabBarAbsolutePosition } from '../../TabBar/util/getTabBarAbsolutePosition';
import { SharedTabBarItemStyles } from './SharedTabBarItemStyles';

export interface CircularTabBarItemProps extends TabBarConfig {
    bg?: string;
}

export const CircularTabBarItem = styled(SharedTabBarItemStyles)`
    height: 52px;
    width: 52px;
    border-radius: 26px;
    align-self: center;
    background-color: ${(props: CircularTabBarItemProps) => props.bg};
    ${(props: CircularTabBarItemProps) => getTabBarAbsolutePosition(props.tabBarPosition, 22)};
`;
