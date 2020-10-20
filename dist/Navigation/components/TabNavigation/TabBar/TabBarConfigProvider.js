import React, { useState } from 'react';
import { createTabBarConfig } from './types';
export var TabBarConfigContext = React.createContext({
    setConfig: function () {
        return;
    },
    config: createTabBarConfig()
});
export function TabBarConfigProvider(props) {
    var _a = useState(props.config), config = _a[0], setConfig = _a[1];
    return (React.createElement(TabBarConfigContext.Provider, { value: {
            config: config,
            setConfig: setConfig
        } }, props.children));
}
//# sourceMappingURL=TabBarConfigProvider.js.map