import React, { useMemo } from 'react';
import { View } from 'react-native';
import { ScreenStackProps as Props } from 'react-native-screens';

export interface ScreenStackProps extends Props {
    children: Array<JSX.Element> | JSX.Element;
}

export function ScreenStack(props: ScreenStackProps): JSX.Element {
    const { children, ...others } = props;
    const childrenSize = React.Children.count(children);

    const finalChildren = useMemo(() => {
        const lastIndex = childrenSize - 1;
        return React.Children.map(children, (child, index) => {
            const domNode = React.cloneElement(child, {
                visibleOnStack: index === lastIndex,
                initialScreen: index === 0
            });
            return domNode;
        });
    }, [children, childrenSize]);

    return <View {...others}>{finalChildren}</View>;
}
