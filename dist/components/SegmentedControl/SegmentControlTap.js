import React, { useCallback } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { BaseSegmentedControlTab } from './BaseSegmentedControlTab';
export var SegmentedControlTab = function (_a) {
    var onSelect = _a.onSelect, value = _a.value, selected = _a.selected, tintColor = _a.tintColor, hideDivider = _a.hideDivider, _b = _a.textStyle, textStyle = _b === void 0 ? {} : _b, _c = _a.activeTextStyle, activeTextStyle = _c === void 0 ? {} : _c;
    var colors = useTheme().colors;
    var textColor = textStyle.color, fontSize = textStyle.fontSize, fontFamily = textStyle.fontFamily, fontWeight = textStyle.fontWeight, fontStyle = textStyle.fontStyle;
    var activeColor = activeTextStyle.color, activeFontSize = activeTextStyle.fontSize, activeFontFamily = activeTextStyle.fontFamily, activeFontWeight = activeTextStyle.fontWeight, activeFontStyle = activeTextStyle.fontStyle;
    var getColor = useCallback(function () {
        if (textColor) {
            return textColor;
        }
        if (tintColor) {
            return 'white';
        }
        return colors.text;
    }, [colors.text, textColor, tintColor]);
    var color = getColor();
    return (React.createElement(BaseSegmentedControlTab, { value: value, selected: selected, hideDivider: hideDivider, onSelect: onSelect, tintColor: tintColor, fontFamily: selected ? activeFontFamily : fontFamily, fontSize: selected ? activeFontSize : fontSize, color: selected ? activeColor || color : color, fontWeight: selected ? activeFontWeight || '700' : fontWeight, fontStyle: selected ? activeFontStyle : fontStyle }));
};
//# sourceMappingURL=SegmentControlTap.js.map