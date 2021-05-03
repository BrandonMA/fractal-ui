import React, { memo } from 'react';
import { useTheme } from '../../core';
import { BaseButton } from '../buttons/BaseButton';
import { ToggleButton } from '../buttons/ToggleButton';
import { Layer } from '../containers/Layer';
import { NextIcon } from '../../assets/NextIcon';
import { PreviousIcon } from '../../assets/PreviousIcon';
import { RepeatIcon } from '../../assets/RepeatIcon';
import { ShuffleIcon } from '../../assets/ShuffleIcon';
import { getShuffleButtonAccessibilityProps } from './accessibility/getShuffleButtonAccessibilityProps';
import { getPreviousButtonAccessibilityProps } from './accessibility/getPreviousButtonAccessibilityProps';
import { getPlayPauseButtonAccessibilityProps } from './accessibility/getPlayPauseButtonAccessibilityProps';
import { getNextButtonAccessibilityProps } from './accessibility/getNextButtonAccessibilityProps';
import { getRepeatButtonAccessibilityProps } from './accessibility/getRepeatButtonAccessibilityProps';
import { PlayPauseIcon } from './PlayPauseIcon';

interface AudioControlsProps {
    isEnableShuffle: boolean;
    isEnableRepeat: boolean;
    isPlaying: boolean;
    onPlayPausePress: () => void;
    onPreviousPress: () => void;
    onNextPress: () => void;
    onShufflePress: () => void;
    onRepeatPress: () => void;
}

const SMALL_ICON_SIZE = 16;

const SMALL_BUTTON = 32;

const AudioControls = memo(
    ({
        isPlaying,
        isEnableShuffle,
        isEnableRepeat,
        onPlayPausePress,
        onNextPress,
        onPreviousPress,
        onShufflePress,
        onRepeatPress
    }: AudioControlsProps): JSX.Element => {
        const { colors, sizes } = useTheme();

        return (
            <Layer>
                <Layer flexDirection='row' alignItems={'center'} justifyContent={'space-between'}>
                    <ToggleButton
                        active={isEnableShuffle}
                        variant='main'
                        onPress={onShufflePress}
                        useGrayVariant
                        width={SMALL_BUTTON}
                        height={SMALL_BUTTON}
                        borderRadius={SMALL_BUTTON / 2}
                        {...getShuffleButtonAccessibilityProps()}
                    >
                        {(tintColor: string) => <ShuffleIcon fill={tintColor} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />}
                    </ToggleButton>
                    <BaseButton
                        alignItems={'center'}
                        justifyContent={'center'}
                        width={36}
                        height={36}
                        onPress={onPreviousPress}
                        {...getPreviousButtonAccessibilityProps()}
                    >
                        <PreviousIcon fill={colors.text} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />
                    </BaseButton>
                    <ToggleButton
                        active={!isPlaying}
                        variant='main'
                        onPress={onPlayPausePress}
                        width={sizes.interactiveItemHeight}
                        borderRadius={sizes.interactiveItemHeight / 2}
                        {...getPlayPauseButtonAccessibilityProps()}
                    >
                        {(tintColor: string) => <PlayPauseIcon tintColor={tintColor} isPlaying={isPlaying} />}
                    </ToggleButton>
                    <BaseButton
                        alignItems={'center'}
                        justifyContent={'center'}
                        width={36}
                        height={36}
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
                        {...getRepeatButtonAccessibilityProps()}
                    >
                        {(tintColor: string) => <RepeatIcon fill={tintColor} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />}
                    </ToggleButton>
                </Layer>
            </Layer>
        );
    }
);

AudioControls.displayName = 'AudioControls';

export { AudioControls };
