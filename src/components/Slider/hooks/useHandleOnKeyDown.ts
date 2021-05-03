import React, { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { clamp, roundValueToStep } from '../utils/slider';
import { EventSource } from '../types';

export function useHandleOnKeyDown(
    maximumValue: number,
    minimumValue: number,
    step: number,
    setValue: (value: number) => void,
    clampedValue: number,
    defaultValue: number,
    setEventSource: Dispatch<SetStateAction<EventSource | undefined>>,
    handleSlidingStart: () => void
): (event: React.KeyboardEvent) => unknown {
    const tenSteps = (maximumValue - minimumValue) / 10;

    const constrain = useCallback(
        (value: number) => {
            value = parseFloat(roundValueToStep(value, minimumValue, step) as string);
            value = clamp(value, minimumValue, maximumValue);
            setValue(value);
        },
        [minimumValue, step, maximumValue, setValue]
    );

    const actions = useMemo(
        () => ({
            stepUp: (nextStep = step) => {
                const next = clampedValue + nextStep;
                constrain(next);
            },
            stepDown: (nextStep = step) => {
                const next = clampedValue - nextStep;
                constrain(next);
            },
            reset: () => constrain(defaultValue)
        }),
        [constrain, clampedValue, step, defaultValue]
    );

    return useCallback(
        (event: React.KeyboardEvent) => {
            const { key } = event;
            const keyMap = {
                ArrowRight: () => actions.stepUp(),
                ArrowUp: () => actions.stepUp(),
                ArrowLeft: () => actions.stepDown(),
                ArrowDown: () => actions.stepDown(),
                PageUp: () => actions.stepUp(tenSteps),
                PageDown: () => actions.stepDown(tenSteps),
                Home: () => constrain(minimumValue),
                End: () => constrain(maximumValue)
            };

            const action = keyMap[key];

            if (action) {
                event.preventDefault();
                event.stopPropagation();
                setEventSource('keyboard');
                handleSlidingStart();
                action(event);
            }
        },
        [actions, constrain, handleSlidingStart, maximumValue, minimumValue, tenSteps, setEventSource]
    );
}
