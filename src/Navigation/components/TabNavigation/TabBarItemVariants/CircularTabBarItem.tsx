import styled from 'styled-components/native';
import { TabBarPosition } from '../types/TabBarPosition';
import { getAbsolutePosition } from '../util/getAbsolutePosition';
import { SharedTabBarItemStyles } from './SharedTabBarItemStyles';

export interface CircularTabBarItemProps {
    bg?: string;
    position?: TabBarPosition;
}

export const CircularTabBarItem = styled(SharedTabBarItemStyles)`
    height: 52px;
    width: 52px;
    border-radius: 26px;
    align-self: center;
    background-color: ${(props: CircularTabBarItemProps) => props.bg};
    ${(props: CircularTabBarItemProps) => getAbsolutePosition(props.position, 22)};
`;
