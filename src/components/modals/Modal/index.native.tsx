import React from 'react';
import { ModalProps } from './types';
import { Modal as RNModal } from 'react-native';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../../containers';

export function Modal({ visible, ...others }: ModalProps): JSX.Element {
    return (
        <AnimatePresence>
            {visible ? (
                <RNModal animationType={'none'} transparent>
                    <Layer position={'absolute'} top={0} right={0} bottom={0} left={0} {...others} />
                </RNModal>
            ) : null}
        </AnimatePresence>
    );
}
