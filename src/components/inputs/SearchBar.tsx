import React, { memo, useCallback } from 'react';
import { IconTextField, IconTextFieldProps } from './IconTextField';
import { Ionicons as BaseIonicons } from '@expo/vector-icons';

const Ionicons = memo(BaseIonicons);

export function SearchBar(props: IconTextFieldProps): JSX.Element {
    const renderSearchIcon = useCallback(
        (color: string, size: number) => <Ionicons selectable={false} name='search' size={size} color={color} />,
        []
    );
    return <IconTextField {...props} leftImage={renderSearchIcon} />;
}
