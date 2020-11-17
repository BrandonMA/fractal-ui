import React, { useEffect } from 'react';
import { TabBarProps } from './types';
import { useCurrentTabBarConfig } from '../TabBarConfigProvider/hooks';
import { useHideTabBarAnimation } from './hooks/useHideTabBarAnimation';
import { getTabBarComponent } from './util/getTabBarComponent';

export function TabBar(props: TabBarProps): JSX.Element {
    const { style, ...others } = props;
    const { tabBarConfig } = useCurrentTabBarConfig();
    const { tabBarHidden, tabBarVariant } = tabBarConfig;
    const TabBar = getTabBarComponent(tabBarVariant);
    const [animatedValue, animateHiddenChange] = useHideTabBarAnimation();

    useEffect(() => {
        animateHiddenChange(tabBarHidden ?? false);
    }, [tabBarHidden, animateHiddenChange]);

    return (
        <TabBar
            {...others}
            style={[
                style,
                {
                    transform: [
                        {
                            translateY: animatedValue
                        }
                    ]
                }
            ]}
        />
    );
}
