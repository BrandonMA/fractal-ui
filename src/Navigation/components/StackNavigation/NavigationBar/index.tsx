import React, { useContext, useEffect } from 'react';
import { Platform, Pressable, View } from 'react-native';
import { ScreenStackHeaderConfigProps } from 'react-native-screens';
import styled from 'styled-components/native';
import { ChevronLeft } from '../../../../Icons/ChevronLeft';
import { NavigationBarInsetsContext } from '../NavigationBarInsetsProvider';
import { useLocation, useHistory } from '../../../../ReactRouter';
import { useMatch } from '../../../hooks';

const NAVIGATION_BAR_HEIGHT = 50;

interface StyleProps {
    color: string | undefined;
    backgroundColor: string;
    titleColor: string | undefined;
}

const StyledText = styled.Text`
    color: ${(props: StyleProps) => props.color ?? '#1281FF'};
    font-size: 15px;
`;

const StyledTitle = styled(StyledText)`
    color: ${(props: StyleProps) => (props.titleColor != null ? props.titleColor : props.color ?? '#000000')};
    font-weight: 700;
    font-size: 17px;
    text-align: center;
`;

const Container = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    height: ${NAVIGATION_BAR_HEIGHT}px;
    background-color: ${(props: StyleProps) => props.backgroundColor};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1000;
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

const StyledBackButtonContainer = styled(Pressable)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${() => (Platform.OS === 'web' ? 'cursor: pointer' : '')};
`;

export function NavigationBar(props: ScreenStackHeaderConfigProps): JSX.Element | null {
    const { hidden, title, color, backgroundColor, titleColor } = props;
    const navigationBarInsets = useContext(NavigationBarInsetsContext);
    const history = useHistory();
    const location = useLocation();
    const [, activeRoutes] = useMatch(location.pathname);

    const styleProps: StyleProps = {
        backgroundColor: backgroundColor ?? 'white',
        color,
        titleColor
    };

    useEffect(() => {
        const top = Platform.OS === 'web' ? NAVIGATION_BAR_HEIGHT : 0; // Set the value of the navigation bar for web here. For native it is already inside safeAreaInsets.
        if (top !== navigationBarInsets.insets.top && hidden === false) {
            navigationBarInsets.setInsets({ top, right: 0, bottom: 0, left: 0 });
        }
    }, [hidden, navigationBarInsets]);

    console.log(activeRoutes);

    if (hidden) {
        return null;
    } else {
        return (
            <Container {...styleProps}>
                <LeftContainer>
                    {activeRoutes > 1 ? (
                        <StyledBackButtonContainer onPress={history.goBack}>
                            <ChevronLeft height={19} width={25} fill={styleProps.color ?? '#1281FF'} />
                            <StyledText {...styleProps}>{title}</StyledText>
                        </StyledBackButtonContainer>
                    ) : null}
                </LeftContainer>
                <MiddleContainer>
                    <StyledTitle {...styleProps}>{title}</StyledTitle>
                </MiddleContainer>
                <RightContainer />
            </Container>
        );
    }
}
