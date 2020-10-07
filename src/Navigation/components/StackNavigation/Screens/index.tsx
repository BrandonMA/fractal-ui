import React, { useMemo } from 'react';
import { View } from 'react-native';
import { ScreenStackProps as Props } from 'react-native-screens';

export interface ScreenStackProps extends Props {
    children: JSX.Element | Array<JSX.Element>;
}

export function ScreenStack(props: ScreenStackProps): JSX.Element {
    const allChildren = props.children;
    const childrenSize = React.Children.count(allChildren);

    const children = useMemo(() => {
        const lastIndex = childrenSize - 1;
        return React.Children.map(allChildren, (child, index) => {
            const domNode = React.cloneElement(child, {
                visibleOnStack: index === lastIndex,
                initialScreen: index === 0
            });
            return domNode;
        });
    }, [allChildren, childrenSize]);

    return <View>{children}</View>;
}
