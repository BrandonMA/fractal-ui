import React, { ReactNode } from 'react';
import { PaddingContainer } from '../../../Layout';
import { BaseContainer } from './BaseContainer';

export interface BaseCellProps {
    children: JSX.Element | Array<JSX.Element> | ReactNode;
    isLastItem?: boolean;
}

export function BaseCell(props: BaseCellProps): JSX.Element {
    const { children, isLastItem } = props;
    return (
        <PaddingContainer isLastItem={isLastItem}>
            <BaseContainer>{children}</BaseContainer>
        </PaddingContainer>
    );
}
