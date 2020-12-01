import React from 'react';
import styled from 'styled-components/native';
import { View, ViewProps } from 'react-native';
import { colors } from '../../Colors';

const StyledContainer = styled(View)`
    background-color: ${colors.white.base};
    box-shadow: ${colors.white.shadow};
    padding: 16px;
    border-radius: 12px;
`;

export interface BaseContainerProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}

export function BaseContainer(props: BaseContainerProps): JSX.Element {
    return <StyledContainer {...props} />;
}
