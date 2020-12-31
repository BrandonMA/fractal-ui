import React, { createContext, useState } from 'react';
var defaultValue = [
    'light',
    function () {
        return;
    }
];
export var FractalThemeIdentifierContext = createContext(defaultValue);
export function FractalThemeIdentifierProvider(props) {
    var children = props.children;
    var handleState = useState('light');
    return React.createElement(FractalThemeIdentifierContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=FractalThemeIdentifierProvider.js.map