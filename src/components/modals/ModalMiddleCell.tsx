import { LayerProps } from '../containers/Layer/types';
import { useTheme } from '../../core';
import { Box } from '../containers';
import React from 'react';
import { useValueForLargeSizeType } from '@bma98/size-class';

function ModalCellDesktop(props: LayerProps): JSX.Element {
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

function ModalCellPhone(props: LayerProps): JSX.Element {
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

export function ModalMiddleCell(props: LayerProps): JSX.Element {
    const Wrapper = useValueForLargeSizeType('width', ModalCellDesktop, ModalCellPhone);

    return <Wrapper {...props} />;
}
