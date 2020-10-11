import React from 'react';
import { ScrollView, ScrollViewProps, View } from 'react-native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';

export interface FullScreenScrollViewProps extends Omit<ScrollViewProps, 'children'> {
    children: React.ReactNode;
}

export function FullScreenScrollView(props: FullScreenScrollViewProps): JSX.Element {
    const { totalInsets, tabBarInsets } = useNavigationInsets();
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                {...props}
                scrollIndicatorInsets={tabBarInsets}
                contentContainerStyle={{
                    paddingTop: totalInsets.top,
                    paddingBottom: totalInsets.bottom,
                    paddingRight: totalInsets.right,
                    paddingLeft: totalInsets.left
                }}
            />
        </View>
    );
}
