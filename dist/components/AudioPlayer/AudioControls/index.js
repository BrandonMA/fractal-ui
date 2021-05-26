import React, { memo } from 'react';
import { Layer } from '../../containers/Layer';
import { PlayPauseToggleButton } from './PlayPauseToggleButton';
import { ControlButton } from './ControlButton';
import { ControlToggleButton } from './ControlToggleButton';
const AudioControls = memo(({ isPlaying, isEnableShuffle, isEnableRepeat, onPlayPausePress, onNextPress, onPreviousPress, onShufflePress, onRepeatPress }) => {
    return (React.createElement(Layer, null,
        React.createElement(Layer, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
            React.createElement(ControlToggleButton, { variant: 'shuffle', active: isEnableShuffle, onPress: onShufflePress }),
            React.createElement(ControlButton, { variant: 'previous', onPress: onPreviousPress }),
            React.createElement(PlayPauseToggleButton, { active: !isPlaying, onPress: onPlayPausePress }),
            React.createElement(ControlButton, { variant: 'next', onPress: onNextPress }),
            React.createElement(ControlToggleButton, { variant: 'repeat', active: isEnableRepeat, onPress: onRepeatPress }))));
});
AudioControls.displayName = 'AudioControls';
export { AudioControls };
//# sourceMappingURL=index.js.map