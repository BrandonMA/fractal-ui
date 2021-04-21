var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useCallback, useState, useLayoutEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useCallbackRef } from '../utils/useCallbackRef';
import { getPercentage, roundValueToStep, clampValue, percentToValue, valueToPercent } from '../utils/slider';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { getSliderAccessibilityProps } from '../accessibility/getSliderAccessibilityProps';
import { getSliderInputAccessibilityProps } from '../accessibility/getSliderInputAccessibilityProps';
import { useControllableState } from '../utils/useControllableState';
import { useUpdateEffect } from '../utils/useUpdateEffect';
var StyledRange = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    border-radius: 2px;\n    height: 4px;\n    margin: 8px 0px;\n    ", ";\n"], ["\n    position: relative;\n    border-radius: 2px;\n    height: 4px;\n    margin: 8px 0px;\n    ", ";\n"])), extractBackgroundProps);
var StyledThumb = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    position: relative;\n    top: -8px;\n    background: white;\n    cursor: pointer;\n    ", ";\n    &:focus {\n        outline: none;\n        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);\n    }\n"], ["\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    position: relative;\n    top: -8px;\n    background: white;\n    cursor: pointer;\n    ", ";\n    &:focus {\n        outline: none;\n        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);\n    }\n"])), extractShadowProps);
var StyledRangeProgress = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border-radius: 2px;\n    position: absolute;\n    height: 100%;\n    ", "\n"], ["\n    border-radius: 2px;\n    position: absolute;\n    height: 100%;\n    ", "\n"])), extractBackgroundProps);
export function BaseSlider(_a) {
    var valueProp = _a.value, _b = _a.defaultValue, defaultValue = _b === void 0 ? 0 : _b, _c = _a.minimumValue, minimumValue = _c === void 0 ? 0 : _c, _d = _a.maximumValue, maximumValue = _d === void 0 ? 1 : _d, onValueChange = _a.onValueChange, onSlidingStart = _a.onSlidingStart, onSlidingComplete = _a.onSlidingComplete, _e = _a.step, step = _e === void 0 ? 0.001 : _e, name = _a.name;
    var _f = useControllableState({
        value: valueProp,
        defaultValue: defaultValue,
        onChange: onValueChange
    }), computedValue = _f[0], setValue = _f[1];
    var _g = useState(false), isDragging = _g[0], setDragging = _g[1];
    var _h = useState(), eventSource = _h[0], setEventSource = _h[1];
    var _j = useTheme(), colors = _j.colors, shadows = _j.shadows;
    var sliderRef = useRef(null);
    var thumbRef = useRef(null);
    var diffRef = useRef(null);
    var value = clampValue(computedValue, minimumValue, maximumValue);
    var trackPercent = valueToPercent(value, minimumValue, maximumValue);
    var thumbStyle = {
        left: "calc(" + trackPercent + "% - 10px)"
    };
    var rangeProgressStyle = {
        width: trackPercent + "%"
    };
    var getValueFromPointer = useCallbackRef(function (event) {
        var _a, _b;
        if (!thumbRef.current)
            return undefined;
        var clientX = ((_b = (_a = event.touches) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : event).clientX;
        var newX = clientX - diffRef.current - sliderRef.current.getBoundingClientRect().left;
        var end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
        var start = 0;
        if (newX < start) {
            newX = 0;
        }
        if (newX > end) {
            newX = end;
        }
        var percent = getPercentage(newX, start, end);
        var nextValue = percentToValue(percent, minimumValue, maximumValue);
        if (step)
            nextValue = parseFloat(roundValueToStep(nextValue, minimumValue, step));
        nextValue = clampValue(nextValue, minimumValue, maximumValue);
        return nextValue;
    });
    var tenSteps = (maximumValue - minimumValue) / 10;
    var oneStep = step;
    var constrain = useCallback(function (value) {
        value = parseFloat(roundValueToStep(value, minimumValue, oneStep));
        value = clampValue(value, minimumValue, maximumValue);
        setValue(value);
    }, [minimumValue, oneStep, maximumValue, setValue]);
    var actions = useMemo(function () { return ({
        stepUp: function (step) {
            if (step === void 0) { step = oneStep; }
            var next = value + step;
            constrain(next);
        },
        stepDown: function (step) {
            if (step === void 0) { step = oneStep; }
            var next = value - step;
            constrain(next);
        },
        reset: function () { return constrain(defaultValue); }
    }); }, [constrain, value, oneStep, defaultValue]);
    var handleSlidingStart = useCallbackRef(function () {
        onSlidingStart === null || onSlidingStart === void 0 ? void 0 : onSlidingStart(value);
    });
    var onKeyDown = useCallback(function (event) {
        var key = event.key;
        var keyMap = {
            ArrowRight: function () { return actions.stepUp(); },
            ArrowUp: function () { return actions.stepUp(); },
            ArrowLeft: function () { return actions.stepDown(); },
            ArrowDown: function () { return actions.stepDown(); },
            PageUp: function () { return actions.stepUp(tenSteps); },
            PageDown: function () { return actions.stepDown(tenSteps); },
            Home: function () { return constrain(minimumValue); },
            End: function () { return constrain(maximumValue); }
        };
        var action = keyMap[key];
        if (action) {
            event.preventDefault();
            event.stopPropagation();
            setEventSource('keyboard');
            handleSlidingStart();
            action(event);
        }
    }, [actions, constrain, handleSlidingStart, maximumValue, minimumValue, tenSteps]);
    var handleMoveStart = useCallback(function (event) {
        var _a, _b;
        if (thumbRef.current) {
            var clientX = ((_b = (_a = event.touches) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : event).clientX;
            diffRef.current = clientX - thumbRef.current.getBoundingClientRect().left;
            setDragging(true);
            handleSlidingStart();
        }
    }, [handleSlidingStart]);
    var handleMove = useCallback(function (event) {
        var newValue = getValueFromPointer(event);
        if (newValue != null)
            setValue(newValue);
    }, [getValueFromPointer, setValue]);
    var handleMouseMove = useCallback(function (event) {
        setEventSource('mouse');
        handleMove(event);
    }, [handleMove]);
    var handleCleanMouseUp = useCallback(function () {
        document.removeEventListener('mouseup', handleCleanMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
        setDragging(false);
    }, [handleMouseMove]);
    var handleMouseDown = useCallback(function (event) {
        handleMoveStart(event);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleCleanMouseUp);
    }, [handleMoveStart, handleMouseMove, handleCleanMouseUp]);
    var handleTouchMove = useCallback(function (event) {
        setEventSource('touch');
        handleMove(event);
    }, [handleMove]);
    var handleCleanTouchStart = useCallback(function () {
        sliderRef.current.removeEventListener('touchmove', handleTouchMove);
        setDragging(false);
    }, [handleTouchMove]);
    var handleTouchStart = useCallback(function (event) {
        event.preventDefault();
        handleMoveStart(event);
        sliderRef.current.addEventListener('touchmove', handleTouchMove);
        sliderRef.current.addEventListener('touchend', handleCleanTouchStart);
        sliderRef.current.addEventListener('touchcancel', handleCleanTouchStart);
    }, [handleCleanTouchStart, handleMoveStart, handleTouchMove]);
    useLayoutEffect(function () {
        var env = sliderRef.current;
        env.addEventListener('touchstart', handleTouchStart, { passive: false });
        return function () {
            env.removeEventListener('touchstart', handleTouchStart, { passive: false });
            env.removeEventListener('touchend', handleCleanTouchStart);
            env.removeEventListener('touchcancel', handleCleanTouchStart);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useUpdateEffect(function () {
        var shouldUpdate = !isDragging && eventSource != 'keyboard' && eventSource != null;
        if (shouldUpdate) {
            onSlidingComplete === null || onSlidingComplete === void 0 ? void 0 : onSlidingComplete(value);
            setEventSource(undefined);
        }
        if (eventSource === 'keyboard') {
            onSlidingComplete === null || onSlidingComplete === void 0 ? void 0 : onSlidingComplete(value);
            setEventSource(undefined);
        }
    }, [isDragging, eventSource, onSlidingComplete]);
    return (React.createElement(StyledRange, { ref: sliderRef, backgroundColor: colors.placeholder },
        React.createElement(StyledRangeProgress, { style: rangeProgressStyle, backgroundColor: colors.mainInteractiveColor }),
        React.createElement(StyledThumb, __assign({ ref: thumbRef, onMouseDown: function (e) { return handleMouseDown(e.nativeEvent); }, onKeyDown: onKeyDown, style: thumbStyle, boxShadow: shadows.thumbShadow }, getSliderAccessibilityProps())),
        React.createElement("input", __assign({ name: name, type: 'hidden', value: value }, getSliderInputAccessibilityProps(value, isDragging, minimumValue, maximumValue)))));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map