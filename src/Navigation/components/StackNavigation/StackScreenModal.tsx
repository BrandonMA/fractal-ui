import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { useHideAnimation, useShowAnimation } from '../../../Animations/hooks';
import { useWidthSizeGroup } from '../../../SizeClass/hooks';
import { Size } from '../../../SizeClass/types';
import { useHistory } from '../../../ReactRouter';
import { getValueForLargeSize } from '../../../SizeClass/util';

interface ContainerProps {
    size: Size;
}

const StyledContainer = styled(Animated.View)`
    justify-content: ${(props: ContainerProps) => (props.size === Size.large || props.size === Size.extraLarge ? 'center' : 'flex-start')};
    align-items: center;
`;

const Background = styled(Pressable)`
    background-color: black;
    opacity: 0.6;
`;

const SharedStyles = styled.View`
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
    overflow: hidden;
`;

const WhiteContentDesktop = styled(SharedStyles)`
    width: 60%;
    height: 60%;
    max-width: 550px;
    max-height: 550px;
`;

const WhiteContentPhone = styled(SharedStyles)`
    width: 90%;
    height: 85%;
    margin-top: 16px;
`;

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

    useEffect(() => {
        show();
    }, [show]);

    const handleGoBack = useCallback(() => {
        hide();
    }, [hide]);

    return (
        <StyledContainer size={widthSize} style={[StyleSheet.absoluteFill, { opacity: opacityValue }]}>
            <Background onPress={handleGoBack} style={[StyleSheet.absoluteFill]} />
            <Wrapper>{props.children}</Wrapper>
        </StyledContainer>
    );
}