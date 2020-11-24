import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaFullScreen } from '../../../src/Layout/components';
import { colors } from '../../../src/Colors';

const BackgroundView = styled(SafeAreaFullScreen)`
    background-color: ${colors.white.base400};
    justify-content: center;
    align-items: center;
`;

export function LoadingView(): JSX.Element {
    return (
        <BackgroundView>
            <ActivityIndicator />
        </BackgroundView>
    );
}
