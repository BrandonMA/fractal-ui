import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { useHideAnimation, useShowAnimation } from '../../../Animations/hooks';
import { useWidthSizeGroup } from '../../../SizeGroup/hooks';
import { Size } from '../../../SizeGroup/types';
import { useHistory } from '../../../ReactRouter';
import { getValueForLargeSize } from '../../../SizeGroup/util';
import { constants } from '../../constants';
import { useThemeColor } from '../../../ThemeState';

interface ContainerProps {
    size: Size;
}

const StyledContainer = styled(Animated.View)`
    justify-content: ${(props: ContainerProps) => getValueForLargeSize(props.size, 'center', 'flext-start')};
    align-items: center;
`;

interface BackgroundProps {
    color: string;
}

const Background = styled(Pressable)`
    background-color: ${(props: BackgroundProps) => props.color};
    opacity: 0.6;
`;

const SharedStyles = styled.View`
    background-color: white;
    border-radius: 20px;
    box-shadow: ${constants.shadowBottom};
    overflow: hidden;
`;

const WhiteContentDesktop = styled(SharedStyles)`
    width: 60%;
    height: 60%;
    max-width: 550px;
    max-height: 550px;
` as typeof SharedStyles;

const WhiteContentPhone = styled(SharedStyles)`
    width: 90%;
    height: 85%;
    margin-top: ${constants.basePaddingSize}px;
` as typeof SharedStyles;

interface StackScreenModalProps {
    children: JSX.Element;
}

export function StackScreenModal(props: StackScreenModalProps): JSX.Element {
    const opacityValue = useRef(new Animated.Value(0)).current;
    const { goBack } = useHistory();
    const show = useShowAnimation(opacityValue);
    const hide = useHideAnimation(opacityValue, goBack);
    const [widthSize] = useWidthSizeGroup();
    const Wrapper = getValueForLargeSize(widthSize, WhiteContentDesktop, WhiteContentPhone);
    const containerColor = useThemeColor('containerColor');

    useEffect(() => {
        show();
    }, [show]);

    const handleGoBack = useCallback(() => {
        hide();
    }, [hide]);

    return (
        <StyledContainer size={widthSize} style={[StyleSheet.absoluteFill, { opacity: opacityValue }]}>
            <Background color={containerColor.base} onPress={handleGoBack} style={[StyleSheet.absoluteFill]} />
            <Wrapper>{props.children}</Wrapper>
        </StyledContainer>
    );
}
