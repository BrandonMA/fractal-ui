import React from 'react';
import { TextButton } from '../../buttons/TextButton';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { Layer } from '../../containers/Layer/index.native';
import { Pressable } from '../../buttons/Pressable';
import { SafeAreaLayer } from '../../containers/SafeAreaLayer';
import { Modal } from '../Modal';
import styled from 'styled-components';
import { BlurredModalProps } from './types';

const StyledBlurView = styled.div`
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.1);
    height: 100%;
`;

export function BlurredModal({ children, onDismiss, dismissText, visible, ...others }: BlurredModalProps): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Modal visible={visible} onDismiss={onDismiss} justifyContent={'flex-end'} {...others}>
            <Pressable zIndex={999} onPress={onDismiss} position='absolute' width='100%' height='100%' />
            <Layer
                zIndex={1000}
                height={'35%'}
                backgroundColor={colors.background}
                initial={{ translateY: 400 }}
                animate={{ translateY: 0 }}
                exit={{ translateY: 400 }}
            >
                <StyledBlurView>
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
