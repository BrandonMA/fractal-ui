import React from 'react';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';
import { useThemeColor } from '../../index';

interface StyledInputCotainer {
    backgroundColor: string;
}

const StyledInputContainer = styled.View`
    background-color: ${(props: StyledInputCotainer) => props.backgroundColor};
    border-radius: 12px;
    padding: 12px;
`;

export interface BaseInputContainerProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}

export function BaseInputContainer(props: BaseInputContainerProps): JSX.Element {
    const fieldColor = useThemeColor('fieldColor');
    return <StyledInputContainer {...props} backgroundColor={fieldColor.base400} />;
}
