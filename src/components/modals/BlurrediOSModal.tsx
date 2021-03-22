import React, { ReactNode } from 'react';
import { BlurView } from 'expo-blur';
import { TextButton } from '../buttons/TextButton';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from '../containers/Layer/index.native';
import { Pressable } from '../buttons/Pressable';
import { SafeAreaLayer } from '../containers/SafeAreaLayer';
import { useThemeIdentifier } from '../../core/context/hooks/useThemeIdentifier';
import { Modal } from './Modal';
import { ModalProps } from './Modal/types';
import styled from 'styled-components/native';

const StyledBlurView = styled(BlurView)`
    height: 100%;
`;

export interface BlurrediOSModalProps extends ModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
    disableStateResetOnDismiss?: boolean;
    dismissText: string;
}

export function BlurrediOSModal({ children, onDismiss, dismissText, visible, ...others }: BlurrediOSModalProps): JSX.Element {
    const { colors, spacings } = useTheme();
    const themeIdentifier = useThemeIdentifier();

    return (
        <Modal
            visible={visible}
            onDismiss={onDismiss}
            pointerEvents={'box-none'}
            height={'100%'}
            width={'100%'}
            justifyContent={'flex-end'}
            {...others}
        >
            <Pressable flex={1} onPress={onDismiss} />
            <Layer height={'35%'} initial={{ translateY: 400 }} animate={{ translateY: 0 }} exit={{ translateY: 400 }}>
                <StyledBlurView intensity={100} tint={themeIdentifier}>
                    <Layer
                        top={0}
                        bottom={0}
                        left={0}
                        right={0}
                        position={'absolute'}
                        style={{ opacity: 0.1 }}
                        backgroundColor={themeIdentifier === 'light' ? 'black' : 'white'}
                    />
                    <Layer
                        justifyContent='center'
                        alignItems='flex-end'
                        borderTopWidth={0.5}
                        borderColor={colors.placeholder}
                        backgroundColor={colors.background}
                        height={48}
                        paddingRight={spacings.m}
                    >
                        <TextButton variant={'main'} textProps={{ variant: 'label', fontWeight: 600 }} onPress={onDismiss}>
                            {dismissText}
                        </TextButton>
                    </Layer>
                    <SafeAreaLayer justifyContent='center'>{children}</SafeAreaLayer>
                </StyledBlurView>
            </Layer>
        </Modal>
    );
}
