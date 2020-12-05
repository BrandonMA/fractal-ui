import React from 'react';
import styled from 'styled-components/native';
import { View, ViewProps } from 'react-native';
import { colors } from '../Colors';
import { useRecoilValue } from 'recoil';
import { fractalThemeAtomFamily } from '../fractalThemeAtomFamily';

interface StyledContainerProps {
    backgroundColor: string;
}

const StyledContainer = styled(View)`
    background-color: ${(props: StyledContainerProps) => props.backgroundColor};
    box-shadow: ${colors.white.shadow};
    padding: 16px;
    border-radius: 12px;
`;

export interface BaseContainerProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}

export function BaseContainer(props: BaseContainerProps): JSX.Element {
    const backgroundColor = useRecoilValue(fractalThemeAtomFamily('backgroundContrastColor'));
    return <StyledContainer {...props} backgroundColor={backgroundColor} />;
}
