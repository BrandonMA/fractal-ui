import React, { useCallback, ReactElement, useState, useEffect } from 'react';
import { PressableProps } from 'react-native';
import { useHistory, useLocation } from '../../../../ReactRouter';
import { useMatch } from '../../../hooks/useMatch';
import { TabBarItemVariant } from './types/TabBarItemVariant';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';
import { getTabBarItemColorForState } from './util/getTabBarItemColorForState';
import { useTabBarConfig } from '../TabBar/hooks';
import styled from 'styled-components/native';

export interface TabBarItemProps extends PressableProps {
    path?: string;
    activeColor?: string;
    inactiveColor?: string;
    title: string;
    variant?: TabBarItemVariant;
    children: (color: string, size: number) => JSX.Element;
}

interface StyledTextProps {
    color: string;
}

const StyledText = styled.Text`
    color: ${(props: StyledTextProps) => props.color};
`;

export function TabBarItem(props: TabBarItemProps): ReactElement<TabBarItemProps> {
    const { path, activeColor, inactiveColor, variant, title, children, ...others } = props;
    const [tabPathname, setTabPathname] = useState<undefined | string>(undefined);
    const { config } = useTabBarConfig();
    const location = useLocation();
    const history = useHistory();
    const [active] = useMatch(path);
    const color = getTabBarItemColorForState(
        active,
        activeColor ?? config.itemActiveColor,
        inactiveColor ?? config.itemInactiveColor,
        variant
    );
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
    }, [path, active, location.pathname]);

    return (
        <TabBarItemContainer {...others} {...config} onPress={goToTab} bg={activeColor}>
            {children(color, iconSize)}
            {variant === 'circular' ? null : <StyledText color={color}>{title}</StyledText>}
        </TabBarItemContainer>
    );
}
