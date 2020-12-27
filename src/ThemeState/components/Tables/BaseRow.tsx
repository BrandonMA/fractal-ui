import React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { RequiredKeys } from 'utility-types';
import { HorizontalView } from '../../../Layout';
import { InteractiveColors } from '../../types/FractalTheme';
import { BaseColorText, BaseText } from '../Text';

const StyledTitle = styled(BaseColorText)`
    flex: 1;
`;

interface BaseRowProps extends Omit<ViewProps, 'children'> {
    title: string;
    details: string;
    colorStyle: RequiredKeys<InteractiveColors>;
}

export function BaseRow(props: BaseRowProps): JSX.Element {
    const { title, details, colorStyle, ...others } = props;
    return (
        <>
            <HorizontalView {...others}>
                <StyledTitle textSize='md' bold colorStyle={colorStyle}>
                    {title}
                </StyledTitle>
                <BaseText textSize='md' textType='label'>
                    {details}
                </BaseText>
            </HorizontalView>
        </>
    );
}
