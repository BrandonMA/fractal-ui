import React, { createContext } from 'react';
export var DimmedModalContext = createContext(function () {
    return;
});
export function DimmedModalContextProvider(_a) {
    var children = _a.children, hideAnimated = _a.hideAnimated;
    return React.createElement(DimmedModalContext.Provider, { value: hideAnimated }, children);
}
//# sourceMappingURL=DimmedModalContextProvider.js.map