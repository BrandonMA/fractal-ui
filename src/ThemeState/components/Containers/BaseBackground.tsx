import React from 'react';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';
import { FullScreen } from '../../../Layout';

interface StyledContainerProps {
    backgroundColor: string;
}

const StyledContainer = styled(FullScreen)`
    background-color: ${(props: StyledContainerProps) => props.backgroundColor};
    padding: 16px;
`;

export interface BaseContainerProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}

export function BaseBackground(props: BaseContainerProps): JSX.Element {
    const containerColor = useThemeColor('containerColor');
    return <StyledContainer {...props} backgroundColor={containerColor.base400} />;
}
