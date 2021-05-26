var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from 'react';
import { Layer } from '../containers/Layer';
import { Text } from '../text';
import { Slider } from '../Slider';
import { formatNumberToTime } from './utils/formatNumberToTime';
export function AudioProgressBar({ duration, currentTime, isPlaying, onTimeUpdate }) {
    const [trackProgress, setTrackProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const handleSlidingStart = () => setIsDragging(true);
    const handleValueChange = (positionMillis) => setTrackProgress(positionMillis);
    const handleSlidingComplete = (time) => __awaiter(this, void 0, void 0, function* () {
        yield onTimeUpdate(time);
        setIsDragging(false);
    });
    useEffect(() => {
        if (isPlaying && !isDragging) {
            setTrackProgress(currentTime);
        }
    }, [currentTime, isDragging, isPlaying, trackProgress]);
    return (React.createElement(Layer, null,
        React.createElement(Slider, { value: trackProgress, minimumValue: 0, step: 1, maximumValue: duration, onSlidingStart: handleSlidingStart, onValueChange: handleValueChange, onSlidingComplete: handleSlidingComplete }),
        React.createElement(Layer, { flexDirection: 'row', justifyContent: 'space-between' },
            React.createElement(Text, { variant: 'smallLabel', fontSize: 12 }, `${formatNumberToTime(trackProgress)}`),
            React.createElement(Text, { variant: 'smallLabel', fontSize: 12 }, `${formatNumberToTime(duration)}`))));
}
//# sourceMappingURL=AudioProgressBar.js.map