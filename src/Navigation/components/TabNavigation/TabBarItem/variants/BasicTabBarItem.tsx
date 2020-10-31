import styled from 'styled-components/native';
import { SharedTabBarItemStyles } from './SharedTabBarItemStyles';
import { SizeGroup } from '../../../../../SizeClass/types';
import { getValueForLargeSize } from '../../../../../SizeClass/util';

export interface BasicTabBarItemProps {
    sizeGroup: SizeGroup;
}

export const BasicTabBarItem = styled(SharedTabBarItemStyles)`
    margin: 4px;
    flex-grow: 1;
    min-height: 52px;
    min-width: 52px;
    flex-direction: ${(props: BasicTabBarItemProps) => getValueForLargeSize(props.sizeGroup[0], 'row', 'column')};
`;
