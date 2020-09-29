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
import React, { useCallback } from 'react';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute } from '../NavigationRoute';
export function StackScreen(props) {
    var history = useHistory();
    var handleGoBack = useCallback(function () {
        history.goBack();
    }, [history]);
    return React.createElement(NavigationRoute, __assign({}, props, { onDismissed: handleGoBack }));
}
//# sourceMappingURL=StackScreen.js.map