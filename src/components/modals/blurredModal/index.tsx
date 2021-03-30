import React from 'react';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { Pressable } from '../../buttons/Pressable';
import { Modal } from '../Modal';
import styled from 'styled-components';
import { BlurredModalProps } from './types';
import { Box } from '../../containers/Box';

const BlurPressable = styled(Pressable)`
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.4);
`;

export function BlurredModal({ onDismiss, visible, ...others }: BlurredModalProps): JSX.Element {
    const { colors, borderRadius } = useTheme();

    return (
        <Modal
            visible={visible}
            onDismiss={onDismiss}
            justifyContent={'center'}
            alignItems={'center'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <BlurPressable zIndex={999} onPress={onDismiss} position='absolute' width='100%' height='100%' />
            <Box
                zIndex={1000}
                pointerEvents={'auto'}
                overflow={'hidden'}
                borderRadius={borderRadius.m}
                maxWidth={550}
                maxHeight={550}
                width={'60%'}
                height={'60%'}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                backgroundColor={colors.background}
                {...others}
            />
        </Modal>
    );
}
