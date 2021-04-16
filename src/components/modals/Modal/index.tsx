import { AnimatePresence } from 'framer-motion';
import React, { ForwardedRef, forwardRef } from 'react';
import { ModalPortal } from './ModalPortal';
import { ModalContent } from './ModalContent';
import { ModalProps } from './types';

export const Modal = forwardRef(
    ({ visible, ...others }: ModalProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
        return (
            <ModalPortal>
                <AnimatePresence>{visible ? <ModalContent ref={ref} key='ModalContent' {...others} /> : null}</AnimatePresence>
            </ModalPortal>
        );
    }
);
