import React, { ReactNode } from 'react';
import { DimmedModal, DimmedModalProps } from './DimmedModal';
import { getValueForLargeSize, useWidthSizeGroup } from '@bma98/size-class';
import { AnimatedPresence, BottomSlideAnimation } from '../animations';
import { useModalAnimation } from './hooks/useModalAnimation';

export interface MiddleCellModalProps extends DimmedModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
}

interface MiddleCellProps {
    children: ReactNode;
    onHide?: () => void;
}

function MiddleCellDesktop({ children, onHide }: MiddleCellProps): JSX.Element {
    return (
        <BottomSlideAnimation
            overflow={'hidden'}
            borderRadius={'m'}
            maxWidth={550}
            maxHeight={550}
            width={'60%'}
            height={'60%'}
            backgroundColor='foreground'
            onHide={onHide}
        >
            {children}
        </BottomSlideAnimation>
    );
}

function MiddleCellPhone({ children, onHide }: MiddleCellProps): JSX.Element {
    return (
        <BottomSlideAnimation
            overflow={'hidden'}
            borderRadius={'m'}
            marginTop={'m'}
            width={'90%'}
            height={'95%'}
            backgroundColor='foreground'
            onHide={onHide}
        >
            {children}
        </BottomSlideAnimation>
    );
}

export function MiddleCellModal({
    children,
    onDismiss,
    disableStateResetOnDismiss = false,
    visible,
    ...others
}: MiddleCellModalProps): JSX.Element {
    const [widthSize] = useWidthSizeGroup();
    const Wrapper = getValueForLargeSize(widthSize, MiddleCellDesktop, MiddleCellPhone);
    const justifyContent = getValueForLargeSize(widthSize, 'center', 'flex-start');
    const [cellIsVisible, hideAnimation, setVisibleToTrue] = useModalAnimation(onDismiss, 350, disableStateResetOnDismiss);

    return (
        <DimmedModal
            disableStateResetOnDismiss={disableStateResetOnDismiss}
            onDismiss={hideAnimation}
            visible={visible}
            justifyContent={justifyContent}
            alignItems={'center'}
            {...others}
        >
            <AnimatedPresence>{cellIsVisible ? <Wrapper onHide={setVisibleToTrue}>{children}</Wrapper> : null}</AnimatedPresence>
        </DimmedModal>
    );
}
