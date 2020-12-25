import React, { memo } from 'react';
import { useMatch } from '../../../hooks/useMatch';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';
import styled from 'styled-components/native';
import { useWidthSizeGroup, getValueForLargeSize } from '@bma98/size-class';
import { Spacer } from '../../../../Layout/components/Spacer';
import { useGoToTab } from './hooks/useGoToTab';
import { TabBarItemProps } from './types/TabBarItemProps';
import { useTabBarItemColor } from './hooks/useTabBarItemColor';
import { useThemeColor } from '../../../../ThemeState';
import { useRecoilValue } from 'recoil';
import { tabBarPositionAtom } from '../../../recoil/atoms/tabBarPositionAtom';

interface StyledTextProps {
    color: string;
}

const StyledText = memo(styled.Text`
    color: ${(props: StyledTextProps) => props.color};
    font-size: 11px;
`);

const tabBarItemCompactSpacerSize = { width: 0, height: 0 };
const tabBarItemLargeSpacerSize = { width: 8, height: 1 };

export const TabBarItem = memo(
    (props: TabBarItemProps): JSX.Element => {
        const { path, variant, title, children, ...others } = props;
        const [active] = useMatch(path);
        const color = useTabBarItemColor(active, props);
        const TabBarItemContainer = getTabBarItemComponent(variant);
        const iconSize = getTabIconSize(variant);
        const widthSizeGroup = useWidthSizeGroup();
        const tabBarPosition = useRecoilValue(tabBarPositionAtom);
        const spacerSize =
            tabBarPosition !== 'bottom'
                ? tabBarItemCompactSpacerSize
                : getValueForLargeSize(widthSizeGroup[0], tabBarItemLargeSpacerSize, tabBarItemCompactSpacerSize);
        const goToTab = useGoToTab(path, active);
        const tabBarItemColor = useThemeColor('mainInteractiveColor');

        return (
            <TabBarItemContainer
                {...others}
                onPress={goToTab}
                bg={tabBarItemColor.base}
                widthSizeGroup={widthSizeGroup}
                highlightColor={tabBarItemColor.base600}
            >
                {children(color, iconSize)}
                <Spacer {...spacerSize} />
                {variant === 'circular' && title != null ? null : <StyledText color={color}>{title}</StyledText>}
            </TabBarItemContainer>
        );
    }
);
