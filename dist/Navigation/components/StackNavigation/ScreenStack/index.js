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
import React, { useMemo } from 'react';
import { View } from 'react-native';
export function ScreenStack(props) {
    var children = props.children, others = __rest(props, ["children"]);
    var childrenSize = React.Children.count(children);
    var finalChildren = useMemo(function () {
        var lastIndex = childrenSize - 1;
        return React.Children.map(children, function (child, index) {
            var domNode = React.cloneElement(child, {
                visibleOnStack: index === lastIndex,
                initialScreen: index === 0
            });
            return domNode;
        });
    }, [children, childrenSize]);
    return <View {...others}>{finalChildren}</View>;
}
//# sourceMappingURL=index.js.map