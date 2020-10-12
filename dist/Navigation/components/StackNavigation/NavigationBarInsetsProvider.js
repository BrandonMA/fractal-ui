import React, { useState } from 'react';
export var NavigationBarInsetsContext = React.createContext({
    setInsets: function () {
        return;
    },
    insets: { top: 0, right: 0, bottom: 0, left: 0 }
});
export function NavigationBarInsetsProvider(props) {
    var _a = useState({ top: 0, right: 0, bottom: 0, left: 0 }), insets = _a[0], setInsets = _a[1];
    return (React.createElement(NavigationBarInsetsContext.Provider, { value: {
            insets: insets,
            setInsets: setInsets
        } }, props.children));
}
//# sourceMappingURL=NavigationBarInsetsProvider.js.map