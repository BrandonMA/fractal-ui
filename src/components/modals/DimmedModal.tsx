import React, { ReactNode } from 'react';
import { Modal as NativeModal, ModalProps as NativeModalProps } from 'react-native';
import { BasePressable } from '../baseComponents/BasePressable';
import { BaseSafeAreaView } from '../baseComponents';
import { AnimatedPresence, FadeAnimation } from '../animations';
import { HideDimmedModalProvider } from './context/HideDimmedModalProvider';
import { useAnimatedPresenceState } from '../animations/hooks/useAnimatedPresenceState';

export interface DimmedModalProps extends NativeModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    disableStateResetOnDismiss?: boolean;
}

export function DimmedModal({
    children,
    onDismiss,
    visible,
    justifyContent,
    alignItems,
    disableStateResetOnDismiss = false,
    ...others
}: DimmedModalProps): JSX.Element {
    const [backgroundVisible, hideAnimated, resetVisibility] = useAnimatedPresenceState(onDismiss, 0, disableStateResetOnDismiss);

    return (
        <HideDimmedModalProvider hideAnimated={hideAnimated}>
            <NativeModal visible={visible} transparent animationType='fade' {...others}>
                <BaseSafeAreaView flex={1} justifyContent={justifyContent} alignItems={alignItems}>
                    <AnimatedPresence>
                        {backgroundVisible ? (
                            <FadeAnimation
                                position='absolute'
                                top={0}
                                right={0}
                                bottom={0}
                                left={0}
                                backgroundColor='black'
                                activeOpacity={0.6}
                                onHide={resetVisibility}
                            >
                                <BasePressable width={'100%'} height={'100%'} onPress={hideAnimated} opacity={0.6} />
                            </FadeAnimation>
                        ) : null}
                    </AnimatedPresence>
                    {children}
                </BaseSafeAreaView>
            </NativeModal>
        </HideDimmedModalProvider>
    );
}
