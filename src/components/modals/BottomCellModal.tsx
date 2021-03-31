import React from 'react';
import { ModalProps } from './Modal/types';
import { Box } from '../containers';
import { getValueForLargeSize, useWidthSizeGroup } from '@bma98/size-class';
import { DimmedModal } from './DimmedModal';
import { LayerProps } from '../containers/Layer/types';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Dimensions } from 'react-native';

function BottomCellDesktop(props: LayerProps): JSX.Element {
    const { borderRadius, colors } = useTheme();
    const window = Dimensions.get('window');

    return (
        <Box
            pointerEvents={'auto'}
            overflow={'hidden'}
            borderRadius={borderRadius.m}
            width={500}
            minHeight={300}
            maxHeight={'50%'}
            initial={{ translateY: window.height }}
            animate={{ translateY: 0 }}
            exit={{ translateY: window.height }}
            backgroundColor={colors.background}
            {...props}
        />
    );
}

function BottomCellPhone(props: LayerProps): JSX.Element {
    const { borderRadius, spacings, colors } = useTheme();
    const window = Dimensions.get('window');

    return (
        <Box
            pointerEvents={'auto'}
            overflow={'hidden'}
            borderRadius={borderRadius.m}
            alignSelf={'stretch'}
            minHeight={300}
            maxHeight={'50%'}
            margin={spacings.m}
            initial={{ translateY: window.height }}
            animate={{ translateY: 0 }}
            exit={{ translateY: window.height }}
            backgroundColor={colors.background}
            {...props}
        />
    );
}

export function BottomCellModal({ visible, onDismiss, ...others }: ModalProps): JSX.Element {
    const [widthSize] = useWidthSizeGroup();
    const Wrapper = getValueForLargeSize(widthSize, BottomCellDesktop, BottomCellPhone);

    return (
        <DimmedModal
            visible={visible}
            onDismiss={onDismiss}
            pointerEvents={'box-none'}
            height={'100%'}
            width={'100%'}
            justifyContent={'flex-end'}
            alignItems={'center'}
        >
            <Wrapper {...others} />
        </DimmedModal>
    );
}
