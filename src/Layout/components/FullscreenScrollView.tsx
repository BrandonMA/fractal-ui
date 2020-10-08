import React from 'react';
import { ScrollView, ScrollViewProps, View } from 'react-native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';

export interface FullScreenScrollViewProps extends Omit<ScrollViewProps, 'children'> {
    children: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export function FullScreenScrollView(props: FullScreenScrollViewProps): JSX.Element {
    const { noSafeAreaInsets, totalInsets } = useNavigationInsets();
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                {...props}
                scrollIndicatorInsets={noSafeAreaInsets}
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
