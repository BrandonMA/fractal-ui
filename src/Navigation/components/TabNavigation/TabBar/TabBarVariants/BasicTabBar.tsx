import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { applyDimensionBasedOnTabBarPosition } from '../util/applyDimensionBasedOnTabBarPosition';
import { applyTabBarInsets } from '../util/applyTabBarInsets';
import { getTabBarAbsolutePosition } from '../util/getTabBarAbsolutePosition';
import { getValueBasedOnTabBarPosition } from '../util/getValueBasedOnTabBarPosition';
import { TabBarProps } from '../types/TabBarProps';

const SharedStyles = styled(View)`
    justify-content: space-evenly;
    position: absolute;
    background-color: white;
    flex-direction: ${(props: TabBarProps) => getValueBasedOnTabBarPosition('row', 'column', props.tabBarPosition)};
    ${(props: TabBarProps) => getTabBarAbsolutePosition(props.tabBarPosition, 0)};
    ${applyTabBarInsets};
    ${applyDimensionBasedOnTabBarPosition};
`;

const HorizontalContainer = styled(SharedStyles)`
    box-shadow: ${(props: TabBarProps) => (props.tabBarPosition === 'bottom' ? '0px -1px' : '0px 1px')} 4px rgba(0, 0, 0, 0.08);
`;

const VerticalContainer = styled(SharedStyles)`
    box-shadow: ${(props: TabBarProps) => (props.tabBarPosition === 'right' ? '-1px 0px' : '1px 0px')} 4px rgba(0, 0, 0, 0.08);
`;

function BaseBasicTabBar(props: TabBarProps): JSX.Element {
    const { children, ...others } = props;
    const insets = useSafeAreaInsets();
    const Container = getValueBasedOnTabBarPosition(HorizontalContainer, VerticalContainer, props.tabBarPosition);
    return (
        <Container {...others} insets={insets}>
            {children}
        </Container>
    );
}

export const BasicTabBar = React.memo(BaseBasicTabBar);
