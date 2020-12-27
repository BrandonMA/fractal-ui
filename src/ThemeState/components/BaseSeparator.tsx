import React from 'react';
import styled from 'styled-components/native';
import { View, ViewProps } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';

interface StyledContainerProps {
    backgroundColor: string;
}

const StyledContainer = styled(View)`
    background-color: ${(props: StyledContainerProps) => props.backgroundColor};
    height: 1px;
`;

export type BaseSeparatorProps = Omit<ViewProps, 'children'>;

export function BaseSeparator(props: BaseSeparatorProps): JSX.Element {
    const containerColor = useThemeColor('containerColor');
    return <StyledContainer {...props} backgroundColor={containerColor.base400} />;
}
