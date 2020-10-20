import React, { useState } from 'react';
var initialValue = Object.freeze({
    tabBarVariant: 'basic',
    tabBarPosition: 'bottom',
    itemActiveColor: '#1281FF',
    itemInactiveColor: '#999999',
    tabBarHidden: false
});
export var TabBarConfigContext = React.createContext({
    setConfig: function () {
        return;
    },
    config: initialValue
});
export function TabBarConfigProvider(props) {
    var _a;
    var _b = useState((_a = props.config) !== null && _a !== void 0 ? _a : initialValue), config = _b[0], setConfig = _b[1];
    return (React.createElement(TabBarConfigContext.Provider, { value: {
            config: config,
            setConfig: setConfig
        } }, props.children));
}
//# sourceMappingURL=TabBarConfigProvider.js.map