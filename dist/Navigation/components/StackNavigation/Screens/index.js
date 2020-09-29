import React, { useMemo } from 'react';
import { View } from 'react-native';
export function ScreenStack(props) {
    var allChildren = props.children;
    var children = useMemo(function () {
        var lastIndex = React.Children.count(allChildren) - 1;
        return React.Children.map(allChildren, function (child, index) {
            var domNode = React.cloneElement(child, {
                style: {
                    opacity: index !== lastIndex ? 0 : 1
                }
            });
            return domNode;
        });
    }, [allChildren]);
    return <View>{children}</View>;
}
//# sourceMappingURL=index.js.map