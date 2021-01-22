import React, { ReactNode } from 'react';
import { BaseTouchableOpacity } from '../baseComponents';
import { Cell } from '../containers';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../themes';
import { DimmedModal, DimmedModalProps } from './DimmedModal';
import { AnimatedPresence, BottomSlideAnimation } from '../animations';
import { useModalAnimatedState } from './hooks/useModalAnimatedState';
import { XIcon } from '../assets/XIcon';

export interface BottomCellModalProps extends DimmedModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
}

export function BottomCellModal({
    children,
    disableStateResetOnDismiss = false,
    onDismiss,
    visible,
    ...others
}: BottomCellModalProps): JSX.Element {
    const { colors } = useTheme<FractalTheme>();
    const [cellIsVisible, hideAnimated, resetVisibility] = useModalAnimatedState(onDismiss, 350, disableStateResetOnDismiss);

    return (
        <DimmedModal
            disableStateResetOnDismiss={disableStateResetOnDismiss}
            onDismiss={hideAnimated}
            visible={visible}
            {...others}
            justifyContent='flex-end'
        >
            <AnimatedPresence>
                {cellIsVisible ? (
                    <BottomSlideAnimation padding='m' alignSelf='center' maxWidth={540} width={'100%'} onHide={resetVisibility}>
                        <Cell>
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
                                <XIcon height={19} fill={colors.placeholderColor} />
                            </BaseTouchableOpacity>
                            {children}
                        </Cell>
                    </BottomSlideAnimation>
                ) : null}
            </AnimatedPresence>
        </DimmedModal>
    );
}
