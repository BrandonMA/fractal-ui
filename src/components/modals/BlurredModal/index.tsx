import React from 'react';
import { Pressable } from '../../buttons/Pressable';
import { Modal } from '../Modal';
import { BlurredModalProps } from './types';
import { SafeAreaLayer } from '../../containers/SafeAreaLayer/index.native';
import { ModalMiddleCell } from '../ModalMiddleCell';

export function BlurredModal({ onDismiss, visible, ...others }: BlurredModalProps): JSX.Element {
    return (
        <Modal visible={visible} onDismiss={onDismiss}>
            <Pressable
                zIndex={999}
                onPress={onDismiss}
                position='absolute'
                width='100%'
                height='100%'
                initial={{ backdropFilter: 'blur(0px)', '-webkit-backdrop-filter': 'blur(0px)' }}
                animate={{ backdropFilter: 'blur(20px)', '-webkit-backdrop-filter': 'blur(20px)' }}
                exit={{ backdropFilter: 'blur(0px)', '-webkit-backdrop-filter': 'blur(0px)' }}
            />
            <SafeAreaLayer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                zIndex={1000}
                pointerEvents={'box-none'}
                height={'100%'}
                width={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <ModalMiddleCell {...others} />
            </SafeAreaLayer>
        </Modal>
    );
}
