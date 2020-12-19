import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import { TabBarProps } from './types';
import { useHideTabBarAnimation } from './hooks/useHideTabBarAnimation';
import { getTabBarComponent } from './util/getTabBarComponent';
import { useSetRecoilState } from 'recoil';
import { tabBarInsetsAtom } from '../../../recoil/atoms/tabBarInsetsAtom';
import { createTabBarInsetsDependingOnPosition } from './util/createTabBarInsetsDependingOnPosition';
import { tabBarPositionAtom } from '../../../recoil/atoms/tabBarPositionAtom';

export function TabBar(props: TabBarProps): JSX.Element {
    const { style, tabBarHidden, tabBarVariant, tabBarPosition, ...others } = props;
    const TabBar = getTabBarComponent(tabBarVariant);
    const [animatedValue, animateHiddenChange] = useHideTabBarAnimation();
    const setTabBarInsets = useSetRecoilState(tabBarInsetsAtom);
    const setTabBarPosition = useSetRecoilState(tabBarPositionAtom);

    useLayoutEffect(() => {
        setTabBarInsets(createTabBarInsetsDependingOnPosition(tabBarPosition));
        setTabBarPosition(tabBarPosition);
    }, [tabBarPosition, setTabBarInsets, setTabBarPosition]);

    useEffect(() => {
        animateHiddenChange(tabBarHidden ?? false);
    }, [tabBarHidden, animateHiddenChange]);

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

    return (
        <TabBar
            {...others}
            tabBarHidden={tabBarHidden}
            tabBarPosition={tabBarPosition}
            tabBarVariant={tabBarVariant}
            style={animatedStyle}
        />
    );
}
