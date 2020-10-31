import React, { useMemo } from 'react';

export function useNavigationBarChildren(children: Array<JSX.Element> | JSX.Element | undefined) {
    return useMemo(() => {
        let leftChild: JSX.Element | null = null;
        let centerChild: JSX.Element | null = null;
        let rightChild: JSX.Element | null = null;

        React.Children.forEach(children, (child) => {
            if (child?.type.name === 'NavigationBarLeftView') {
                leftChild = child;
            } else if (child?.type.name === 'NavigationBarCenterView') {
                centerChild = child;
            } else {
                rightChild = child !== undefined ? child : null;
            }
        });
        return [leftChild, centerChild, rightChild];
    }, [children]);
}
