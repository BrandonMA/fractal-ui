import React, { memo, ReactNode, useEffect } from 'react';
import { BaseTouchableOpacity } from '../../baseComponents';
import { Cell, PaddedContainer } from '../../containers';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../../themes';
import { DimmedModal, DimmedModalProps } from '../DimmedModal';
import { useBottomCellModalAnimation } from './hooks/useBottomCellModalAnimation';

const Entypo = memo(BaseEntypo);

export interface BottomCellModalProps extends DimmedModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
}

export function Index({ children, onDismiss, visible, ...others }: BottomCellModalProps): JSX.Element {
    const { colors } = useTheme<FractalTheme>();
    const [animatedStyle, showAnimation] = useBottomCellModalAnimation();

    useEffect(() => {
        if (visible) {
            showAnimation();
        }
    }, [showAnimation, visible]);

    return (
        <DimmedModal onDismiss={onDismiss} visible={visible} {...others} justifyContent='flex-end'>
            <PaddedContainer style={animatedStyle} width={'100%'} alignItems='center'>
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
                        <Entypo name='cross' size={21} color={colors.placeholderColor} />
                    </BaseTouchableOpacity>
                    {children}
                </Cell>
            </PaddedContainer>
        </DimmedModal>
    );
}
