import React from 'react';
import { useTheme } from '../../../context/hooks/useTheme';
import { PlayPauseIcon } from './PlayPauseIcon';
import { RoundedToggleButton } from './RoundedToggleButton';
import { ToggleControlProps } from './types';

export function PlayPauseToggleButton({ active, onPress }: ToggleControlProps): JSX.Element {
    const { sizes } = useTheme();
    return (
        <RoundedToggleButton active={active} onPress={onPress} size={sizes.interactiveItemHeight}>
            {(tintColor: string) => <PlayPauseIcon tintColor={tintColor} isPlaying={active} />}
        </RoundedToggleButton>
    );
}
