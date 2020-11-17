import React from 'react';
import { PressableProps } from 'react-native';
import { useMatch } from '../../../hooks/useMatch';
import { TabBarItemVariant } from './types/TabBarItemVariant';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';
import { getTabBarItemColorForState } from './util/getTabBarItemColorForState';
import styled from 'styled-components/native';
import { useWidthSizeGroup } from '../../../../SizeGroup/hooks';
import { Spacer } from '../../../../Layout/components/Spacer';
import { getValueForLargeSize } from '../../../../SizeGroup/util';
import { useCurrentTabBarConfig } from '../TabBarConfigProvider/hooks';
import { constants } from '../../../constants';
import { useGoToTab } from './hooks/useGoToTab';

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

export function TabBarItem(props: TabBarItemProps): JSX.Element {
    const { path, activeColor, inactiveColor, variant, title, highlightColor, children, ...others } = props;
    const { tabBarConfig } = useCurrentTabBarConfig();
    const [active] = useMatch(path);
    const color = getTabBarItemColorForState(
        active,
        activeColor ?? tabBarConfig.activeItemColor,
        inactiveColor ?? tabBarConfig.inactiveItemColor,
        variant
    );
    const TabBarItemContainer = getTabBarItemComponent(variant);
    const iconSize = getTabIconSize(variant);
    const widthSizeGroup = useWidthSizeGroup();
    const spacerSize = getValueForLargeSize(widthSizeGroup[0], constants.tabBarItemLargeSpacerSize, constants.tabBarItemCompactSpacerSize);
    const goToTab = useGoToTab(path, active);

    return (
        <TabBarItemContainer
            {...others}
            {...tabBarConfig}
            onPress={goToTab}
            bg={activeColor ?? tabBarConfig.activeItemColor}
            widthSizeGroup={widthSizeGroup}
            highlightColor={highlightColor ?? tabBarConfig.highlightItemColor}
        >
            {children(color, iconSize)}
            <Spacer width={spacerSize.width} height={spacerSize.height} />
            {variant === 'circular' ? null : <StyledText color={color}>{title}</StyledText>}
        </TabBarItemContainer>
    );
}
