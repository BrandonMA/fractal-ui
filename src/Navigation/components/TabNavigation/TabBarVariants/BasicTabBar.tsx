import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { getAbsolutePosition } from '../util/getAbsolutePosition';
import { getValueBasedOnPosition } from '../util/getValueBasedOnPosition';
import { TabBarProps } from '../types/TabBarProps';
import { applyDimension, applyInsets } from '../util/applyInsets';

const SharedStyles = styled(View)`
    justify-content: space-evenly;
    position: absolute;
    background-color: white;
    flex-direction: ${(props: TabBarProps) => getValueBasedOnPosition('row', 'column', props.position)};
    ${(props: TabBarProps) => getAbsolutePosition(props.position, 0)};
    ${applyInsets}
    ${(props: TabBarProps) => applyDimension(props)};
`;

const HorizontalContainer = styled(SharedStyles)`
    box-shadow: ${(props: TabBarProps) => (props.position === 'bottom' ? '0px -1px' : '0px 1px')} 4px rgba(0, 0, 0, 0.08);
`;

const VerticalContainer = styled(SharedStyles)`
    box-shadow: ${(props: TabBarProps) => (props.position === 'right' ? '-1px 0px' : '1px 0px')} 4px rgba(0, 0, 0, 0.08);
`;

export function BasicTabBar(props: TabBarProps): JSX.Element {
    const { children, ...others } = props;
    const insets = useSafeAreaInsets();
    const Container = getValueBasedOnPosition(HorizontalContainer, VerticalContainer, props.position);
    return (
        <Container {...others} insets={insets}>
            {children}
        </Container>
    );
}
