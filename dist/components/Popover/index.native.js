var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Layer } from '../containers';
import { styleVariants } from './styleVariants';
export function Popover(props) {
    const { active, popoverChildren, popoverContainerProps } = props, others = __rest(props, ["active", "popoverChildren", "popoverContainerProps"]);
    const [mainViewLayout, setMainViewLayout] = useState({ x: 0, y: 0, height: 0, width: 0 });
    const yValueWithOffset = mainViewLayout.y + mainViewLayout.height;
    const [layerVariant, setLayerVariant] = useState('initial');
    const styles = useMemo(() => {
        return {
            left: mainViewLayout.x,
            top: yValueWithOffset,
            width: mainViewLayout.width,
            zIndex: 2000
        };
    }, [yValueWithOffset, mainViewLayout]);
    const onLayout = useCallback((nativeElement) => {
        setMainViewLayout(nativeElement.nativeEvent.layout);
    }, [setMainViewLayout]);
    useEffect(() => {
        if (active) {
            setLayerVariant('visible');
        }
        else {
            setLayerVariant('initial');
        }
    }, [active]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Layer, Object.assign({}, others, { onLayout: onLayout })),
        React.createElement(Layer, Object.assign({ initial: 'initial', animate: layerVariant, variants: styleVariants, position: 'absolute', style: styles }, popoverContainerProps), popoverChildren(mainViewLayout))));
}
//# sourceMappingURL=index.native.js.map