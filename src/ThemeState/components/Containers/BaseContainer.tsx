import React from 'react';
import styled from 'styled-components/native';
import { View, ViewProps } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

interface StyledContainerProps {
    backgroundColor: string;
    backgroundShadow: string;
}

const StyledContainer = styled(View)`
    background-color: ${(props: StyledContainerProps) => props.backgroundColor};
    box-shadow: ${(props: StyledContainerProps) => props.backgroundShadow};
    padding: 16px;
    border-radius: 12px;
    elevation: 1;
`;

export interface BaseContainerProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}

export function BaseContainer(props: BaseContainerProps): JSX.Element {
    const containerColor = useThemeColor('containerColor');
    return <StyledContainer {...props} backgroundColor={containerColor.base} backgroundShadow={containerColor.shadow} />;
}
