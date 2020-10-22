import React from 'react';
import styled from 'styled-components/native';
import { SharedTabBarItemStyles } from './SharedTabBarItemStyles';
import { Size, SizeGroup } from '../../../../../SizeClass/types';
import { PressableProps } from 'react-native';
import { getValueForLargeSize } from '../../../../../SizeClass/util';

interface StyledItemProps {
    size: Size;
}

const StyledItem = styled(SharedTabBarItemStyles)`
    margin: 4px;
    padding: 4px 0;
    flex-grow: 1;
    min-height: 52px;
    min-width: 52px;
    flex-direction: ${(props: StyledItemProps) => getValueForLargeSize(props.size, 'row', 'column')};
`;

export interface BasicTabBarItemProps extends PressableProps {
    sizeGroup: SizeGroup;
}

export function BasicTabBarItem(props: BasicTabBarItemProps): JSX.Element {
    const { sizeGroup } = props;
    const size = sizeGroup != null ? sizeGroup[0] : Size.compact;
    return <StyledItem {...props} size={size} />;
}
