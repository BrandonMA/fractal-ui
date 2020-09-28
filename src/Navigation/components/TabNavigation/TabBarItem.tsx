import React, { useCallback, ReactElement, useState, useEffect } from 'react';
import { PressableProps, Text } from 'react-native';
import { useHistory, useLocation } from '../../../ReactRouter';
import { useMatch } from '../../hooks/useMatch';
import { TabBarItemVariant } from './types/TabBarItemVariant';
import { getColorByActiveState } from './util/getColorByActiveState';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';

export interface TabBarItemProps extends PressableProps {
    path?: string;
    activeColor?: string;
    inactiveColor?: string;
    title: string;
    variant?: TabBarItemVariant;
    children: (color: string, size: number) => JSX.Element;
}

export function TabBarItem(props: TabBarItemProps): ReactElement<TabBarItemProps> {
    const { path, activeColor, inactiveColor, variant, title, children, ...others } = props;
    const [tabPathname, setTabPathname] = useState<undefined | string>(undefined);
    const location = useLocation();
    const history = useHistory();
    const [active] = useMatch(path);
    const color = getColorByActiveState(active, activeColor, inactiveColor, variant);
    const Container = getTabBarItemComponent(variant);
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
        <Container {...others} onPress={goToTab} bg={activeColor}>
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
        </Container>
    );
}
