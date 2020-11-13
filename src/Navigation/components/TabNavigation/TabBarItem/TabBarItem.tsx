import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { PressableProps } from 'react-native';
import { useHistory, useLocation } from '../../../../ReactRouter';
import { useMatch } from '../../../hooks/useMatch';
import { TabBarItemVariant } from './types/TabBarItemVariant';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';
import { getTabBarItemColorForState } from './util/getTabBarItemColorForState';
import styled from 'styled-components/native';
import { useWidthSizeGroup } from '../../../../SizeClass/hooks';
import { Spacer } from '../../../../Layout/components/Spacer';
import { getValueForLargeSize } from '../../../../SizeClass/util';
import { SpacerSize } from './constants';
import { useCurrentTabBarConfig } from '../TabBarConfigProvider/hooks';

export interface TabBarItemProps extends PressableProps {
    title: string;
    path: string;
    children: (color: string, size: number) => JSX.Element;
    activeColor?: string;
    inactiveColor?: string;
    highlightColor?: string;
    variant?: TabBarItemVariant;
}

interface StyledTextProps {
    color: string;
}

const StyledText = styled.Text`
    color: ${(props: StyledTextProps) => props.color};
    font-size: 11px;
`;

export function TabBarItem(props: TabBarItemProps): ReactElement<TabBarItemProps> {
    const { path, activeColor, inactiveColor, variant, title, highlightColor, children, ...others } = props;
    const [tabPathname, setTabPathname] = useState<undefined | string>(undefined);
    const { config } = useCurrentTabBarConfig();
    const location = useLocation();
    const history = useHistory();
    const [active] = useMatch(path);
    const color = getTabBarItemColorForState(
        active,
        activeColor ?? config.activeItemColor,
        inactiveColor ?? config.inactiveItemColor,
        variant
    );
    const TabBarItemContainer = getTabBarItemComponent(variant);
    const iconSize = getTabIconSize(variant);
    const widthSizeGroup = useWidthSizeGroup();
    const spacerSize = getValueForLargeSize(widthSizeGroup[0], SpacerSize.large, SpacerSize.compact);

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
        <TabBarItemContainer
            {...others}
            {...config}
            onPress={goToTab}
            bg={activeColor ?? config.activeItemColor}
            sizeGroup={widthSizeGroup}
            highlightColor={highlightColor ?? config.highlightItemColor}
        >
            {children(color, iconSize)}
            <Spacer width={spacerSize.width} height={spacerSize.height} />
            {variant === 'circular' ? null : <StyledText color={color}>{title}</StyledText>}
        </TabBarItemContainer>
    );
}
