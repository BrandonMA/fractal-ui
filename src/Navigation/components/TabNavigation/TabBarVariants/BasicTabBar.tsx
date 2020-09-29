import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { getAbsolutePosition } from '../util/getAbsolutePosition';
import { getTabBarPosition } from '../util/getTabBarPosition';
import { TabBarProps } from './TabBarProps';
import { applyInsets } from '../util/applyInsets';

const SharedStyles = styled(View)`
    justify-content: space-evenly;
    position: absolute;
    background-color: white;
    ${(props: TabBarProps) => getAbsolutePosition(props.position, 0)};
    ${applyInsets}
`;

const StyledTabBarContainer = styled(SharedStyles)`
    flex-direction: row;
    width: 100%;
    box-shadow: ${(props: TabBarProps) => (props.position === 'bottom' ? '0px -1px' : '0px 1px')} 4px rgba(0, 0, 0, 0.08);
`;

const StyledVerticalTabBarContainer = styled(SharedStyles)`
    flex-direction: column;
    height: 100%;
    box-shadow: ${(props: TabBarProps) => (props.position === 'right' ? '-1px 0px' : '1px 0px')} 4px rgba(0, 0, 0, 0.08);
`;

export function BasicTabBar(props: TabBarProps): JSX.Element {
    const { children, ...others } = props;
    const insets = useSafeAreaInsets();
    const Container = getTabBarPosition(StyledTabBarContainer, StyledVerticalTabBarContainer, props.position);
    return (
        <Container {...others} insets={insets}>
            {children}
        </Container>
    );
}
