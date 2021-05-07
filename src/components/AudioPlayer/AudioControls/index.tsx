import React, { memo } from 'react';
import { Layer } from '../../containers/Layer';
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
                    <ControlToggleButton variant={'shuffle'} active={isEnableShuffle} onPress={onShufflePress} />
                    <ControlButton variant={'previous'} onPress={onPreviousPress} />
                    <PlayPauseToggleButton active={!isPlaying} onPress={onPlayPausePress} />
                    <ControlButton variant={'next'} onPress={onNextPress} />
                    <ControlToggleButton variant={'repeat'} active={isEnableRepeat} onPress={onRepeatPress} />
                </Layer>
            </Layer>
        );
    }
);

AudioControls.displayName = 'AudioControls';

export { AudioControls };
