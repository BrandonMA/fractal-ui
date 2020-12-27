import React from 'react';
import { white } from '../../baseColors';
import { InternalButton } from './InternalButton/InternalButton';
import { InternalButtonProps } from './InternalButton/types/InternalButtonProps';
import { FontAwesome } from '@expo/vector-icons';

export function FacebookButton(props: Omit<InternalButtonProps, 'textColor' | 'backgroundColor' | 'shadow' | 'children'>): JSX.Element {
    return (
        <InternalButton {...props} textColor={white.base} backgroundColor={'#3975EA'} shadow={'2px 2px 8px rgba(57, 117, 234, 0.4)'}>
            <FontAwesome name='facebook' size={24} color='white' />
        </InternalButton>
    );
}
