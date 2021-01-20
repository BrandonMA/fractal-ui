import React, { createContext } from 'react';
export var HideDimmedModalContext = createContext(function () {
    return;
});
export function HideDimmedModalProvider(_a) {
    var children = _a.children, hideAnimated = _a.hideAnimated;
    return React.createElement(HideDimmedModalContext.Provider, { value: hideAnimated }, children);
}
//# sourceMappingURL=HideDimmedModalProvider.js.map