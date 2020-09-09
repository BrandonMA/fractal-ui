import React from 'react';
import { View } from 'react-native';

interface TabBarProps {
    children: React.ReactNode;
}

export function TabBar(props: TabBarProps): JSX.Element {
    const { children } = props;
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                position: 'absolute',
                width: '100%',
                backgroundColor: 'white'
            }}
        >
            {children}
        </View>
    );
}
