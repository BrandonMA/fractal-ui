import React, { useLayoutEffect, useMemo } from 'react';
import { TabBarProps } from './types';
import { useHideTabBarAnimation } from './hooks/useHideTabBarAnimation';
import { getTabBarComponent } from './util/getTabBarComponent';
import { useSetRecoilState } from 'recoil';
import { tabBarInsetsAtom } from '../../../recoil/atoms/tabBarInsetsAtom';
import { createTabBarInsetsDependingOnPosition } from './util/createTabBarInsetsDependingOnPosition';
import { tabBarPositionAtom } from '../../../recoil/atoms/tabBarPositionAtom';

export function TabBar(props: TabBarProps): JSX.Element {
    const { style, tabBarVariant, tabBarPosition, ...others } = props;

    const TabBar = getTabBarComponent(tabBarVariant);
    const animatedValue = useHideTabBarAnimation();
    const setTabBarInsets = useSetRecoilState(tabBarInsetsAtom);
    const setTabBarPosition = useSetRecoilState(tabBarPositionAtom);

    // Allow the tabBarPosition to be passed as a prop as the value is probably never going to change on run time.
    // So, we use an useLayoutEffect hook to update the UI before the first render.
    // This could be handled with Context, but is easier to keep all global state on atoms for consistency.
    useLayoutEffect(() => {
        setTabBarInsets(createTabBarInsetsDependingOnPosition(tabBarPosition));
        setTabBarPosition(tabBarPosition);
    }, [tabBarPosition, setTabBarInsets, setTabBarPosition]);

    const animatedStyle = useMemo(() => {
        return [
            style,
            {
                transform: [
                    {
                        translateY: animatedValue
                    }
                ]
            }
        ];
    }, [style, animatedValue]);

    return <TabBar {...others} tabBarPosition={tabBarPosition} tabBarVariant={tabBarVariant} style={animatedStyle} />;
}
