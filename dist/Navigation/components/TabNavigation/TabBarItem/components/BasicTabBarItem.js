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
import React, { memo, useMemo } from 'react';
import { sharedTabBarItemStyles } from './SharedTabBarItemStyles';
import { getValueForLargeSize } from '../../../../../SizeGroup/util';
import { Dimensions, Pressable } from 'react-native';
import { useRecoilValue } from 'recoil';
import { tabBarPositionAtom } from '../../../../recoil/atoms/tabBarPositionAtom';
export var BasicTabBarItem = memo(function (props) {
    var widthSizeGroup = props.widthSizeGroup, highlightColor = props.highlightColor;
    var tabBarPosition = useRecoilValue(tabBarPositionAtom);
    var ripple = useMemo(function () {
        return {
            color: highlightColor,
            borderless: true,
            radius: Dimensions.get('window').width / 10
        };
    }, [highlightColor]);
    var style = useMemo(function () {
        return __assign(__assign({}, sharedTabBarItemStyles), { flexGrow: 1, flexDirection: tabBarPosition !== 'bottom' ? 'column' : getValueForLargeSize(widthSizeGroup[0], 'row', 'column') });
    }, [widthSizeGroup]);
    return React.createElement(Pressable, __assign({}, props, { style: style, android_ripple: ripple }));
});
//# sourceMappingURL=BasicTabBarItem.js.map