import React from 'react';
import { ScrollView, ScrollViewProps, View } from 'react-native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';

export interface FullscreenScrollViewProps extends Omit<ScrollViewProps, 'children'> {
    children: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export function FullscreenScrollView(props: FullscreenScrollViewProps): JSX.Element {
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