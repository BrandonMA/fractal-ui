import React, { useState } from 'react';
export var TabBarInsetsContext = React.createContext({
    setInsets: function () {
        return;
    },
    insets: { top: 0, right: 0, bottom: 0, left: 0 }
});
export function TabBarInsetsProvider(props) {
    var _a = useState({ top: 0, right: 0, bottom: 0, left: 0 }), insets = _a[0], setInsets = _a[1];
    return (React.createElement(TabBarInsetsContext.Provider, { value: {
            insets: insets,
            setInsets: setInsets
        } }, props.children));
}
//# sourceMappingURL=TabBarInsetsProvider.js.map