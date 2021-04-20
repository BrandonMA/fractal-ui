import { Modal } from './Modal';
import React from 'react';
import { ModalProps } from './Modal/types';
import { Pressable } from '../buttons';
import { SafeAreaLayer } from '../containers/SafeAreaLayer';

export function DimmedModal({ visible, onDismiss, ...others }: ModalProps): JSX.Element {
    return (
        <Modal visible={visible} onDismiss={onDismiss} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Pressable
                zIndex={999}
                onPress={onDismiss}
                position='absolute'
                width='100%'
                height='100%'
                backgroundColor='black'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
            />
            <SafeAreaLayer zIndex={1000} {...others} />
        </Modal>
    );
}
