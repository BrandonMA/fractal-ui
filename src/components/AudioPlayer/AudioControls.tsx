import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useTheme } from '../../core';
import { BaseButton } from '../buttons/BaseButton';
import { ToggleButton } from '../buttons/ToggleButton';
import { Layer } from '../containers/Layer';
import { NextIcon } from './icons/Next';
import { PauseIcon } from './icons/Pause';
import { PlayIcon } from './icons/Play';
import { PreviousIcon } from './icons/Previous';
import { RepeatIcon } from './icons/Repeat';
import { ShuffleIcon } from './icons/Shuffle';
import { getShuffleButtonAccessibilityProps } from './accessibility/getShuffleButtonAccessibilityProps';
import { getPreviousButtonAccessibilityProps } from './accessibility/getPreviousButtonAccessibilityProps';
import { getPlayPauseButtonAccessibilityProps } from './accessibility/getPlayPauseButtonAccessibilityProps';
import { getNextButtonAccessibilityProps } from './accessibility/getNextButtonAccessibilityProps';
import { getRepeatButtonAccessibilityProps } from './accessibility/getRepeatButtonAccessibilityProps';

interface AudioControlsProps {
    isEnableShuffle: boolean;
    isEnableRepeat: boolean;
    isPlaying: boolean;
    onPlayPausePress: (value: boolean) => void;
    onPreviousPress: () => void;
    onNextPress: () => void;
    onShufflePress: () => void;
    onRepeatPress: () => void;
}

const ICON_SIZE = 20;

const SMALL_ICON_SIZE = 16;

const SMALL_BUTTON = 32;

interface PlayPauseIconProps {
    tintColor: string;
    isPlaying: boolean;
}

function PlayPauseIcon({ tintColor, isPlaying }: PlayPauseIconProps): JSX.Element {
    return (
        <AnimatePresence>
            {isPlaying ? (
                <Layer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <PauseIcon fill={tintColor} width={ICON_SIZE} height={ICON_SIZE} />
                </Layer>
            ) : (
                <Layer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <PlayIcon fill={tintColor} width={ICON_SIZE} height={ICON_SIZE} />
                </Layer>
            )}
        </AnimatePresence>
    );
}

export function AudioControls({
    isPlaying,
    isEnableShuffle,
    isEnableRepeat,
    onPlayPausePress,
    onNextPress,
    onPreviousPress,
    onShufflePress,
    onRepeatPress
}: AudioControlsProps): JSX.Element {
    const { colors, sizes } = useTheme();

    return (
        <>
            <Layer flexDirection='row' alignItems={'center'} justifyContent={'space-between'}>
                <ToggleButton
                    active={isEnableShuffle}
                    variant='main'
                    onPress={onShufflePress}
                    useGrayVariant
                    width={SMALL_BUTTON}
                    height={SMALL_BUTTON}
                    borderRadius={SMALL_BUTTON / 2}
                    {...getShuffleButtonAccessibilityProps(isEnableShuffle)}
                >
                    {(tintColor: string) => <ShuffleIcon fill={tintColor} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />}
                </ToggleButton>
                <BaseButton
                    alignItems={'center'}
                    justifyContent={'center'}
                    width={24}
                    height={24}
                    onPress={onPreviousPress}
                    {...getPreviousButtonAccessibilityProps()}
                >
                    <PreviousIcon fill={colors.text} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />
                </BaseButton>
                <ToggleButton
                    active={!isPlaying}
                    variant='main'
                    onPress={() => onPlayPausePress(!isPlaying)}
                    width={sizes.interactiveItemHeight}
                    borderRadius={sizes.interactiveItemHeight / 2}
                    {...getPlayPauseButtonAccessibilityProps(isPlaying)}
                >
                    {(tintColor: string) => <PlayPauseIcon tintColor={tintColor} isPlaying={isPlaying} />}
                </ToggleButton>
                <BaseButton
                    alignItems={'center'}
                    justifyContent={'center'}
                    width={24}
                    height={24}
                    onPress={onNextPress}
                    {...getNextButtonAccessibilityProps()}
                >
                    <NextIcon fill={colors.text} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />
                </BaseButton>
                <ToggleButton
                    active={isEnableRepeat}
                    variant='main'
                    onPress={onRepeatPress}
                    useGrayVariant
                    width={SMALL_BUTTON}
                    height={SMALL_BUTTON}
                    borderRadius={SMALL_BUTTON / 2}
                    {...getRepeatButtonAccessibilityProps(isEnableRepeat)}
                >
                    {(tintColor: string) => <RepeatIcon fill={tintColor} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />}
                </ToggleButton>
            </Layer>
        </>
    );
}
