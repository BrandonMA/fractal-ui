import React from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components/native';
import { TabBarProps } from '../../types/TabBarProps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMiddleActionTabBarChildren } from './hooks/useMiddleActionTabBarChildren';
import { MiddleTabBarShape } from './MiddleTabBarShape';
import { getTabBarSafeAreaPadding } from '../../util/getTabBarSafeAreaPadding';
import { constants } from '../../../../../constants';
import { useThemeColor } from '../../../../../../ThemeState';
import { usePositionValues } from '../../hooks/usePositionValues';
import { getValueForTabBarPosition } from '../../util/getValueForTabBarPosition';
import { StyledTabBarProps } from '../../types/StyledTabBarProps';

type ContainerProps = Omit<StyledTabBarProps, 'tabBarColor' | 'safeAreaInsets' | 'tabBarPosition'>;

const Container = styled(Animated.View)`
    position: absolute;
    ${(props: ContainerProps) => props.side}
    width: ${(props: ContainerProps) => props.tabBarWidth};
    height: ${(props: ContainerProps) => props.tabBarHeight};
`;

const ItemsContainer = styled(View)`
    position: relative;
    flex-direction: ${(props: ContainerProps) => props.flexDirection};
    width: ${(props: ContainerProps) => props.tabBarWidth};
    height: ${(props: ContainerProps) => props.tabBarHeight};
`;

const SideView = styled.View`
    background-color: ${(props: StyledTabBarProps) => props.tabBarColor.base};
    flex-grow: 1;
    flex-basis: 0;
    flex-direction: ${(props: StyledTabBarProps) => props.flexDirection};
    box-shadow: ${(props: StyledTabBarProps) => props.tabBarColor.shadow};
    ${(props: StyledTabBarProps) => getTabBarSafeAreaPadding(props)}
`;

const MiddleActionImageContainer = styled.View`
    z-index: 1000;
    flex-direction: column;
    background-color: transparent;
`;

type MiddleActionImageContainerFillerProps = Omit<StyledTabBarProps, 'tabBarPosition'>;

const MiddleActionImageContainerFiller = styled.View`
    flex-grow: 1;
    background-color: ${(props: MiddleActionImageContainerFillerProps) => props.tabBarColor.base};
    width: 100%;
`;

// Middle button styles

interface MiddleContainerProps extends Omit<StyledTabBarProps, 'tabBarColor'> {
    floatingPadding: string;
    floatingWidth: string | undefined;
    floatingHeight: string | undefined;
}

const MiddleContainer = styled(Animated.View)`
    position: absolute;
    ${(props: MiddleContainerProps) => getTabBarSafeAreaPadding(props)}
    width: ${(props: MiddleContainerProps) => props.floatingWidth};
    height: ${(props: MiddleContainerProps) => props.floatingHeight};
    flex-direction: column;
    background-color: transparent;
    ${(props: MiddleContainerProps) => props.floatingPadding};
    align-items: center;
    justify-content: center;
`;

export function MiddleActionTabBar(props: TabBarProps): JSX.Element {
    const { children, style, tabBarPosition } = props;
    const tabBarColor = useThemeColor('tabBarColor');
    const safeAreaInsets = useSafeAreaInsets();
    const [leftChildren, middleChild, rightChildren] = useMiddleActionTabBarChildren(children);
    const positionValues = usePositionValues(tabBarPosition, safeAreaInsets);
    const constantSize = `${
        tabBarPosition === 'bottom' ? constants.tabBarCircularButtonOffsetBottom : constants.tabBarCircularButtonOffset
    }px`;
    const floatingPadding = getValueForTabBarPosition(
        tabBarPosition,
        `bottom: ${constantSize}`,
        `left: ${constantSize}`,
        `right: ${constantSize}`
    );
    const constantDimension = 'auto';
    const width = getValueForTabBarPosition(tabBarPosition, '100%', constantDimension, constantDimension);
    const height = getValueForTabBarPosition(tabBarPosition, constantDimension, '100%', '100%');

    return (
        <>
            <Container {...positionValues} style={style}>
                <ItemsContainer {...positionValues}>
                    <SideView {...positionValues} tabBarColor={tabBarColor} safeAreaInsets={safeAreaInsets} tabBarPosition={tabBarPosition}>
                        {leftChildren}
                    </SideView>
                    <MiddleActionImageContainer>
                        <MiddleTabBarShape fill={tabBarColor.base} tabBarPosition={tabBarPosition} />
                        <MiddleActionImageContainerFiller {...positionValues} tabBarColor={tabBarColor} safeAreaInsets={safeAreaInsets} />
                    </MiddleActionImageContainer>
                    <SideView {...positionValues} tabBarColor={tabBarColor} safeAreaInsets={safeAreaInsets} tabBarPosition={tabBarPosition}>
                        {rightChildren}
                    </SideView>
                </ItemsContainer>
            </Container>
            <MiddleContainer
                {...positionValues}
                floatingPadding={floatingPadding}
                safeAreaInsets={safeAreaInsets}
                pointerEvents='box-none'
                style={style}
                floatingHeight={height}
                tabBarPosition={tabBarPosition}
                floatingWidth={width}
            >
                {middleChild}
            </MiddleContainer>
        </>
    );
}
