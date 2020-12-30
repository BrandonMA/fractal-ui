import React, { memo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { useHistory } from '../../../../ReactRouter';
import { NavigationBarProps } from './types/NavigationBarProps';
import { Feather } from '@expo/vector-icons';
import { useNavigationBarChildren } from './hooks/useNavigationBarChildren';
import { useActiveRouteSections } from '../../../hooks/useActiveRouteSections';
import { getCursorStyle } from '../../../../Layout/util/getCursorStyle';
import { Color, useThemeColor } from '../../../../ThemeState';
import { useIsRouteActive } from '../../../hooks/useIsRouteActive';

interface ContainerProps {
    backgroundColor: Color;
}

const Container = styled(View)`
    flex-direction: row;
    height: ${50}px;
    background-color: ${(props: ContainerProps) => props.backgroundColor.base};
    box-shadow: ${(props: ContainerProps) => props.backgroundColor.shadow};
    width: 100%;
    z-index: 1000;
    padding: 0 16px;
    elevation: 1;
`;

interface TextProps {
    color: string;
    fontSize?: number;
}

const StyledText = styled.Text`
    color: ${(props: TextProps) => props.color};
    font-size: ${(props: TextProps) => props.fontSize ?? 17}px;
`;

const StyledTitle = memo(styled.Text`
    color: ${(props: TextProps) => props.color};
    font-weight: 600;
    font-size: ${(props: TextProps) => props.fontSize ?? 17}px;
    text-align: center;
`);

const SharedStylesSectionContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    flex-basis: 0;
`;

const LeftContainer = styled(SharedStylesSectionContainer)`
    justify-content: flex-start;
` as typeof SharedStylesSectionContainer;

const MiddleContainer = styled(SharedStylesSectionContainer)`
    justify-content: center;
` as typeof SharedStylesSectionContainer;

const RightContainer = styled(SharedStylesSectionContainer)`
    justify-content: flex-end;
` as typeof SharedStylesSectionContainer;

const StyledBackButtonContainer = styled.TouchableOpacity`
    margin-left: -8px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${getCursorStyle};
`;

interface BackButtonProps {
    backTitleFontSize?: number;
    backTitle?: string;
}

function BackButton(props: BackButtonProps): JSX.Element {
    const { backTitleFontSize, backTitle } = props;
    const { goBack } = useHistory();
    const mainInteractiveColor = useThemeColor('mainInteractiveColor');

    return (
        <StyledBackButtonContainer onPress={goBack}>
            <Feather name='chevron-left' size={28} color={mainInteractiveColor.base} />
            <StyledText selectable={false} color={mainInteractiveColor.base} fontSize={backTitleFontSize}>
                {backTitle}
            </StyledText>
        </StyledBackButtonContainer>
    );
}

export function NavigationBar(props: NavigationBarProps): JSX.Element | null {
    const { hidden, title, hideBackButton, backTitle, path, backTitleFontSize, titleFontSize, children } = props;
    const navigationBarColor = useThemeColor('navigationBarColor');
    const textColor = useThemeColor('textColor');
    const isRouteActiveAndExact = useIsRouteActive(path ?? '', true);
    const activeRouteSections = useActiveRouteSections(path ?? '');
    const [leftChild, centerChild, rightChild] = useNavigationBarChildren(children);

    return hidden ? null : (
        <Container backgroundColor={navigationBarColor}>
            <LeftContainer>
                {activeRouteSections > 1 && isRouteActiveAndExact && !hideBackButton ? (
                    <BackButton backTitle={backTitle} backTitleFontSize={backTitleFontSize} />
                ) : null}
                {leftChild}
            </LeftContainer>
            <MiddleContainer>
                {centerChild ?? (
                    <StyledTitle color={textColor.base900} fontSize={titleFontSize} selectable={false}>
                        {title}
                    </StyledTitle>
                )}
            </MiddleContainer>
            <RightContainer>{rightChild}</RightContainer>
        </Container>
    );
}
