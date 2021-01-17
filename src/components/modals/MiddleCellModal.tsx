import React, { ReactNode } from 'react';
import { Cell } from '../containers';
import { DimmedModal, DimmedModalProps } from './DimmedModal';
import { getValueForLargeSize, useWidthSizeGroup } from '@bma98/size-class';
import { AnimatedPresence, SlideVerticallyAnimation } from '../animations';
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
        <Cell overflow={'hidden'} borderRadius={'m'} maxWidth={550} maxHeight={550} width={'60%'} height={'60%'}>
            {children}
        </Cell>
    );
}

function MiddleCellPhone({ children }: MiddleCellProps): JSX.Element {
    return (
        <Cell overflow={'hidden'} borderRadius={'m'} marginTop={'m'} width={'90%'} height={'95%'}>
            {children}
        </Cell>
    );
}

export function MiddleCellModal({ children, onDismiss, visible, ...others }: MiddleCellModalProps): JSX.Element {
    const [widthSize] = useWidthSizeGroup();
    const Wrapper = getValueForLargeSize(widthSize, MiddleCellDesktop, MiddleCellPhone);
    const justifyContent = getValueForLargeSize(widthSize, 'center', 'flex-start');
    const [cellIsVisible, hideAnimation] = useModalAnimation(onDismiss, 400);

    return (
        <DimmedModal onDismiss={hideAnimation} visible={visible} {...others}>
            <AnimatedPresence>
                {cellIsVisible ? (
                    <SlideVerticallyAnimation width='100%' justifyContent={justifyContent} alignItems={'center'}>
                        <Wrapper>{children}</Wrapper>
                    </SlideVerticallyAnimation>
                ) : null}
            </AnimatedPresence>
        </DimmedModal>
    );
}
