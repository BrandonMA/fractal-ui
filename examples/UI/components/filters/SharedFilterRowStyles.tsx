import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../../../src/ThemeState/Colors';
import { BaseButton, BaseButtonProps } from '../../../../src/Layout/components';

export const StyledButton = styled(BaseButton)`
    margin-bottom: 12px;
`;

export function SharedFilterRowStyles(props: BaseButtonProps): JSX.Element {
    return (
        <StyledButton {...props} backgroundColor={colors.white.base} backgroundShadow={colors.white.shadow} color={colors.white.base100} />
    );
}
