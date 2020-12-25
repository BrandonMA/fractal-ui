import React, { useLayoutEffect } from 'react';
import { TabBarProps } from './types';
import { useHideTabBarAnimation } from './hooks/useHideTabBarAnimation';
import { getTabBarComponent } from './util/getTabBarComponent';
import { useSetRecoilState } from 'recoil';
import { useTabBarInsetsForPosition } from './hooks/useTabBarInsetsForPosition';
import { tabBarPositionAtom } from '../../../recoil/atoms/tabBarPositionAtom';

export function TabBar(props: TabBarProps): JSX.Element {
    const { style, tabBarVariant, tabBarPosition, ...others } = props;

    const TabBar = getTabBarComponent(tabBarVariant);
    const animatedStyle = useHideTabBarAnimation(tabBarPosition, tabBarVariant, style);
    const setTabBarPosition = useSetRecoilState(tabBarPositionAtom);

    // Allow the tabBarPosition to be passed as a prop as the value is probably never going to change on run time.
    // So, we use an useLayoutEffect hook to update the UI before the first render.
    // This could be handled with Context, but is easier to keep all global state on atoms for consistency.
    useLayoutEffect(() => {
        setTabBarPosition(tabBarPosition);
    }, [tabBarPosition, setTabBarPosition]);

    useTabBarInsetsForPosition();

    return <TabBar {...others} tabBarPosition={tabBarPosition} tabBarVariant={tabBarVariant} style={animatedStyle} />;
}
