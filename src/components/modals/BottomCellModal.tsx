import React, { memo, ReactNode } from 'react';
import { BaseTouchableOpacity } from '../baseComponents';
import { Cell, PaddedContainer } from '../containers';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../themes';
import { DimmedModal, DimmedModalProps } from './DimmedModal';
import { AnimatedPresence, SlideVerticallyAnimation } from '../animations';
import { useModalAnimation } from './hooks/useModalAnimation';

const Entypo = memo(BaseEntypo);

export interface BottomCellModalProps extends DimmedModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
}

export function BottomCellModal({ children, onDismiss, visible, ...others }: BottomCellModalProps): JSX.Element {
    const { colors } = useTheme<FractalTheme>();
    const [cellIsVisible, hideAnimated] = useModalAnimation(onDismiss, 300);

    return (
        <DimmedModal onDismiss={hideAnimated} visible={visible} {...others} justifyContent='flex-end'>
            <AnimatedPresence>
                {cellIsVisible ? (
                    <SlideVerticallyAnimation>
                        <PaddedContainer width={'100%'} alignItems='center'>
                            <Cell maxWidth={540} width={'100%'}>
                                <BaseTouchableOpacity
                                    justifyContent='center'
                                    alignItems='center'
                                    backgroundColor='background'
                                    alignSelf='flex-end'
                                    width={32}
                                    height={32}
                                    borderRadius='l'
                                    onPress={hideAnimated}
                                >
                                    <Entypo name='cross' size={21} color={colors.placeholderColor} />
                                </BaseTouchableOpacity>
                                {children}
                            </Cell>
                        </PaddedContainer>
                    </SlideVerticallyAnimation>
                ) : null}
            </AnimatedPresence>
        </DimmedModal>
    );
}
