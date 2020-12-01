import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, ViewProps } from 'react-native';
import { colors } from '../../Colors';

const StyledInputContainer = styled(ScrollView)`
    background-color: ${colors.white.base400};
    border-radius: 12px;
    height: 44px;
    padding: 12px;
`;

export interface BaseInputContainerProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}

export function BaseInputContainer(props: BaseInputContainerProps): JSX.Element {
    return <StyledInputContainer {...props} />;
}
