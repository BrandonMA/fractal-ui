import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { ModalPortal } from './ModalPortal';
import { ModalContent } from './ModalContent';
import { ModalProps } from './types';

export function Modal({ visible, ...others }: ModalProps): JSX.Element {
    return (
        <ModalPortal>
            <AnimatePresence>{visible ? <ModalContent key='ModalContent' {...others} /> : null}</AnimatePresence>
        </ModalPortal>
    );
}
