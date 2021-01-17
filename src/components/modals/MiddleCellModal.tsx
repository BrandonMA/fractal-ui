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
}

function MiddleCellDesktop({ children }: MiddleCellProps): JSX.Element {
    return (
        <BottomSlideAnimation
            overflow={'hidden'}
            borderRadius={'m'}
            maxWidth={550}
            maxHeight={550}
            width={'60%'}
            height={'60%'}
            backgroundColor='foreground'
        >
            {children}
        </BottomSlideAnimation>
    );
}

function MiddleCellPhone({ children }: MiddleCellProps): JSX.Element {
    return (
        <BottomSlideAnimation
            overflow={'hidden'}
            borderRadius={'m'}
            marginTop={'m'}
            width={'90%'}
            height={'95%'}
            backgroundColor='foreground'
        >
            {children}
        </BottomSlideAnimation>
    );
}

export function MiddleCellModal({ children, onDismiss, visible, ...others }: MiddleCellModalProps): JSX.Element {
    const [widthSize] = useWidthSizeGroup();
    const Wrapper = getValueForLargeSize(widthSize, MiddleCellDesktop, MiddleCellPhone);
    const justifyContent = getValueForLargeSize(widthSize, 'center', 'flex-start');
    const [cellIsVisible, hideAnimation] = useModalAnimation(onDismiss, 300);

    return (
        <DimmedModal onDismiss={hideAnimation} visible={visible} justifyContent={justifyContent} alignItems={'center'} {...others}>
            <AnimatedPresence>{cellIsVisible ? <Wrapper>{children}</Wrapper> : null}</AnimatedPresence>
        </DimmedModal>
    );
}
