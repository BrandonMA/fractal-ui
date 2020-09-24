import React, { useCallback, ReactElement, useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useHistory, useLocation } from '../../../ReactRouter';
import { Ionicons } from '@expo/vector-icons';
import { useMatch } from '../../hooks/useMatch';

export interface TabBarItemProps {
    path?: string;
    activeColor: string;
    inactiveColor: string;
    title: string;
}

function getColorByActiveState(active: boolean, activeColor: string, inactiveColor: string) {
    return active ? activeColor : inactiveColor;
}

export function TabBarItem(props: TabBarItemProps): ReactElement<TabBarItemProps> {
    const { path, activeColor, inactiveColor, title } = props;
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
        <TouchableOpacity
            style={{
                margin: 4,
                paddingVertical: 4,
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                flexDirection: 'column',
                minHeight: 52
            }}
            onPress={goToTab}
        >
            <Ionicons name='ios-home' size={24} color={color} />
            <Text
                style={{
                    color,
                    fontSize: 0
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
