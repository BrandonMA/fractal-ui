import React, { memo, ReactNode, useEffect, useMemo, useRef } from 'react';
import { Animated, Dimensions, Modal as NativeModal, ModalProps as NativeModalProps } from 'react-native';
import { BasePressable } from './baseComponents/BasePressable';
import { BaseSafeAreaView, BaseTouchableOpacity } from './baseComponents';
import { Cell, PaddedContainer } from './containers';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../themes';
import { useSpringAnimation } from '../animationHooks/useSpringAnimation';
const Entypo = memo(BaseEntypo);

export interface ModalProps extends NativeModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
}

export function ModalCell(props: ModalProps): JSX.Element {
    const { children, justifyContent, onDismiss, visible, ...others } = props;
    const theme = useTheme<FractalTheme>();

    const screenHeight = Dimensions.get('screen').height;
    const yOffset = useRef(new Animated.Value(screenHeight)).current;
    const showAnimation = useSpringAnimation(yOffset, 0);

    const style = useMemo(() => {
        return { transform: [{ translateY: yOffset }] };
    }, [yOffset]);

    useEffect(() => {
        if (visible) {
            showAnimation();
        }
    }, [showAnimation, visible]);

    return (
        <NativeModal visible={visible} {...others}>
            <BaseSafeAreaView flex={1} justifyContent={justifyContent}>
                <BasePressable
                    onPress={onDismiss}
                    position='absolute'
                    top={0}
                    right={0}
                    bottom={0}
                    left={0}
                    backgroundColor='black'
                    opacity={0.6}
                />
                <PaddedContainer style={style}>
                    <Cell maxWidth={540}>
                        <BaseTouchableOpacity
                            justifyContent='center'
                            alignItems='center'
                            backgroundColor='background'
                            alignSelf='flex-end'
                            width={32}
                            height={32}
                            borderRadius='l'
                            onPress={onDismiss}
                        >
                            <Entypo name='cross' size={21} color={theme.colors.placeholderColor} />
                        </BaseTouchableOpacity>
                        {children}
                    </Cell>
                </PaddedContainer>
            </BaseSafeAreaView>
        </NativeModal>
    );
}
