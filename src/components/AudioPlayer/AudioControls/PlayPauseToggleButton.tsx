import React from 'react';
import { useTheme } from '../../../context/hooks/useTheme';
import { PlayPauseIcon } from './PlayPauseIcon';
import { RoundedToggleButton } from './RoundedToggleButton';
import { ControlToggleButtonProps } from './types';
import { getPlayPauseButtonAccessibilityProps } from '../accessibility/getPlayPauseButtonAccessibilityProps';

export function PlayPauseToggleButton({ active, onPress }: Omit<ControlToggleButtonProps, 'variant'>): JSX.Element {
    const { sizes } = useTheme();
    return (
        <RoundedToggleButton
            active={active}
            onPress={onPress}
            size={sizes.interactiveItemHeight}
            {...getPlayPauseButtonAccessibilityProps()}
        >
            {(tintColor: string) => <PlayPauseIcon tintColor={tintColor} isPlaying={!active} />}
        </RoundedToggleButton>
    );
}
