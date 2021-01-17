import React, { ReactNode, useEffect } from 'react';
import { Cell } from '../containers';
import { DimmedModal, DimmedModalProps } from './DimmedModal';
import { useModalAnimation } from './hooks/useModalAnimation';
import { getValueForLargeSize, useWidthSizeGroup } from '@bma98/size-class';
import { Animated, ViewStyle } from 'react-native';

export interface MiddleCellModalProps extends DimmedModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
}

interface MiddleCellProps {
    children: ReactNode;
    style: Animated.AnimatedProps<ViewStyle>;
}

function MiddleCellDesktop({ children, style }: MiddleCellProps): JSX.Element {
    return (
        <Cell overflow={'hidden'} borderRadius={'m'} maxWidth={550} maxHeight={550} width={'60%'} height={'60%'} style={style}>
            {children}
        </Cell>
    );
}

function MiddleCellPhone({ children, style }: MiddleCellProps): JSX.Element {
    return (
        <Cell overflow={'hidden'} borderRadius={'m'} marginTop={'m'} width={'90%'} height={'95%'} style={style}>
            {children}
        </Cell>
    );
}

export function MiddleCellModal({ children, onDismiss, visible, ...others }: MiddleCellModalProps): JSX.Element {
    const [animatedStyle, showAnimation, hideAnimation] = useModalAnimation(onDismiss);
    const [widthSize] = useWidthSizeGroup();
    const Wrapper = getValueForLargeSize(widthSize, MiddleCellDesktop, MiddleCellPhone);
    const justifyContent = getValueForLargeSize(widthSize, 'center', 'flex-start');

    useEffect(() => {
        if (visible) {
            showAnimation();
        }
    }, [showAnimation, visible]);

    return (
        <DimmedModal onDismiss={hideAnimation} visible={visible} {...others} justifyContent={justifyContent} alignItems={'center'}>
            <Wrapper style={animatedStyle}>{children}</Wrapper>
        </DimmedModal>
    );
}
