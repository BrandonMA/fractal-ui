import React from 'react';
import { ModalProps } from './Modal/types';
import { DimmedModal } from './DimmedModal';
import { ModalCell } from './ModalCell';

export function MiddleCellModal({ visible, onDismiss, ...others }: ModalProps): JSX.Element {
    return (
        <DimmedModal
            pointerEvents={'box-none'}
            visible={visible}
            onDismiss={onDismiss}
            height={'100%'}
            width={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <ModalCell {...others} variant={'middle'} />
        </DimmedModal>
    );
}
