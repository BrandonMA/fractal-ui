import React, { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import { SliderProps } from './types';
import { useEventCallback } from './utils/useEventCallback';
import { getWidth, getPercentage, getLeft, getValue, roundValueToStep, getThumbProps } from './utils/slider';
import { useTheme } from '../../core';
import { extractBackgroundProps } from '../../sharedProps/BackgroundProps';
import { extractShadowProps } from '../../sharedProps/ShadowProps';

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
    ${extractShadowProps}
    cursor: pointer;
`;

const StyledRangeProgress = styled.div`
    border-radius: 2px;
    position: absolute;
    height: 100%;
    ${extractBackgroundProps};
`;

export function Slider({
    initialValue = 0,
    minimumValue = 0,
    maximumValue = 1,
    onValueChange,
    onSlidingStart,
    onSlidingComplete,
    step = 1
}: SliderProps): JSX.Element {
    const [value, setValue] = useState(initialValue);
    const [isDragging, setDragging] = useState(true);
    const { colors, shadows } = useTheme();

    const sliderRef = React.useRef<any>(null);
    const rangeProgressRef = React.useRef<any>(null);
    const thumbRef = React.useRef<any>(null);
    const diffRef = React.useRef<any>(null);

    const initialPercentage = getPercentage(value, minimumValue, maximumValue);

    const handleUpdate = React.useCallback((percentage) => {
        thumbRef.current.style.left = getLeft(percentage);
        rangeProgressRef.current.style.width = getWidth(percentage);
    }, []);

    const getPercentageFromPointer = useCallback((event): number => {
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
        const newPercentage = getPercentage(newX, start, end);
        return newPercentage;
    }, []);

    const handleSlidingStart = useEventCallback(() => {
        onSlidingStart?.(value);
    }, [value]);

    const handleMove = useCallback(
        (event) => {
            const newPercentage = getPercentageFromPointer(event);
            const newValue = parseFloat(
                roundValueToStep(getValue(newPercentage, minimumValue, maximumValue), minimumValue, step) as string
            );
            handleUpdate(newPercentage);
            onValueChange?.(newValue);
            setValue(newValue);
        },
        [getPercentageFromPointer, handleUpdate, maximumValue, minimumValue, onValueChange, step]
    );

    const handleMouseMove = useCallback(
        (event) => {
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
            diffRef.current = event.clientX - thumbRef.current.getBoundingClientRect().left;

            setDragging(true);
            handleSlidingStart();

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleCleanMouseUp);
        },
        [handleSlidingStart, handleMouseMove, handleCleanMouseUp]
    );

    const handleTouchMove = useCallback(
        (event: TouchEvent) => {
            handleMove(event);
        },
        [handleMove]
    );

    const handleTouchStart = useCallback(
        (event: TouchEvent) => {
            event.preventDefault();
            const { clientX } = event.touches?.[0];
            diffRef.current = clientX - thumbRef.current?.getBoundingClientRect().left;
            setDragging(true);
            handleSlidingStart();

            const handleCleanTouchStart = () => {
                sliderRef.current.removeEventListener('touchmove', handleTouchMove);
                setDragging(false);
            };

            sliderRef.current.addEventListener('touchmove', handleTouchMove);
            sliderRef.current.addEventListener('touchend', handleCleanTouchStart);
            sliderRef.current.addEventListener('touchcancel', handleCleanTouchStart);
        },
        [handleSlidingStart, handleTouchMove]
    );

    useLayoutEffect(() => {
        handleUpdate(initialPercentage);
        const env = sliderRef.current;
        env.addEventListener('touchstart', handleTouchStart, { passive: false });
        return () => {
            env.removeEventListener('touchstart', handleTouchStart, { passive: false });
        };
    }, [handleTouchStart, handleUpdate, initialPercentage]);

    useEffect(() => {
        if (!isDragging) {
            onSlidingComplete?.(value);
        }
    }, [isDragging, onSlidingComplete, value]);

    return (
        <StyledRange ref={sliderRef} backgroundColor={colors.placeholder}>
            <StyledRangeProgress ref={rangeProgressRef} backgroundColor={colors.mainInteractiveColor} />
            <StyledThumb
                ref={thumbRef}
                onMouseDown={(e) => handleMouseDown(e.nativeEvent)}
                boxShadow={shadows.thumbShadow}
                {...getThumbProps(value, isDragging, minimumValue, maximumValue)}
            />
            <input type='hidden' value={value} />
        </StyledRange>
    );
}
