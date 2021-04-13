import React, { useCallback, useState, useLayoutEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { BaseSliderProps, EventSource } from '../types';
import { useCallbackRef } from '../utils/useCallbackRef';
import { getPercentage, roundValueToStep, clampValue, percentToValue, valueToPercent } from '../utils/slider';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { getSliderAccessibilityProps } from '../accessibility/getSliderAccessibilityProps';
import { getSliderInputAccessibilityProps } from '../accessibility/getSliderInputAccessibilityProps';
import { useControllableState } from '../utils/useControllableState';
import { useUpdateEffect } from '../utils/useUpdateEffect';

const StyledRange = styled.div`
    position: relative;
    border-radius: 2px;
    height: 4px;
    margin: 8px 0px;
    ${extractBackgroundProps};
`;

const StyledThumb = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    position: relative;
    top: -8px;
    background: white;
    cursor: pointer;
    ${extractShadowProps};
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
    }
`;

const StyledRangeProgress = styled.div`
    border-radius: 2px;
    position: absolute;
    height: 100%;
    ${extractBackgroundProps}
`;

export function BaseSlider({
    value: valueProp,
    defaultValue = 0,
    minimumValue = 0,
    maximumValue = 1,
    onValueChange,
    onSlidingStart,
    onSlidingComplete,
    step = 0.001,
    name
}: BaseSliderProps): JSX.Element {
    const [computedValue, setValue] = useControllableState({
        value: valueProp,
        defaultValue,
        onChange: onValueChange
    });
    const [isDragging, setDragging] = useState(false);
    const [eventSource, setEventSource] = useState<EventSource>();
    const { colors, shadows } = useTheme();

    const sliderRef = useRef<any>(null);
    const rangeProgressRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const diffRef = useRef<any>(null);

    const value = clampValue(computedValue, minimumValue, maximumValue);

    const trackPercent = valueToPercent(value, minimumValue, maximumValue);

    const thumbStyle: React.CSSProperties = {
        left: `calc(${trackPercent}% - 10px)`
    };

    const rangeProgressStyle: React.CSSProperties = {
        width: `${trackPercent}%`
    };

    const getValueFromPointer = useCallbackRef((event): number | undefined => {
        if (!thumbRef.current) return undefined;
        const { clientX } = event.touches?.[0] ?? event;
        let newX = clientX - diffRef.current - sliderRef.current.getBoundingClientRect().left;
        const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;

        const start = 0;

        if (newX < start) {
            newX = 0;
        }

        if (newX > end) {
            newX = end;
        }
        const percent = getPercentage(newX, start, end);
        let nextValue = percentToValue(percent, minimumValue, maximumValue);
        if (step) nextValue = parseFloat(roundValueToStep(nextValue, minimumValue, step) as string);
        nextValue = clampValue(nextValue, minimumValue, maximumValue);
        return nextValue;
    });

    const tenSteps = (maximumValue - minimumValue) / 10;
    const oneStep = step;

    const constrain = useCallback(
        (value: number) => {
            value = parseFloat(roundValueToStep(value, minimumValue, oneStep) as string);
            value = clampValue(value, minimumValue, maximumValue);
            setValue(value);
        },
        [minimumValue, oneStep, maximumValue, setValue]
    );

    const actions = useMemo(
        () => ({
            stepUp: (step = oneStep) => {
                const next = value + step;
                constrain(next);
            },
            stepDown: (step = oneStep) => {
                const next = value - step;
                constrain(next);
            },
            reset: () => constrain(defaultValue)
        }),
        [constrain, value, oneStep, defaultValue]
    );

    const handleSlidingStart = useCallbackRef(() => {
        onSlidingStart?.(value);
    });

    const onKeyDown = useCallback(
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
        [actions, constrain, handleSlidingStart, maximumValue, minimumValue, tenSteps]
    );

    const handleMoveStart = useCallback(
        (event) => {
            if (thumbRef.current) {
                const { clientX } = event.touches?.[0] ?? event;
                diffRef.current = clientX - thumbRef.current.getBoundingClientRect().left;

                setDragging(true);
                handleSlidingStart();
            }
        },
        [handleSlidingStart]
    );

    const handleMove = useCallback(
        (event) => {
            const newValue = getValueFromPointer(event);
            if (newValue != null) setValue(newValue);
        },
        [getValueFromPointer, setValue]
    );

    const handleMouseMove = useCallback(
        (event) => {
            setEventSource('mouse');
            handleMove(event);
        },
        [handleMove]
    );

    const handleCleanMouseUp = useCallback(() => {
        document.removeEventListener('mouseup', handleCleanMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
        setDragging(false);
    }, [handleMouseMove]);

    const handleMouseDown = useCallback(
        (event: MouseEvent) => {
            handleMoveStart(event);
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleCleanMouseUp);
        },
        [handleMoveStart, handleMouseMove, handleCleanMouseUp]
    );

    const handleTouchMove = useCallback(
        (event: TouchEvent) => {
            setEventSource('touch');
            handleMove(event);
        },
        [handleMove]
    );

    const handleCleanTouchStart = useCallback(() => {
        sliderRef.current.removeEventListener('touchmove', handleTouchMove);
        setDragging(false);
    }, [handleTouchMove]);

    const handleTouchStart = useCallback(
        (event: TouchEvent) => {
            event.preventDefault();
            handleMoveStart(event);

            sliderRef.current.addEventListener('touchmove', handleTouchMove);
            sliderRef.current.addEventListener('touchend', handleCleanTouchStart);
            sliderRef.current.addEventListener('touchcancel', handleCleanTouchStart);
        },
        [handleCleanTouchStart, handleMoveStart, handleTouchMove]
    );

    useLayoutEffect(() => {
        const env = sliderRef.current;
        env.addEventListener('touchstart', handleTouchStart, { passive: false });
        return () => {
            env.removeEventListener('touchstart', handleTouchStart, { passive: false });
            env.removeEventListener('touchend', handleCleanTouchStart);
            env.removeEventListener('touchcancel', handleCleanTouchStart);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useUpdateEffect(() => {
        const shouldUpdate = !isDragging && eventSource != 'keyboard' && eventSource != null;

        if (shouldUpdate) {
            onSlidingComplete?.(value);
            setEventSource(undefined);
        }
        if (eventSource === 'keyboard') {
            onSlidingComplete?.(value);
            setEventSource(undefined);
        }
    }, [isDragging, eventSource, onSlidingComplete]);

    return (
        <StyledRange ref={sliderRef} backgroundColor={colors.placeholder}>
            <StyledRangeProgress ref={rangeProgressRef} style={rangeProgressStyle} backgroundColor={colors.mainInteractiveColor} />
            <StyledThumb
                ref={thumbRef}
                onMouseDown={(e) => handleMouseDown(e.nativeEvent)}
                onKeyDown={onKeyDown}
                style={thumbStyle}
                boxShadow={shadows.thumbShadow}
                {...getSliderAccessibilityProps()}
            />
            <input
                name={name}
                type='hidden'
                value={value}
                {...getSliderInputAccessibilityProps(value, isDragging, minimumValue, maximumValue)}
            />
        </StyledRange>
    );
}
