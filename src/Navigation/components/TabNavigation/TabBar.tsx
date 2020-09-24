import React from 'react';
import { SafeAreaView, View } from 'react-native';

export interface TabBarProps {
    children: React.ReactNode;
}

export function TabBar(props: TabBarProps): JSX.Element {
    const { children } = props;
    return (
        <SafeAreaView>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    position: 'absolute',
                    width: '100%',
                    backgroundColor: 'white',
                    bottom: 0
                }}
            >
                {children}
            </View>
        </SafeAreaView>
    );
}
