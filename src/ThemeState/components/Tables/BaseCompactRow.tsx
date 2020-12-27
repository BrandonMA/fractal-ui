import React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { HorizontalView } from '../../../Layout';
import { BaseText } from '../Text';

const StyledTitle = styled(BaseText)`
    flex: 1;
`;

interface BaseCompactRowProps extends Omit<ViewProps, 'children'> {
    title: string;
    details: string;
}

export function BaseCompactRow(props: BaseCompactRowProps): JSX.Element {
    const { title, details, ...others } = props;
    return (
        <HorizontalView {...others}>
            <StyledTitle bold textSize='sm'>
                {title}
            </StyledTitle>
            <BaseText textSize='sm' textType='label'>
                {details}
            </BaseText>
        </HorizontalView>
    );
}
