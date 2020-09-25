import React, { useCallback, ReactElement, useState, useEffect } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import { useHistory, useLocation } from '../../../ReactRouter';
import { Ionicons } from '@expo/vector-icons';
import { useMatch } from '../../hooks/useMatch';
import styled from 'styled-components/native';

const StyledContainer = styled(Pressable)`
    margin: 4;
    padding: 4 0;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-direction: column;
    min-height: 52;
`;

export interface TabBarItemProps extends PressableProps {
    path?: string;
    activeColor: string;
    inactiveColor: string;
    title: string;
}

function getColorByActiveState(active: boolean, activeColor: string, inactiveColor: string) {
    return active ? activeColor : inactiveColor;
}

export function TabBarItem(props: TabBarItemProps): ReactElement<TabBarItemProps> {
    const { path, activeColor, inactiveColor, title, ...others } = props;
    const [tabPathname, setTabPathname] = useState<undefined | string>(undefined);
    const location = useLocation();
    const history = useHistory();
    const [active] = useMatch(path);
    const color = getColorByActiveState(active, activeColor, inactiveColor);

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
        <StyledContainer {...others} onPress={goToTab}>
            <Ionicons name='ios-home' size={24} color={color} />
            <Text
                style={{
                    color
                }}
            >
                {title}
            </Text>
        </StyledContainer>
    );
}
