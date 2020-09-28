import React, { useCallback, ReactElement, useState, useEffect } from 'react';
import { Platform, Pressable, PressableProps, Text } from 'react-native';
import { useHistory, useLocation } from '../../../ReactRouter';
import { Ionicons } from '@expo/vector-icons';
import { useMatch } from '../../hooks/useMatch';
import styled from 'styled-components/native';
import { TabItemVariant } from './types/TabItemVariant';
import { getColorByActiveState } from './util/getColorByActiveState';

const SharedStyles = styled(Pressable)`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${Platform.OS === 'web' ? 'cursor: pointer' : null}
`;

const StyledContainer = styled(SharedStyles)`
    margin: 4px;
    padding: 4px 0;
    flex-grow: 1;
    min-height: 52px;
    min-width: 52px;
`;

const StyledCircularContainer = styled(SharedStyles)`
    height: 52px;
    width: 52px;
    border-radius: 26px;
    background-color: #1281ff;
    position: absolute;
    bottom: 22px;
    align-self: center;
`;

export interface TabBarItemProps extends PressableProps {
    path?: string;
    activeColor: string;
    inactiveColor: string;
    title: string;
    variant?: TabItemVariant;
}

export function TabBarItem(props: TabBarItemProps): ReactElement<TabBarItemProps> {
    const { path, activeColor, inactiveColor, variant, title, ...others } = props;
    const [tabPathname, setTabPathname] = useState<undefined | string>(undefined);
    const location = useLocation();
    const history = useHistory();
    const [active] = useMatch(path);
    const color = getColorByActiveState(active, activeColor, inactiveColor, variant);

    const Container = variant === 'circular' ? StyledCircularContainer : StyledContainer;

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
        <Container {...others} onPress={goToTab}>
            <Ionicons name='ios-home' size={variant === 'circular' ? 30 : 24} color={color} />
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
