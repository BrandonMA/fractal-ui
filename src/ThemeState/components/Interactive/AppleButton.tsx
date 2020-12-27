import React from 'react';
import { black, white } from '../../baseColors';
import { InternalButton } from './InternalButton/InternalButton';
import { InternalButtonProps } from './InternalButton/types/InternalButtonProps';
import { FontAwesome } from '@expo/vector-icons';

export function AppleButton(props: Omit<InternalButtonProps, 'textColor' | 'backgroundColor' | 'shadow' | 'children'>): JSX.Element {
    const { text } = props;
    return (
        <InternalButton {...props} textColor={white.base} backgroundColor={black.base} shadow={black.shadow}>
            <FontAwesome name='apple' size={text != null ? 18 : 24} color='white' />
        </InternalButton>
    );
}
