import React, { memo, useContext, useEffect, useMemo } from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { NavigationBarInsetsContext } from '../NavigationBarInsetsProvider';
import { useHistory } from '../../../../ReactRouter';
import { NavigationBarStyleProps } from './types/NavigationBarStyleProps';
import { NavigationBarProps } from './types/NavigationBarProps';
import { createNavigationBarStyleProps } from './util/createNavigationBarStyleProps';
import { Entypo } from '@expo/vector-icons';
import { useNavigationBarChildren } from './hooks/useNavigationBarChildren';
import { useMatch } from '../../../hooks/useMatch';
import { constants } from '../../../constants';
import { getCursorStyle } from '../../../../Layout/util/getCursorStyle';
import { colors } from '../../../../Colors';

const Container = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    height: ${constants.navigationBarHeightForWeb}px;
    background-color: ${(props: NavigationBarStyleProps) => props.backgroundColor ?? colors.white.base};
    box-shadow: ${constants.shadowBottom};
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1000;
`;

const StyledText = styled.Text`
    color: ${(props: NavigationBarStyleProps) => props.color ?? colors.blue.base};
    font-size: ${constants.fontSizeNormal}px;
`;

const StyledTitle = memo(styled(StyledText)`
    color: ${(props: NavigationBarStyleProps) => (props.titleColor != null ? props.titleColor : props.color ?? colors.white.base100)};
    font-weight: 700;
    font-size: ${(props: NavigationBarStyleProps) => props.titleFontSize ?? constants.fontSizeTitle}px;
    text-align: center;
`);

const SharedStylesSectionContainer = styled.View`
    flex-grow: 1;
    flex-direction: row;
    align-items: center;
    flex-basis: 0;
`;

const LeftContainer = styled(SharedStylesSectionContainer)`
    justify-content: flex-start;
    padding-left: ${constants.basePaddingSize}px;
`;

const MiddleContainer = styled(SharedStylesSectionContainer)`
    justify-content: center;
`;

const RightContainer = styled(SharedStylesSectionContainer)`
    justify-content: flex-end;
    padding-right: ${constants.basePaddingSize}px;
`;

const StyledBackButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${getCursorStyle};
`;

export function NavigationBar(props: NavigationBarProps): JSX.Element | null {
    const { hidden, title, hideBackButton, backTitle, children } = props;
    const { setNavigationBarInsets, navigationBarInsets } = useContext(NavigationBarInsetsContext);
    const { goBack } = useHistory();
    const [, activeRoutes] = useMatch('/');
    const styleProps = useMemo(() => {
        return createNavigationBarStyleProps(props);
    }, [props]);
    const [leftChild, centerChild, rightChild] = useNavigationBarChildren(children);

    useEffect(() => {
        const top = Platform.OS === 'web' && !hidden ? constants.navigationBarHeightForWeb : 0; // Set the value of the navigation bar for web here. For native it is already inside safeAreaInsets.
        if (top !== navigationBarInsets.top) {
            setNavigationBarInsets({ top, right: 0, bottom: 0, left: 0 });
        }
    }, [hidden, navigationBarInsets, setNavigationBarInsets]);

    return hidden ? null : (
        <Container {...styleProps}>
            <LeftContainer>
                {activeRoutes <= 1 || hideBackButton ? null : (
                    <StyledBackButtonContainer onPress={goBack}>
                        <Entypo
                            name='chevron-left'
                            size={constants.navigationBarBackButtonSize}
                            color={styleProps.color ?? colors.blue.base}
                        />
                        <StyledText {...styleProps}>{backTitle}</StyledText>
                    </StyledBackButtonContainer>
                )}
                {leftChild}
            </LeftContainer>
            <MiddleContainer>{centerChild ?? <StyledTitle {...styleProps}>{title}</StyledTitle>}</MiddleContainer>
            <RightContainer>{rightChild}</RightContainer>
        </Container>
    );
}
