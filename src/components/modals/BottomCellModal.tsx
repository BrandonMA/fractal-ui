import React, { memo, ReactNode, useEffect, useMemo, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { BaseTouchableOpacity } from '../baseComponents';
import { Cell, PaddedContainer } from '../containers';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../themes';
import { useSpringAnimation } from '../../animationHooks/useSpringAnimation';
import { DimmedModal, DimmedModalProps } from './DimmedModal';
const Entypo = memo(BaseEntypo);

export interface BottomCellModalProps extends DimmedModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
}

export function BottomCellModal(props: BottomCellModalProps): JSX.Element {
    const { children, onDismiss, visible, ...others } = props;
    const theme = useTheme<FractalTheme>();

    const screenHeight = Dimensions.get('screen').height;
    const yOffset = useRef(new Animated.Value(screenHeight)).current;
    const showAnimation = useSpringAnimation(yOffset, 0, 10, 4);

    const style = useMemo(() => {
        return { transform: [{ translateY: yOffset }] };
    }, [yOffset]);

    useEffect(() => {
        if (visible) {
            showAnimation();
        }
    }, [showAnimation, visible]);

    return (
        <DimmedModal onDismiss={onDismiss} visible={visible} {...others} justifyContent='flex-end'>
            <PaddedContainer style={style} width={'100%'} alignItems='center'>
                <Cell maxWidth={540} width={'100%'}>
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
        </DimmedModal>
    );
}
