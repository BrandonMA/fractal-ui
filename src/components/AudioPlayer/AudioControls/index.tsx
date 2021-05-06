import React, { memo } from 'react';
import { Layer } from '../../containers/Layer';
import { getShuffleButtonAccessibilityProps } from '../accessibility/getShuffleButtonAccessibilityProps';
import { getPreviousButtonAccessibilityProps } from '../accessibility/getPreviousButtonAccessibilityProps';
import { getPlayPauseButtonAccessibilityProps } from '../accessibility/getPlayPauseButtonAccessibilityProps';
import { getNextButtonAccessibilityProps } from '../accessibility/getNextButtonAccessibilityProps';
import { getRepeatButtonAccessibilityProps } from '../accessibility/getRepeatButtonAccessibilityProps';
import { AudioControlsProps } from './types';
import { PlayPauseToggleButton } from './PlayPauseToggleButton';
import { ControlButton } from './ControlButton';
import { ControlToggleButton } from './ControlToggleButton';

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
                    <ControlToggleButton
                        variant={'shuffle'}
                        active={isEnableShuffle}
                        onPress={onShufflePress}
                        {...getShuffleButtonAccessibilityProps()}
                    />
                    <ControlButton variant={'previous'} onPress={onPreviousPress} {...getPreviousButtonAccessibilityProps()} />
                    <PlayPauseToggleButton active={!isPlaying} onPress={onPlayPausePress} {...getPlayPauseButtonAccessibilityProps()} />
                    <ControlButton variant={'next'} onPress={onNextPress} {...getNextButtonAccessibilityProps()} />
                    <ControlToggleButton
                        variant={'repeat'}
                        active={isEnableRepeat}
                        onPress={onRepeatPress}
                        {...getRepeatButtonAccessibilityProps()}
                    />
                </Layer>
            </Layer>
        );
    }
);

AudioControls.displayName = 'AudioControls';

export { AudioControls };
