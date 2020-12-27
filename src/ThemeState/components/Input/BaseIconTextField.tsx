import React from 'react';
import { TextInputProps, View } from 'react-native';
import styled from 'styled-components/native';
import { useThemeColor } from '../../hooks/useThemeColor';
import { BaseTextField } from './BaseTextField';

const iconSize = 16;

interface ContainerProps {
    backgroundColor: string;
}

const StyledContainer = styled(View)`
    flex-direction: row;
    height: 44px;
    background-color: ${(props: ContainerProps) => props.backgroundColor};
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    border-radius: 12px;
`;

const StyledLeftImage = styled(View)`
    height: ${iconSize}px;
    width: ${iconSize}px;
`;

const StyledBaseTextField = styled(BaseTextField)`
    flex: 1;
`;

interface BaseIconTextFieldProps extends TextInputProps {
    leftImage: (color: string, size: number) => JSX.Element;
}

export function BaseIconTextField(props: BaseIconTextFieldProps): JSX.Element {
    const { leftImage, ...others } = props;
    const fieldColor = useThemeColor('fieldColor');

    return (
        <StyledContainer backgroundColor={fieldColor.base400}>
            <StyledLeftImage>{leftImage(fieldColor.base300, iconSize)}</StyledLeftImage>
            <StyledBaseTextField paddingLeft={8} {...others} />
        </StyledContainer>
    );
}
