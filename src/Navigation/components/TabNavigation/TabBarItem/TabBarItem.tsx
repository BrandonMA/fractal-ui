import React, { memo } from 'react';
import { useMatch } from '../../../hooks/useMatch';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';
import styled from 'styled-components/native';
import { useWidthSizeGroup } from '../../../../SizeGroup/hooks';
import { Spacer } from '../../../../Layout/components/Spacer';
import { getValueForLargeSize } from '../../../../SizeGroup/util';
import { constants } from '../../../constants';
import { useGoToTab } from './hooks/useGoToTab';
import { TabBarItemProps } from './types/TabBarItemProps';
import { useTabBarItemColor } from './hooks/useTabBarItemColor';
import { useThemeColor } from '../../../../ThemeState';

interface StyledTextProps {
    color: string;
}

const StyledText = memo(styled.Text`
    color: ${(props: StyledTextProps) => props.color};
    font-size: 11px;
`);

export const TabBarItem = memo(
    (props: TabBarItemProps): JSX.Element => {
        const { path, variant, title, children, ...others } = props;
        const [active] = useMatch(path);
        const color = useTabBarItemColor(active, props);
        const TabBarItemContainer = getTabBarItemComponent(variant);
        const iconSize = getTabIconSize(variant);
        const widthSizeGroup = useWidthSizeGroup();
        const spacerSize = getValueForLargeSize(
            widthSizeGroup[0],
            constants.tabBarItemLargeSpacerSize,
            constants.tabBarItemCompactSpacerSize
        );
        const goToTab = useGoToTab(path, active);
        const tabBarItemColor = useThemeColor('mainInteractiveColor');
        console.log(tabBarItemColor.base);

        return (
            <TabBarItemContainer
                {...others}
                onPress={goToTab}
                bg={tabBarItemColor.base}
                widthSizeGroup={widthSizeGroup}
                highlightColor={tabBarItemColor.base600}
            >
                {children(color, iconSize)}
                <Spacer width={spacerSize.width} height={spacerSize.height} />
                {variant === 'circular' ? null : <StyledText color={color}>{title}</StyledText>}
            </TabBarItemContainer>
        );
    }
);
