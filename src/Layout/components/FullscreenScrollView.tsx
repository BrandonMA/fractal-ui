import React from 'react';
import { ScrollView, ScrollViewProps, View } from 'react-native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';
import styled from 'styled-components/native';

const Container = styled(View)`
    flex: 1;
`;

export interface FullScreenScrollViewProps extends Omit<ScrollViewProps, 'children'> {
    children: React.ReactNode;
}

export function FullScreenScrollView(props: FullScreenScrollViewProps): JSX.Element {
    const { totalInsets, tabBarInsets } = useNavigationInsets();
    return (
        <Container>
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
        </Container>
    );
}
