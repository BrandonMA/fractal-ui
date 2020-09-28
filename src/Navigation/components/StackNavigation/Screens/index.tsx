import React, { useMemo } from 'react';
import { View } from 'react-native';
import { ScreenStackProps as Props } from 'react-native-screens';

export interface ScreenStackProps extends Props {
    children: JSX.Element;
}

export function ScreenStack(props: ScreenStackProps): JSX.Element {
    const allChildren = props.children;
    const children = useMemo(() => {
        const lastIndex = React.Children.count(allChildren) - 1;
        return React.Children.map(allChildren, (child, index) => {
            const domNode = React.cloneElement(child, {
                style: {
                    opacity: index !== lastIndex ? 0 : 1
                }
            });
            return domNode;
        });
    }, [allChildren]);
    return <View>{children}</View>;
}
