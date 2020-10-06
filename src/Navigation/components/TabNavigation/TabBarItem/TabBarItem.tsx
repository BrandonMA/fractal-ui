import React, { useCallback, ReactElement, useState, useEffect } from 'react';
import { PressableProps, Text } from 'react-native';
import { useHistory, useLocation } from '../../../../ReactRouter';
import { useMatch } from '../../../hooks/useMatch';
import { TabBarItemVariant } from './TabBarItemVariant';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';
import { LayoutProps } from '../../../../Layout/types/LayoutProps';
import { getTabBarItemColorForState } from './util/getTabBarItemColorForState';

export interface TabBarItemProps extends PressableProps, LayoutProps {
    path?: string;
    activeColor?: string;
    inactiveColor?: string;
    title: string;
    variant?: TabBarItemVariant;
    children: (color: string, size: number) => JSX.Element;
}

export function TabBarItem(props: TabBarItemProps): ReactElement<TabBarItemProps> {
    const { path, activeColor, inactiveColor, variant, tabBarPosition, title, children, ...others } = props;
    const [tabPathname, setTabPathname] = useState<undefined | string>(undefined);
    const location = useLocation();
    const history = useHistory();
    const [active] = useMatch(path);
    const color = getTabBarItemColorForState(active, activeColor, inactiveColor, variant);
    const TabBarItemContainer = getTabBarItemComponent(variant);
    const iconSize = getTabIconSize(variant);

    const goToTab = useCallback(() => {
        if (path != null) {
            if (tabPathname === location.pathname) {
                history.replace(path);
            } else {
                history.replace(tabPathname == null ? path : tabPathname);
            }
        }
    }, [path, history, tabPathname, location]);

    useEffect(() => {
        if (path != null && location.pathname.includes(path) && active) {
            setTabPathname(location.pathname);
        }
    }, [path, active, location]);

    return (
        <TabBarItemContainer {...others} onPress={goToTab} bg={activeColor} tabBarPosition={tabBarPosition}>
            {children(color, iconSize)}
            {variant === 'circular' ? null : (
                <Text
                    style={{
                        color
                    }}
                >
                    {title}
                </Text>
            )}
        </TabBarItemContainer>
    );
}
