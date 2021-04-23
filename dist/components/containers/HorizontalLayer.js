import React, { forwardRef } from 'react';
import { Layer } from './Layer';
export const HorizontalLayer = forwardRef((props, ref) => {
    return React.createElement(Layer, Object.assign({ ref: ref, flexDirection: 'row' }, props));
});
//# sourceMappingURL=HorizontalLayer.js.map