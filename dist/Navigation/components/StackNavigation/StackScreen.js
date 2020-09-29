import React, { useCallback } from 'react';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute } from '../NavigationRoute';
export function StackScreen(props) {
    var history = useHistory();
    var handleGoBack = useCallback(function () {
        history.goBack();
    }, [history]);
    return <NavigationRoute {...props} onDismissed={handleGoBack}/>;
}
//# sourceMappingURL=StackScreen.js.map