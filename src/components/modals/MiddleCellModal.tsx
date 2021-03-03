import React from 'react';
import { ModalProps } from './Modal/types';
import { Box } from '../containers';
import { getValueForLargeSize, useWidthSizeGroup } from '@bma98/size-class';
import { DimmedModal } from './DimmedModal';
import { LayerProps } from '../containers/Layer/types';
import { useTheme } from '../../hooks/useTheme';

function MiddleCellDesktop(props: LayerProps): JSX.Element {
    const { borderRadius, colors } = useTheme();
    return (
        <Box
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
            {...props}
        />
    );
}

function MiddleCellPhone(props: LayerProps): JSX.Element {
    const { borderRadius, spacings, colors } = useTheme();
    return (
        <Box
            pointerEvents={'auto'}
            overflow={'hidden'}
            borderRadius={borderRadius.m}
            alignSelf={'stretch'}
            flex={1}
            margin={spacings.m}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            backgroundColor={colors.background}
            {...props}
        />
    );
}

export function MiddleCellModal({ visible, onDismiss, ...others }: ModalProps): JSX.Element {
    const [widthSize] = useWidthSizeGroup();
    const Wrapper = getValueForLargeSize(widthSize, MiddleCellDesktop, MiddleCellPhone);

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
            <Wrapper {...others} />
        </DimmedModal>
    );
}
