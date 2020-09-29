import styled from 'styled-components/native';
import { SharedTabBarItemStyles } from './SharedTabBarItemStyles';

export const BasicTabBarItem = styled(SharedTabBarItemStyles)`
    margin: 4px;
    padding: 4px 0px;
    flex-grow: 1;
    min-height: 52px;
    min-width: 52px;
`;
