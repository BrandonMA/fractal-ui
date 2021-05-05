import React, { memo } from 'react';
import { Layer } from '../../containers/Layer';
import { getShuffleButtonAccessibilityProps } from '../accessibility/getShuffleButtonAccessibilityProps';
import { getPreviousButtonAccessibilityProps } from '../accessibility/getPreviousButtonAccessibilityProps';
import { getPlayPauseButtonAccessibilityProps } from '../accessibility/getPlayPauseButtonAccessibilityProps';
import { getNextButtonAccessibilityProps } from '../accessibility/getNextButtonAccessibilityProps';
import { getRepeatButtonAccessibilityProps } from '../accessibility/getRepeatButtonAccessibilityProps';
import { AudioControlsProps } from './types';
import { ShuffleToggleButton } from './ShuffleToggleButton';
import { RepeatToggleButton } from './RepeatToggleButton';
import { PlayPauseToggleButton } from './PlayPauseToggleButton';
import { PreviousNextButton } from './PreviousNextButton';

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
        return (
            <Layer>
                <Layer flexDirection='row' alignItems={'center'} justifyContent={'space-between'}>
                    <ShuffleToggleButton active={isEnableShuffle} onPress={onShufflePress} {...getShuffleButtonAccessibilityProps()} />
                    <PreviousNextButton variant={'previous'} onPress={onPreviousPress} {...getPreviousButtonAccessibilityProps()} />
                    <PlayPauseToggleButton active={!isPlaying} onPress={onPlayPausePress} {...getPlayPauseButtonAccessibilityProps()} />
                    <PreviousNextButton variant={'next'} onPress={onNextPress} {...getNextButtonAccessibilityProps()} />
                    <RepeatToggleButton active={isEnableRepeat} onPress={onRepeatPress} {...getRepeatButtonAccessibilityProps()} />
                </Layer>
            </Layer>
        );
    }
);

AudioControls.displayName = 'AudioControls';

export { AudioControls };
