import React, { useCallback, ReactElement } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useHistory } from '../../NavigationItems';
import { Ionicons } from '@expo/vector-icons';
import { useMatch } from '../hooks/useMatch';

export interface TabItemProps {
    path?: string;
    activeColor: string;
    inactiveColor: string;
    title: string;
}

function getColorByActiveState(active: boolean, activeColor: string, inactiveColor: string) {
    return active ? activeColor : inactiveColor;
}

export function TabItem(props: TabItemProps): ReactElement<TabItemProps> {
    const { path, activeColor, inactiveColor, title } = props;

    const history = useHistory();
    const goToTab = useCallback(() => {
        if (path != null) {
            return history.push(path);
        }
    }, [path, history]);

    const [active] = useMatch(props.path);
    const color = getColorByActiveState(active, activeColor, inactiveColor);

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
