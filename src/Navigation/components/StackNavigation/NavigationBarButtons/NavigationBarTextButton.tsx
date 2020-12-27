import React from 'react';
import { BaseTextButton } from '../../../../ThemeState/components/Interactive/BaseTextButton';

export interface NavigationBarTextButtonProps {
    children: string;
    onPress?: () => void;
}

export function NavigationBarTextButton(props: NavigationBarTextButtonProps): JSX.Element {
    const { children, onPress } = props;
    return (
        <BaseTextButton colorStyle='mainInteractiveColor' textSize='md' onPress={onPress}>
            {children}
        </BaseTextButton>
    );
}
