import React, { useContext, useEffect, useMemo } from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { ChevronLeft } from '../../../../Icons/ChevronLeft';
import { NavigationBarInsetsContext } from '../NavigationBarInsetsProvider';
import { useHistory } from '../../../../ReactRouter';
import { useMatch } from '../../../hooks';
import { NavigationBarStyleProps } from './types/NavigationBarStyleProps';
import { NavigationBarProps } from './types/NavigationBarProps';
import { NAVIGATION_BAR_HEIGHT } from './constants';
import { createNavigationBarStyleProps } from './util/createNavigationBarStyleProps';

const Container = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    height: ${NAVIGATION_BAR_HEIGHT}px;
    background-color: ${(props: NavigationBarStyleProps) => props.backgroundColor ?? '#ffffff'};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1000;
`;

const StyledText = styled.Text`
    color: ${(props: NavigationBarStyleProps) => props.color ?? '#1281FF'};
    font-size: 15px;
`;

const StyledTitle = styled(StyledText)`
    color: ${(props: NavigationBarStyleProps) => (props.titleColor != null ? props.titleColor : props.color ?? '#000000')};
    font-weight: 700;
    font-size: ${(props: NavigationBarStyleProps) => props.titleFontSize ?? 17}px;
    text-align: center;
`;

const LeftContainer = styled.View`
    flex-grow: 1;
    padding-left: 16px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 0;
`;

const MiddleContainer = styled.View`
    flex-grow: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: 0;
`;

const RightContainer = styled.View`
    flex-grow: 1;
    padding-right: 16px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 0;
`;

const StyledBackButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${() => (Platform.OS === 'web' ? 'cursor: pointer' : '')};
`;

export function NavigationBar(props: NavigationBarProps): JSX.Element | null {
    const { hidden, title, hideBackButton, children } = props;
    const navigationBarInsets = useContext(NavigationBarInsetsContext);
    const history = useHistory();
    const [, activeRoutes] = useMatch('/');
    const styleProps = createNavigationBarStyleProps(props);

    const [leftChild, centerChild, rightChild] = useMemo(() => {
        let leftChild: JSX.Element | null = null;
        let centerChild: JSX.Element | null = null;
        let rightChild: JSX.Element | null = null;

        React.Children.forEach(children, (child) => {
            if (child?.type.name === 'NavigationBarLeftView') {
                leftChild = child;
            } else if (child?.type.name === 'NavigationBarCenterView') {
                centerChild = child;
            } else {
                rightChild = child !== undefined ? child : null;
            }
        });
        return [leftChild, centerChild, rightChild];
    }, [children]);

    useEffect(() => {
        const top = Platform.OS === 'web' && !hidden ? NAVIGATION_BAR_HEIGHT : 0; // Set the value of the navigation bar for web here. For native it is already inside safeAreaInsets.
        if (top !== navigationBarInsets.insets.top) {
            navigationBarInsets.setInsets({ top, right: 0, bottom: 0, left: 0 });
        }
    }, [hidden, navigationBarInsets]);

    return hidden ? null : (
        <Container {...styleProps}>
            <LeftContainer>
                {activeRoutes <= 1 || hideBackButton ? null : (
                    <StyledBackButtonContainer onPress={history.goBack}>
                        <ChevronLeft height={19} width={25} fill={styleProps.color ?? '#1281FF'} />
                        <StyledText {...styleProps}>{title}</StyledText>
                    </StyledBackButtonContainer>
                )}
                {leftChild}
            </LeftContainer>
            <MiddleContainer>{centerChild ?? <StyledTitle {...styleProps}>{title}</StyledTitle>}</MiddleContainer>
            <RightContainer>{rightChild}</RightContainer>
        </Container>
    );
}
