import React, { useCallback, useState, useLayoutEffect, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { BaseSliderProps, EventSource } from '../types';
import { useEventCallback } from '../utils/useEventCallback';
import {
    getWidth,
    getPercentage,
    getLeft,
    roundValueToStep,
    clampValue,
    percentToValue,
    valueToPercent
} from '../utils/slider';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { getSliderAccessibilityProps } from '../accessibility/getSliderAccessibilityProps';

const StyledRange = styled.div`
    position: relative;
    border-radius: 2px;
    height: 4px;
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
    ${extractBackgroundProps};
`;

export function BaseSlider({
    initialValue = 0,
    minimumValue = 0,
    maximumValue = 1,
    onValueChange,
    onSlidingStart,
    onSlidingComplete,
    step = 1,
    name
}: BaseSliderProps): JSX.Element {
    const [value, setValue] = useState(initialValue);
    const [isDragging, setDragging] = useState(true);
    const [eventSource, setEventSource] = useState<EventSource>();
    const { colors, shadows } = useTheme();

    const sliderRef = useRef<any>(null);
    const rangeProgressRef = useRef<any>(null);
    const thumbRef = useRef<any>(null);
    const diffRef = useRef<any>(null);

    const initialPercentage = getPercentage(value, minimumValue, maximumValue);

    const handleUpdate = useCallback((percentage) => {
        thumbRef.current.style.left = getLeft(percentage);
        rangeProgressRef.current.style.width = getWidth(percentage);
    }, []);

    const getValueFromPointer = useCallback(
        (event): number => {
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
            nextValue = parseFloat(roundValueToStep(nextValue, minimumValue, step) as string);
            nextValue = clampValue(nextValue, minimumValue, maximumValue);
            return nextValue;
        },
        [maximumValue, minimumValue, step]
    );

    const tenSteps = (maximumValue - minimumValue) / 10;
    const oneStep = step;

    const constrain = useCallback(
        (value: number) => {
            value = parseFloat(roundValueToStep(value, minimumValue, oneStep) as string);
            value = clampValue(value, minimumValue, maximumValue);
            onValueChange?.(value);
            setValue(value);
        },
        [minimumValue, oneStep, maximumValue, onValueChange]
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
            reset: () => constrain(initialValue)
        }),
        [constrain, value, oneStep, initialValue]
    );

    const handleSlidingStart = useEventCallback(() => {
        onSlidingStart?.(value);
    }, [value]);

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
            const { clientX } = event.touches?.[0] ?? event;
            diffRef.current = clientX - thumbRef.current.getBoundingClientRect().left;

            setDragging(true);
            handleSlidingStart();
        },
        [handleSlidingStart]
    );

    const handleMove = useCallback(
        (event) => {
            const newValue = getValueFromPointer(event);
            onValueChange?.(newValue);
            setValue(newValue);
        },
        [getValueFromPointer, onValueChange]
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
        handleUpdate(initialPercentage);
        const env = sliderRef.current;
        env.addEventListener('touchstart', handleTouchStart, { passive: false });
        return () => {
            env.removeEventListener('touchstart', handleTouchStart, { passive: false });
            env.removeEventListener('touchend', handleCleanTouchStart);
            env.removeEventListener('touchcancel', handleCleanTouchStart);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const trackPercent = valueToPercent(value, minimumValue, maximumValue);
        handleUpdate(trackPercent);
        const shouldUpdate = !isDragging && eventSource !== 'keyboard';

        if (shouldUpdate) {
            onSlidingComplete?.(value);
        }
        if (eventSource === 'keyboard') {
            onSlidingComplete?.(value);
        }
    }, [eventSource, handleUpdate, isDragging, maximumValue, minimumValue, onSlidingComplete, value]);

    return (
        <StyledRange ref={sliderRef} backgroundColor={colors.placeholder}>
            <StyledRangeProgress ref={rangeProgressRef} backgroundColor={colors.mainInteractiveColor} />
            <StyledThumb
                ref={thumbRef}
                onMouseDown={(e) => handleMouseDown(e.nativeEvent)}
                onKeyDown={onKeyDown}
                boxShadow={shadows.thumbShadow}
                {...getSliderAccessibilityProps(value, isDragging, minimumValue, maximumValue)}
            />
            <input name={name} type='hidden' value={value} />
        </StyledRange>
    );
}
