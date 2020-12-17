import React, { memo, useEffect } from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { useHistory } from '../../../../ReactRouter';
import { NavigationBarProps } from './types/NavigationBarProps';
import { Entypo } from '@expo/vector-icons';
import { useNavigationBarChildren } from './hooks/useNavigationBarChildren';
import { useMatch } from '../../../hooks/useMatch';
import { constants } from '../../../constants';
import { getCursorStyle } from '../../../../Layout/util/getCursorStyle';
import { useRecoilState } from 'recoil';
import { navigationBarInsetsAtom } from '../../../recoil/atoms/navigationBarInsetsAtom';
import { useThemeColor } from '../../../../ThemeState';

interface ContainerProps {
    backgroundColor: string;
}

const Container = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    height: ${constants.navigationBarHeightForWeb}px;
    background-color: ${(props: ContainerProps) => props.backgroundColor};
    box-shadow: ${constants.shadowBottom};
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1000;
`;

interface TextProps {
    color: string;
    fontSize?: number;
}

const StyledText = styled.Text`
    color: ${(props: TextProps) => props.color};
    font-size: ${(props: TextProps) => props.fontSize ?? constants.fontSizeNormal}px;
`;

const StyledTitle = memo(styled.Text`
    color: ${(props: TextProps) => props.color};
    font-weight: 700;
    font-size: ${(props: TextProps) => props.fontSize ?? constants.fontSizeTitle}px;
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
` as typeof SharedStylesSectionContainer;

const MiddleContainer = styled(SharedStylesSectionContainer)`
    justify-content: center;
` as typeof SharedStylesSectionContainer;

const RightContainer = styled(SharedStylesSectionContainer)`
    justify-content: flex-end;
    padding-right: ${constants.basePaddingSize}px;
` as typeof SharedStylesSectionContainer;

const StyledBackButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${getCursorStyle};
`;

export function NavigationBar(props: NavigationBarProps): JSX.Element | null {
    const { hidden, title, hideBackButton, backTitle, backTitleFontSize, titleFontSize, children } = props;
    const [navigationBarInsets, setNavigationBarInsets] = useRecoilState(navigationBarInsetsAtom);
    const mainInteractiveColor = useThemeColor('mainInteractiveColor');
    const navigationBarColor = useThemeColor('navigationBarColor');
    const textColor = useThemeColor('textColor');
    const { goBack } = useHistory();
    const [, activeRoutes] = useMatch('/');
    const [leftChild, centerChild, rightChild] = useNavigationBarChildren(children);

    useEffect(() => {
        const top = Platform.OS === 'web' && !hidden ? constants.navigationBarHeightForWeb : 0; // Set the value of the navigation bar for web here. For native it is already inside safeAreaInsets.
        if (top !== navigationBarInsets.top) {
            setNavigationBarInsets({ top, right: 0, bottom: 0, left: 0 });
        }
    }, [hidden, navigationBarInsets, setNavigationBarInsets]);

    return hidden ? null : (
        <Container backgroundColor={navigationBarColor.base}>
            <LeftContainer>
                {activeRoutes <= 1 || hideBackButton ? null : (
                    <StyledBackButtonContainer onPress={goBack}>
                        <Entypo name='chevron-left' size={constants.navigationBarBackButtonSize} color={mainInteractiveColor.base} />
                        <StyledText color={mainInteractiveColor.base} fontSize={backTitleFontSize}>
                            {backTitle}
                        </StyledText>
                    </StyledBackButtonContainer>
                )}
                {leftChild}
            </LeftContainer>
            <MiddleContainer>
                {centerChild ?? (
                    <StyledTitle color={textColor.base900} fontSize={titleFontSize}>
                        {title}
                    </StyledTitle>
                )}
            </MiddleContainer>
            <RightContainer>{rightChild}</RightContainer>
        </Container>
    );
}
